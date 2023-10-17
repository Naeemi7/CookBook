import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors"; // Import the 'cors' module

dotenv.config();

const app = express();
const port = 3000;

// Parse the JSON body to req.body
app.use(express.json());

// Setting up CORS
const corsOptions = {
  origin: "*", // Change this to the allowed origin(s) in your production environment
  methods: ["HEAD", "GET", "POST", "PATCH", "DELETE", "PUT"],
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

// Server is listening on port 3000
app.listen(port, () => {
  console.log("Server is listening on port", port);
});
