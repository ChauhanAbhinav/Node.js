// Write a program to recursively scan a directory and:

// Count total files
// Count total folders
// Print all file paths

const { count } = require("console");
let fs = require("fs");
let pathModule = require("path");

const args = process.argv.slice(2);
const pathToDir = args[2] || process.cwd();

addLines(1);
console.log("File App Directory", __dirname);
console.log("Requested Dir", pathToDir);
addLines(1);

let dirDepth = 0;
let fileCount = 0;
let dirCount = 0;

function readDirAndFile(path, dirDepth) {

    let list = fs.readdirSync(path, { withFileTypes: true, recursive: false });

    list.forEach((file) => {
        if (file.isDirectory()) {
            console.log(addTab(dirDepth) + file.name + "\/");
            const childPath = pathModule.join(file.path, file.name);
            readDirAndFile(childPath, dirDepth + 1);
            dirCount++;
        } else {
            console.log(addTab(dirDepth) + file.name);
            fileCount++;
        }
    })
}   

const dirName = pathModule.basename(pathToDir);
console.log(dirName + "/");
readDirAndFile(pathToDir, dirDepth);

console.log("Total Directories:", dirCount);
console.log("Total Files:", fileCount);

function addLines(count = 1) {
    console.log("\n".repeat(count));
}

function addTab(count = 1) {
    return "   ".repeat(count);
}
