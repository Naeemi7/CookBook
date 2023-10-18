import { StatusCodes } from "http-status-codes";
import Comment from "../models/Comment.js";
import User from "../models/User.js";
import Recipe from "../models/Recipe.js";

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

    return res
      .status(StatusCodes.OK)
      .json({ message: "The comment is: ", newComment });
  } catch (error) {}
};
