import { StatusCodes } from "http-status-codes";
import { verifyJwt } from "../helpers/jwt.js";

export const authorizeUser = (req, res, next) => {
  // Handle if the token isn't there
  if (!req.cookies.userToken) {
    //does the jwt token cookie exist?
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Unauthorized" }); //it doesn't exist
  }

  //verify if token is valid
  try {
    const isValid = verifyJwt(req.cookies.userToken);
    console.log("isValid token", isValid);
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ errorCode: 401, message: "Unauthorized" });
  }

  next();
};
