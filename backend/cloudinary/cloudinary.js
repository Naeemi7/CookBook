import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Uploading images
const cloudUpload = (file, folder) => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(file, { folder: folder }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve({ url: result.secure_url, id: result.public_id });
      }
    });
  });
};

export default cloudUpload;
