import express from "express";
import {
  createUser,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";
import { validateUserRules } from "../middleware/userSanitizer.js";
import { validator } from "../middleware/validator.js";
/* import { uploadImageMiddleware } from "../middleware/uploadImage.js";
import upload from "../multer/multer.js"; */

const router = express.Router();

// Unprotected endpoints
router.post("/register", validateUserRules, validator, createUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

/* // Upload profile image route
router.post("/upload-profile", upload.array("profile"), uploadImageMiddleware); */

export default router;
