import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fs from "fs";

import userRoutes from "./routes/userRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

import connectToMongoDB from "./config/database.js";
import upload from "./config/multer.js";
import cloudUpload from "./config/cloudinary.js";
import path from "path";

dotenv.config();

const app = express();
const port = 3000;

// Parse the JSON body to req.body
app.use(express.json());

app.use(cookieParser());

//Parse URL-encoded bodies (Content-Type: application)
app.use(bodyParser.urlencoded({ extended: false }));

//Parse JSON bodies (Content-Type: application/json)
app.use(bodyParser.json());

// Initializing Cloudinary

// Setting up CORS
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["HEAD", "GET", "POST", "PATCH", "DELETE", "PUT"],
  credentials: true,
};

app.use(cors(corsOptions));

//Uploading the images to cloudinary
app.post("/upload-profile", upload.array("profile"), async (req, res) => {
  const uploader = async (path) => await cloudUpload(path, "images");

  if (req.method === "POST") {
    try {
      const urls = [];

      for (const file of req.files) {
        const { path } = file;
        const newPath = await uploader(path);
        urls.push(newPath);
        fs.unlinkSync(path); // Delete the files locally after they are uploaded to Cloudinary
      }

      res
        .status(StatusCodes.OK)
        .json({ message: "Images uploaded successfully", data: urls });
    } catch (error) {
      console.error("Error processing image uploads:", error);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "Image upload failed" });
    }
  } else {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Invalid request method" });
  }
});

// Registering Routes
app.use("/api/users", userRoutes);
app.use("/api/recipe", recipeRoutes);
app.use("/api/comment", commentRoutes);

// Server is listening on port 3000
connectToMongoDB().then(() => {
  app.listen(port, () => {
    console.log("Server is listening on port", port);
  });
});
