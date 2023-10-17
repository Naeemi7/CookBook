import { StatusCodes } from "http-status-codes";
import Recipe from "../models/Recipe.js";
import User from "../models/User.js";

/**
 * Creates new Recipe based on userId
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
    const newRecipe = new Recipe({
      title,
      description,
      ingredients,
      user: user._id, //User reference to user's ID
    });

    //Save the new recipe to the database
    await newRecipe.save();
    return res
      .status(StatusCodes.OK)
      .json({ mesage: "The recipe has been saved!", newRecipe });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong!" });
  }
};
