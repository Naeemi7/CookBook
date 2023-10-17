import { body } from "express-validator";
import { uppercaseFirstLetter } from "../helper/userHelper.js";
import { checkRecipeTitle } from "../helper/recipeHelper.js";

export const validateRecipe = [
  //Sanitizes the recipe title
  body("title")
    .trim()
    .isAlpha()
    .withMessage("The recipe title should consist of alphabetic characters")
    .customSanitizer((value) => uppercaseFirstLetter(value))
    .custom(async (value) => checkRecipeTitle(value)),
];
