"use server";

import { revalidatePath } from "next/cache";
import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import { createSession, deleteSession } from "../session";
import bcrypt from 'bcrypt'

// CREATE
export async function createUser(user: {
  username: string;
  email: string;
  password: string;
}) {
  try {
    await connectToDatabase()

    const existing = await User.findOne({ email: user.email })
    if (existing) throw new Error("Email already in use")

    const hashedPassword = await bcrypt.hash(user.password, 10)

    const newUser = await User.create({
      ...user,
      password: hashedPassword,
    })

    await createSession(newUser._id);

    return { success: true }

  } catch (error) {
    handleError(error);
    return { success: false }
  }
}

// AUTHENTICATE
export async function authenticateUser(email: string, password: string){
  try {
    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) return { success: false };

    const passwordValid = await bcrypt.compare(password, user.password);

    if(!passwordValid) return { success: false };

    await createSession(user._id);

    return { success: true }

  } catch (error) {
    handleError(error);
    return { success: false }
  }
}

// LOGOUT
export async function logout() {
  try{
    await deleteSession();
    return { success: true }
  }catch(error){
    handleError(error);
    return { success: false }
  }
}

// READ
export async function getUserById(userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findById(userId).populate("friends");

    if (!user) throw new Error("User not found");

    const userObj = user.toObject();
    const { password, ...safeUser } = userObj;
    
    return {
      ...safeUser, 
      id: safeUser._id.toString()
    }
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateUser(userId: string, user: Partial<{
  username: string;
  email: string;
  password: string;
  pfp: string;
  bio: string;
  last_seen: Date;
  friends: string[];
  settings: {
    privacy?: {
      last_seen?: "everyone" | "contacts" | "nobody";
      account?: "public" | "private";
    };
    color_mode?: "dark" | "light";
  };
}>) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findByIdAndUpdate(userId, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteUser(userId: string) {
  try {
    await connectToDatabase();

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) throw new Error("User not found");

    revalidatePath("/");

    return JSON.parse(JSON.stringify(deletedUser));
  } catch (error) {
    handleError(error);
  }
}
