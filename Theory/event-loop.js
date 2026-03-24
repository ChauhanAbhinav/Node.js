// Node.js Event Loop
// The event loop is a fundamental part of Node.js that allows it to handle multiple operations concurrently without blocking the main thread.
// It works by continuously checking for and executing tasks from the event queue, allowing Node.js to perform non-blocking I/O operations efficiently.

// The event loop has several phases, including timers, I/O callbacks, idle/prepare, poll, check, and close callbacks.
// Each phase has its own queue of tasks, and the event loop processes them in a specific order.

// Event Loop Phases:
// 1. Timers: Executes callbacks scheduled by setTimeout and setInterval.
// 2. I/O Callbacks: Executes callbacks for completed I/O operations (e.g., TCP errors, internal I/O callbacks, etc.).
// 3. Idle/Prepare: Internal phase for Node.js to prepare for the next event loop iteration.
// 4. Poll: Waits for new I/O events and executes their callbacks(e.g., fs.readFile, network requests, etc.).
// 5. Check: Executes callbacks scheduled by setImmediate.
// 6. Close Callbacks: Executes callbacks for closed resources (e.g., sockets).


// Execution Order:

// Call Stack → Async Task → libuv → Queue → Event Loop → Call Stack

// 1. Execute all synchronous code first (Call Stack).
// 2. Execute all microtasks (microtask queue) before moving to the next phase of the event loop,
//    runs immediately after current operation
//    a. process.nextTick() callbacks
//    b. Promise callbacks (.then, .catch, .finally)
// 3. Start Event Loop phases:
//    a. Timers Phase
//       - Execute setTimeout() and setInterval() callbacks
//    b. I/O Callbacks Phase (Pending Callbacks)
//       - Some system-level I/O callbacks
//       - Execute I/O callbacks deferred to the next loop iteration (e.g. TCP errors(ECONNREFUSED), internal I/O callbacks, etc.)
//    c. Idle, Prepare Phase
//       - Internal use (ignored in most cases)
//    d. Poll Phase (Most important)
//       - If there are no timers scheduled, it will wait here for I/O events to occur and execute their callbacks as they complete.
//       - Execute I/O callbacks (e.g., fs.readFile, network requests, Database calls, Incoming HTTP requests etc.)
//       - Wait here if no timers are scheduled
//    e. Check Phase
//       - Execute setImmediate() callbacks
//    f. Close Callbacks Phase
//       - Execute close events (e.g., socket.on('close'), server.on('close'), etc.)
// 4. After EACH phase, again execute microtasks:
//    - process.nextTick()
//    - Promises

// 5. Repeat the loop until no tasks remain.


const fs = require('fs');
const net = require('net');

console.log("1. Start (Sync)");

// Timers Phase
setTimeout(() => {
  console.log("4. setTimeout (Timers Phase)");
}, 0);

// Check Phase
setImmediate(() => {
  console.log("6. setImmediate (Check Phase)");
});

// Poll Phase
fs.readFile(__filename, () => {
  console.log("5. fs.readFile (Poll Phase)");

  process.nextTick(() => {
    console.log("5.1 nextTick inside I/O");
  });

  Promise.resolve().then(() => {
    console.log("5.2 Promise inside I/O");
  });
});

//Close Callbacks Phase
const server = net.createServer((socket) => {
  console.log("Client connected");
  socket.on('close', () => {
    console.log("Socket closed (Close Callbacks Phase)");
  });
  socket.destroy(); // force close
});
server.listen(3000, () => {
  const client = net.createConnection(3000, () => {
    console.log("Client connected to server");
  });
});

// Microtasks
process.nextTick(() => {
  console.log("3.1 nextTick (Microtask)");
});
Promise.resolve().then(() => {
  console.log("3.1 Promise (Microtask)");
});

console.log("2. End (Sync)");

