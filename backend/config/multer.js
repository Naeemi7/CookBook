import multer from "multer";
import bytes from "bytes";

//Specifying the Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //where to store the file
    cb(null, "./uploads");
  },

  //Randomize the name of the file
  filename: (req, file, callback) => {
    const ext = file.mimetype.split("/")[1];
    const originalNameExtension = file.originalname.split(".")[0];

    callback(null, `${originalNameExtension}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: bytes("1MB") },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      //Allow the image types: jpeg or png
      cb(null, true);
    } else {
      //Prevent upload
      cb({ error: "Unsupported File Type" }, false);
    }
  },
});

export default upload;
