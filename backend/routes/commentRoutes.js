import express from "express";
import { addComment } from "../controllers/commentController.js";
import { validateComments } from "../middleware/commentSanitizer.js";
import { validator } from "../middleware/validator.js";

const router = express.Router();

router.post(
  "/create/:userId/:recipeId",
  validateComments,
  validator,
  addComment
);

export default router;
