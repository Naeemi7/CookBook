import express from "express";
import { addComment } from "../controllers/commentController.js";

const router = express.Router();

router.post("/create/:userId/:recipeId", addComment);

export default router;
