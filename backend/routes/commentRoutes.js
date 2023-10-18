import express from "express";
import {
  addComment,
  deleteComment,
  getAllCommentByRecipeId,
} from "../controllers/commentController.js";
import { validateComments } from "../middleware/commentSanitizer.js";
import { validator } from "../middleware/validator.js";

const router = express.Router();

router.post(
  "/create/:userId/:recipeId",
  validateComments,
  validator,
  addComment
);

router.delete("/delete/:recipeId", deleteComment);

router.get("/commentList/:recipeId", getAllCommentByRecipeId);
export default router;
