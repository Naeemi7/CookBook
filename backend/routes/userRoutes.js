import express from "express";
import {
  createUser,
  loginUser,
  logoutUser,
  updateProfile,
} from "../controllers/userController.js";
import { validateUserRules } from "../middleware/userSanitizer.js";
import { validator } from "../middleware/validator.js";
import upload from "../config/multer.js";

const router = express.Router();

// Unprotected endpoints
router.post("/register", validateUserRules, validator, createUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

router.patch("/upload-profile/:userId", upload.single("image"), updateProfile);

export default router;
