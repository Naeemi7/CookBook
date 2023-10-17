import Recipe from "../models/Recipe.js";

export const checkRecipeTitle = async (title) => {
  const existingRecipe = await Recipe.findOne({ title });

  if (existingRecipe) {
    throw new Error("A recipe already exists with this title");
  }
};
