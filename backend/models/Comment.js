import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    comment: { type: String, required: true },

    // Reference to the User model for the user who added the comment
    user: { type: Schema.Types.ObjectId, ref: "User" },

    // Reference to the Recipe model for the recipe associated with the comment
    recipe: { type: Schema.Types.ObjectId, ref: "Recipe" },
  },
  { timestamps: true }
);

const Comment = model("Comment", commentSchema);

export default Comment;
