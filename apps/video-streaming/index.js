const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
// const ejs = require("ejs");

const PORT = process.env.PORT || 3000;

// Disk Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "videos/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname)
    const newName = Date.now() + "_" + file.originalname;
    cb(null, newName);
  }
});

const upload = multer({ storage });

const app = express();

app.set('view engine', 'ejs');

// Single file upload
app.post("/upload/video", upload.single("video"), (req, res, next) => {
    console.log("REQ: /upload/video", req.file);
    res.send("Single file uploaded successfully");
});

// Serve HTML
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// List HTML
app.get("/videos", (req, res, next) => {
    fs.readdir("./videos", "utf8", (err, files)=>{
      let items = [];
      console.log(files);
      for (const file of files) {
        items.push({
          "name": file,
          "link": "player/" + file
        });
      }
      res.render('list', { items });
    })
});

app.get("/player/:name", (req, res, next) => {
    const videoName = req.params.name;
    // res.sendFile(path.join(__dirname, "videos", videoName)); // Play via browser directly
    res.render("player", {videoName} )
});

app.get("/play/:name", (req, res, next) => {
  const videoName = req.params.name;
  const videoPath = path.join(__dirname, "videos", videoName);
  const stats = fs.statSync(videoPath);
  const fileSize = stats.size;
  const range = req.headers.range; // Partial/Part Streaming
  console.log("range recieved from browser", range)
  
  if (!range) {
    let readStream = fs.createReadStream("./videos/" + videoName);

    res.writeHead(200, {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4"
    });
    readStream.pipe(res);
  } else {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = (end - start) + 1;
    const stream = fs.createReadStream(videoPath, { start, end });
    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4"
    });
    stream.pipe(res);
  }
});

app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});

process.on("exit", (code) => {
    console.log("Process exiting with code:", code);
});
