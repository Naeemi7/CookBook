import { StatusCodes } from "http-status-codes";
import Comment from "../models/Comment.js";
import User from "../models/User.js";
import Recipe from "../models/Recipe.js";

/**
 * Handles the adding comments for Recipe using the userId and RecipeId
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const addComment = async (req, res) => {
  try {
    const { userId, recipeId } = req.params;
    const { comment } = req.body;

    //Look for a user using User ID
    const user = await User.findById(userId);

    //look for Recipe usng recipe ID
    const recipe = await Recipe.findById(recipeId);

    // Create a new comment
    const newComment = await Comment.create({
      comment,
      user: user._id, // Reference to the user's ObjectId
      recipe: recipe._id, // Reference to the recipe's ObjectId
    });

    const returnedComment = await newComment.populate(["user", "recipe"]);

    return res
      .status(StatusCodes.OK)
      .json({ message: "The comment is: ", returnedComment });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong", error });
  }
};
