import { Schema, model } from "mongoose";
import User from "./User.js";

const recipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  image: { type: String },
  // Reference to the User model
  user: { type: Schema.Types.ObjectId, ref: User, default: null },
});

const Recipe = model("Recipe", recipeSchema);

export default Recipe;
