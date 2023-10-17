import { StatusCodes } from "http-status-codes";
import Recipe from "../models/Recipe.js";

export const checkRecipeTitle = async (req, res, next) => {
  try {
    const { title } = req.body;

    //Check if a recipe with the same title already exists
    const existingRecipe = await Recipe.findOne({ title });

    if (existingRecipe) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Recipe with this title already exists" });
    }

    //If no existing recipe with the same title, proceed to the next middleware
    next();
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong" });
  }
};
