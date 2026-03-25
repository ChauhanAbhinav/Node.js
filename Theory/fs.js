// fs module
// fs (File System module) is used to read, write, update, delete, and manage files on your system.

const fs = require('fs');

// 1. Read File

fs.readFile("./fs.js", 'utf8', (err, data)=>{
    if(err) {
        throw err;
    }
    console.log(data);
})

let data = fs.readFileSync("./fs.js", "utf8")
console.log(data)

// 2. Write File/
// Create and overwrite

fs.writeFile('test.txt', 'Hello World', (err) => {
  if (err) throw err;
  console.log('File written');
});

// 3. Append Fale
fs.appendFile('test.txt', '\nNew Line', (err) => {
  if (err) throw err;
  console.log('Data appended');
});

// 4. Delete File
fs.unlink('test.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});

fs.unlinkSync("test.txt")

// 5. Check File Exists
// Note: exists is deprecated → use fs.access instead
fs.access('test.txt', (exists) => {
  console.log(exists);
});

fs.existsSync('test.txt', (exists) => {
  console.log(exists);
});

//6. Rename File
fs.rename('old.txt', 'new.txt', (err) => {
  if (err) throw err;
});

//7. Working with Directories
fs.mkdir('myDir', (err) => {
  if (err) throw err;
});

fs.readdir('./', (err, files) => {
  if (err) throw err;
  console.log(files);
});

fs.rmdir('myFolder', (err) => {});

// exist
fs.access

// check dir stats
fs.stats

// check if directory
fs.readdir('./', { withFileTypes: true }, (err, files) => {
  files.forEach(file => {
    if (file.isDirectory()) { // Check
      console.log('DIR:', file.name);
    } else {
      console.log('FILE:', file.name);
    }
  });
});

// Watch dir changes
fs.watch('./', (eventType, filename) => {
  console.log(eventType, filename);
});

// copy dir
fs.cp('sourceDir', 'destDir', { recursive: true }, (err) => {
  if (err) throw err;
}); 

// 8. Streams (Very Important for Large Files)

const readStream = fs.createReadStream('bigfile.txt', 'utf8');

readStream.on('data', chunk => {
  console.log(chunk);
});
// Used when:
// Large files
// Memory optimization