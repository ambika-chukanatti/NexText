"use server"

import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });

  const cookie = await cookies()

  cookie.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
}

export async function deleteSession() {
  const cookie = await cookies()
  cookie.delete("session");
}

type SessionPayload = {
  userId: string;
  expiresAt: Date;
};

async function encrypt(payload: SessionPayload) {
  return await new SignJWT({
    ...payload, 
    userId: payload.userId.toString()
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = ""): Promise<any> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    
    return {
      userId: payload.userId as string,
      expiresAt: new Date(payload.expiresAt as string)
    };
  } catch (error) {
    console.log("Failed to verify session");
  }
}
