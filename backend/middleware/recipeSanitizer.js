import { body } from "express-validator";
import { uppercaseFirstLetter } from "../helper/userHelper.js";
import { checkRecipeTitle } from "../helper/recipeHelper.js";

export const validateRecipe = [
  //Sanitizes the recipe title
  body("title")
    .trim()
    .isAlpha("en-GB", { ignore: " " }) //ignores the spaces
    .withMessage("The recipe title should consist of alphabetic characters")
    .customSanitizer((value) => uppercaseFirstLetter(value))
    .custom(async (value) => checkRecipeTitle(value)),

  //Sanitizes the recipe description
  body("description")
    .trim()
    .customSanitizer((value) => uppercaseFirstLetter(value)),

  //Sanitazes the recipe ingredients
  body("ingredients").isAlphanumeric(),

  //Sanitizes the recipe time
  body("time")
    .trim()
    .isNumeric()
    .withMessage("The Cooking time has to below number"),
];
