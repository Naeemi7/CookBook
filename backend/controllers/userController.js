import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { generateJwt } from "../helpers/jwt.js";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

console.log("import file name", import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("filename", __filename);
console.log("directoryname", __dirname);

/**
  Handles user registration
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
    console.error(error);
    // Return an internal server error response if an error occurs
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong", error: error.message });
  }
};

/**
 * Handles the user login.
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const loginUser = async (req, res) => {
  try {
    // Find a user with the provided email
    const user = await User.findOne({ email: req.body.email });

    // Check if the user doesn't exist
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "User not found. Please register an account." });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (passwordMatch) {
      // Generate a JSON Web Token (JWT) for the user
      const token = generateJwt(user._id);

      // Set the token as an HTTP-only cookie
      res.cookie("userToken", token, {
        httpOnly: true,
        secure: false, // Set to true in production with HTTPS
      });

      // Return a successful response
      return res
        .status(StatusCodes.OK)
        .json({ message: "Login successful. Welcome, ", user: user });
    } else {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "Incorrect email or password. Please try again." });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong", error: error.message });
  }
};

/**
 * Handles the user logout
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const logoutUser = (req, res) => {
  res.clearCookie("userToken", {
    httpOnly: true,
    secure: false,
  });

  return res.json({ message: "User logged out" });
};

/**
 * Handles the user profile image update
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const updateProfile = async (req, res) => {
  //Store that file information in database

  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: "NOT FOUND" });
    }

    /* Send the image info to database */
    const newProfile = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          imageName: req.file.filename,
          imagePath: req.file.path,
          imageMimetype: req.file.mimetype,
          size: req.file.size,
        },
      },
      { new: true }
    );

    return res
      .status(StatusCodes.OK)
      .json({ message: "Your profile image has been uploaded", newProfile });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong", error: error.message });
  }
};
