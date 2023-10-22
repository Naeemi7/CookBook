import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      imageName: { type: String },
      imagePath: { type: String },
      imageMimetype: { type: String },
      size: { type: Number },
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
