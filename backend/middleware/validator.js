import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

//Validate users if everything is correct!
export const validator = (req, res, next) => {
  //Extract the validation error from the request object
  const errors = validationResult(req);

  //if there are errors
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
  }
  next();
};
