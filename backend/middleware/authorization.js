import { StatusCodes } from "http-status-codes";
import { verifyJwt } from "../helper/jwt.js";

export const authorizeUser = (req, res, next) => {
  // Handle if the token isn't there
  if (!req.cookies.jwt) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "UNAUTHORIZED!" });
  }

  try {
    const isValid = verifyJwt(req.cookies.jwt); // Correct the typo "req.cookes" to "req.cookies"
    if (!isValid) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "UNAUTHORIZED!" });
    }
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "UNAUTHORIZED!" });
  }
  next();
};
