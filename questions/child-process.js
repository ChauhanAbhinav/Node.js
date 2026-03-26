// Run Python
const path = require("path");
const { spawn } = require("child_process");

const filePath = path.join(__dirname,"./../theory", "script.py");
const python = spawn("python3", [filePath, "100"]);

python.stdout.on("data", (data) => {
  console.log(`Result: ${data}`);
});

python.stderr.on("data", (err) => {
  console.error(`Error: ${err}`);
});
