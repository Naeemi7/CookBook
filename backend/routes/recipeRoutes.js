import express from "express";
import {
  createRecipe,
  getAllRecipeByUserId,
} from "../controllers/recipeController.js";
import { validateRecipe } from "../middleware/recipeSanitizer.js";
import { validator } from "../middleware/validator.js";

const router = express.Router();

router.post("/create/:userId", validateRecipe, validator, createRecipe);

router.get("/:userId", getAllRecipeByUserId);

export default router;
