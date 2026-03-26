// A Child Process in Node.js lets you run another process (separate program) alongside your main Node.js app.

// Unlike Worker Threads:
// Child process = separate OS process
// Has its own memory & V8 instance
// Communicates via IPC (Inter-Process Communication)

// Use when you want to:
// Run CPU-heavy tasks (without blocking main thread)
// Execute shell commands
// Run other languages (Python, Java, etc.)
// Isolate tasks for better stability

// const { spawn, exec, fork } = require("child_process");

// Main methods

// exec()
// Simple, buffered output
// Runs command in shell
// Returns entire output at once

const { exec } = require("child_process");

exec("ls", (err, stdout, stderr) => {
  console.log(stdout);
});

// Good for: Small output commands


// spawn() (Streaming output)
// Returns data in chunks (streams)
const { spawn } = require("child_process");

const child = spawn("ls");

child.stdout.on("data", (data) => {
  console.log(`Output: ${data}`);
});

// Good for:    
// Large data
// Real-time logs

// fork() (Best for Node.js → Node.js)
// Special method to run another Node.js file
const { fork } = require("child_process");

const child2 = fork("worker-for-child-preocess.js");

child2.on("message", (msg) => {
  console.log("From child:", msg);
});

child2.send("Start");
// Built-in IPC channel

// execFile()
// Like exec() but runs file directly (no shell)