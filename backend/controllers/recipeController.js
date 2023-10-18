import { StatusCodes } from "http-status-codes";
import Recipe from "../models/Recipe.js";
import User from "../models/User.js";

/**
 * Handles  creating new Recipe based on userId
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients } = req.body;
    const userId = req.params.userId;

    // Check if the user with the given ID exists
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "User not found" });
    }

    //Create new Recipe
    const newRecipe = await Recipe.create({
      title,
      description,
      ingredients,
      user: user._id, //User reference to user's ID
    });

    return res
      .status(StatusCodes.OK)
      .json({ mesage: "The recipe has been saved!", newRecipe });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong!" });
  }
};

/**
 * Handles getting all Recipes using userId
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getAllRecipeByUserId = async (req, res) => {
  try {
    const recipe = await Recipe.find({ user: req.params.userId });

    return res
      .status(StatusCodes.OK)
      .json({ message: "All the recipes are, ", recipe });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong" });
  }
};

/**
 * Handles getting All the Recipies
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getAllRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("user");

    return res
      .status(StatusCodes.OK)
      .json({ message: "All Recipes are: ", recipes });
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong" });
  }
};
