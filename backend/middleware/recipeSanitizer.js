import { body } from "express-validator";
import { uppercaseFirstLetter } from "../helper/userHelper.js";

export const validateRecipe = [
  body("title")
    .trim()
    .isAlpha()
    .withMessage("The recipe title should consist of alphabetic characters"),
];
