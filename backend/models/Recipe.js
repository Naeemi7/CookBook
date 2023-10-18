import { Schema, model } from "mongoose";

const recipeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    image: { type: String },

    // Reference to the User model
    user: { type: Schema.Types.ObjectId, ref: "User", default: null },

    //Add a field to store comments associated with the recipe
    comments: { type: Schema.Types.ObjectId, ref: "Comment" },
  },
  { timestamps: true }
);

const Recipe = model("Recipe", recipeSchema);

export default Recipe;
