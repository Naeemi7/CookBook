import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import bcrypt from "bcrypt";

/**
 * Create User: Handles user registration
 * @param {*} req - Express request object
 * @param {*} res - Express response object
 * @returns - JSON response
 */
export const createUser = async (req, res) => {
  // Hash the user's password
  const hashedPassword = await bcrypt.hash(req.body.password, 12);

  try {
    const { firstname, lastname, email } = req.body;

    // Create a new user in the database
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    if (!newUser) {
      // Return a bad request response if user creation fails
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: "You need to provide the required information to sign up!",
      });
    }

    // Return a success response with the newly created user
    return res.status(StatusCodes.CREATED).json({
      message: "User created successfully!",
      newUser,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    // Return an internal server error response if an error occurs
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Something went wrong!",
    });
  }
};
