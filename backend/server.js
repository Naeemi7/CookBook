import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

dotenv.config();

const app = express();
const port = 3000;

// Parse the JSON body to req.body
app.use(express.json());

app.use(cookieParser());

// Setting up CORS
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["HEAD", "GET", "POST", "PATCH", "DELETE", "PUT"],
  credentials: true,
};

app.use(cors(corsOptions));

// Connecting to the database
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log("Database connection error:", error.message);
  });

// Registering Routes
app.use("/api/users", userRoutes);
app.use("/api/recipe", recipeRoutes);
app.use("/api/comment", commentRoutes);

// Server is listening on port 3000
app.listen(port, () => {
  console.log("Server is listening on port", port);
});
