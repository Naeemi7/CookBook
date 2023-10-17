import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";
import { validateUserRules } from "../middleware/userSanitizer.js";
import { validator } from "../middleware/validator.js";

const router = express.Router();

//Non protected endpoints
router.post("/register", validateUserRules, validator, createUser);
router.post("/login", loginUser);

export default router;
