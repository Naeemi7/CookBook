import express from "express";
import {
  createRecipe,
  getAllRecipe,
  getAllRecipeByUserId,
  deleteRecipeById
} from "../controllers/recipeController.js";
import { validateRecipe } from "../middleware/recipeSanitizer.js";
import { validator } from "../middleware/validator.js";
import { authorizeUser } from "../middleware/authorization.js";

const router = express.Router();

//Unprotected endpoints
router.get("/", getAllRecipe);

//Protected enpoints
router.use(authorizeUser);
router.post("/create/:userId", validateRecipe, validator, createRecipe);
router.get("/:userId", getAllRecipeByUserId);
router.delete("/delete",deleteRecipeById);
export default router;
