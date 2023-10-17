import express from "express";
import { createUser } from "../controllers/userController.js";
import { validateUserRules } from "../middleware/userSanitizer.js";
import { validator } from "../middleware/validator.js";

const router = express.Router();

//Non protected endpoints
router.post("/create", validateUserRules, validator, createUser);
router.post("/login");

export default router;
