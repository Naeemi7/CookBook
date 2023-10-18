import express from "express";
import {
  createRecipe,
  getAllRecipe,
  getAllRecipeByUserId,
  updateRecipe,
} from "../controllers/recipeController.js";
import { validateRecipe } from "../middleware/recipeSanitizer.js";
import { validator } from "../middleware/validator.js";
import { authorizeUser } from "../middleware/authorization.js";

const router = express.Router();

//Unprotected endpoints
router.get("/", getAllRecipe);
router.patch("/update/:recipeId", updateRecipe);

//Protected enpoints
router.use(authorizeUser);
router.post("/create/:userId", validateRecipe, validator, createRecipe);
router.get("/:userId", getAllRecipeByUserId);

export default router;
