import { StatusCodes } from "http-status-codes";
import { verifyJwt } from "../helper/jwt.js";

export const authorizeUser = (req, res, next) => {
  //handles if the token isn't there
  if (!req.cookies.jwt) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "UNAUTHORIZED!" });
  }

  try {
    const isValid = verifyJwt(req.cookes.jwt);
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "UNAUTHORIZED!" });
  }
  next();
};
