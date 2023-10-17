import { StatusCodes } from "http-status-codes"; // Import StatusCodes directly
import User from "../models/User.js";
import bcrypt from "bcrypt"; // Import bcrypt properly
import { hashSync } from "bcrypt"; // Import the hashSync function if needed

/**
 * Function to create User
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const createUser = async (req, res) => {
  // Hash the password
  const hashedPassword = await bcrypt.hash(req.body.password, 12);

  try {
    const { firstname, lastname, email } = req.body;

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    if (!newUser) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: "You need to provide the required information to sign up!",
      });
    }

    return res.status(StatusCodes.CREATED).json({
      message: "User created successfully!",
      newUser,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Something went wrong!",
    });
  }
};
