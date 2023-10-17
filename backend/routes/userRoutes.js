import express from "express";
import { createUser } from "../controllers/userController.js";
import { validateUserRules } from "../middleware/userSanitizer.js";
import { validator } from "../middleware/validator.js";

const router = express.Router();

router.post("/create", validateUserRules, validator, createUser);

export default router;
