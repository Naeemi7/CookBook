/* Package Imports */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

/* Internal Imports */
import userRoutes from "./routes/userRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import connectToMongoDB from "./config/database.js";

dotenv.config();

const app = express();
const port = 3000;

// Parse the JSON body to req.body
app.use(express.json());

app.use(cookieParser());

//Parse JSON bodies (Content-Type: application/json)
app.use(bodyParser.json());

// Setting up CORS
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["HEAD", "GET", "POST", "PATCH", "DELETE", "PUT"],
  credentials: true,
};

app.use(cors(corsOptions));

// Registering Routes
app.use("/api/users", userRoutes);
app.use("/api/recipe", recipeRoutes);
app.use("/api/comment", commentRoutes);

app.use("/uploads", express.static("./uploads"));

// Server is listening on port 3000
connectToMongoDB().then(() => {
  app.listen(port, () => {
    console.log("Server is listening on port", port);
  });
});
