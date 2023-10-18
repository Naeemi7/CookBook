import express from "express";
import {
  addComment,
  deleteComment,
  getAllCommentByRecipeId,
  updateCommentById,
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
router.patch("/update/:id", updateCommentById);

router.get("/commentList/:recipeId", getAllCommentByRecipeId);
export default router;
