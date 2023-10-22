import { Schema, model } from "mongoose";

const recipeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    time: { type: Number, required: true },
    type: { type: [String], required: true },
    category: { type: String, required: true },
    instructions: { type: String, required: true },
    image: {
      imageName: { type: String },
      imagePath: { type: String },
      fileMimetype: { type: String },
      size: { type: Number },
    },

    // Reference to the User model
    user: { type: Schema.Types.ObjectId, ref: "User", default: null },

    // Add a field to store comments associated with the recipe
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

const Recipe = model("Recipe", recipeSchema);

export default Recipe;
