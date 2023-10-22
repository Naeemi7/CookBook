import multer from "multer";
import bytes from "bytes";

//Specifying the Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads");
  },

  //Randomize the name of the file
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

//File Validation
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    //Allow the image types: jpeg and png
    cb(null, true);
  } else {
    //Prevents upload
    cb({ message: "Unsupported File Type" }, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: bytes() },
  fileFilter: fileFilter,
});

export default upload;
