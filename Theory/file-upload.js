const express = require("express");
const multer = require("multer");
const path = require("path");

const PORT = process.env.PORT || 3000;

// const upload = multer({ dest: "uploads/" }); // for renaming need to use diskStorage in multer

// Disk Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname)
    const newName = Date.now() + "_" + file.originalname;
    cb(null, newName);
  }
});

const upload = multer({ storage });

const app = express();

// Single file upload
app.post("/upload/single", upload.single("file"), (req, res, next) => {
    console.log("REQ: /upload/single", req.file);
    res.send("Single file uploaded successfully");
});

// Multiple file upload
app.post("/upload/multi", upload.array("photos", 12), (req, res, next) => {
    console.log("REQ: /upload/multi", req.files);
    res.send("Multiple files uploaded successfully");
});

// Only text fields
app.post("/profile", upload.none(), (req, res, next) => {
    console.log("REQ: /profile", req.body);
    res.send("Profile data received");
});

// Serve HTML
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "file-upload.html"));
});

app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});

process.on("exit", (code) => {
    console.log("Process exiting with code:", code);
});
