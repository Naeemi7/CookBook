import { Schema, model } from "mongoose";

// Define enums for recipeType and category
const RecipeTypeEnum = ["dessert", "appetizer", "main", "snack", "drink"];
const CategoryEnum = ["Vegetarian", "Non-Vegetarian", "All-Vegan"];

const recipeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    time: { type: Number, required: true },
    type: { type: String, enum: RecipeTypeEnum, required: true },
    category: { type: String, enum: CategoryEnum, required: true },
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
