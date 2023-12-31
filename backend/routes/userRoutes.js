import express from "express";
import {
  createUser,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";
import { validateUserRules } from "../middleware/userSanitizer.js";
import { validator } from "../middleware/validator.js";

const router = express.Router();

//Unprotected endpoints
router.post("/register", validateUserRules, validator, createUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

export default router;
