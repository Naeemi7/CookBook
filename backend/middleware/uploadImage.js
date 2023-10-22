import { StatusCodes } from "http-status-codes";
import cloudUpload from "../cloudinary/cloudinary.js";
import fs from "fs";

export const uploadImageMiddleware = async (req, res) => {
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
};
