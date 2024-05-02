import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: { type: String, required: true, min: 10, max: 30 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    status: { type: String, enum: ["online", "offline"], default: "offline" },
    gender: { type: String, enum: ["male", "female"] },
    isConfirmed: { type: Boolean, default: false },
    activationCode: String,
    forGetCode: String,
    OTPCode: String,
    profileImage: {
      url: {
        type: String,
        default:
          "https://res.cloudinary.com/ddqzfqu1j/image/upload/v1691297271/user/profile-avatar-buddyboss_lgstkx.webp",
      },
      id: {
        type: String,
        default: "profile-avatar-buddyboss_lgstkx",
      },
    },
    coverImage: [
      { url: { type: String, required: true } },
      { id: { type: String, required: true } },
    ],
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
