import axios from "axios";
import process from "process";

const baseUrl =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000/api/recipe"
    : "/api/recipe";

const recipeAPI = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

console.log(process.env.NODE_ENV);

export default recipeAPI;
