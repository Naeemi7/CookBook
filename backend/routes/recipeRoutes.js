import express from "express";
import { createRecipe } from "../controllers/recipeController.js";
import { checkRecipeTitle } from "../middleware/recipeValidator.js";

const router = express.Router();

router.post("/create/:userId", checkRecipeTitle, createRecipe);

export default router;
