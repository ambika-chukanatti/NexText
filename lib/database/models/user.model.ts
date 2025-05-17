import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    profile_name: {
        type: String,
        default: ""
    },
    pfp: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    },
    last_seen: {
        type: Date,
        default: Date.now
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    settings: {
        privacy: {
            last_seen: {
                type: String,
                enum: ["everyone", "contacts", "nobody"],
                default: "everyone"
            },
            account: {
                type: String,
                enum: ["public", "private"],
                default: "public"
            }
        },
        color_mode: {
            type: String,
            enum: ["dark", "light"],
            default: "dark"
        }
    }
});

const User = models?.User || model("User", UserSchema);

export default User;
