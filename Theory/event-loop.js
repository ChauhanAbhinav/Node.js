// // Node.js
// Node.js is a runtime environment that allows you to run JavaScript on the server side.
// It is built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model, making it efficient and suitable for building scalable network applications.

// Node.js is single-threaded and non-blocking (i.e. incoming requests don't wait for each other — I/O operations, DB queries, file reads, API calls). Node.js registers a callback and continues processing other requests.

// The event loop is a fundamental part of Node.js that allows it to handle multiple operations concurrently without blocking the main thread.
// It works by continuously checking for and executing tasks from the event queue, allowing Node.js to perform non-blocking I/O operations efficiently.

// The event loop in Node.js is powered by libuv and runs on a single thread (the main thread).

// 1. timers — executes setTimeout and setInterval callbacks whose threshold has elapsed.
// 2. pending callbacks — I/O callbacks deferred from the previous iteration.
// 3. idle/prepare — internal use only.
// 4. poll — retrieves new I/O events; executes I/O-related callbacks. If no timers are scheduled, the loop blocks here.
// 5. check — setImmediate() callbacks run here, always after poll.
// 6. close callbacks — e.g., socket.on('close').

// Between each phase, Node.js drains the microtask queue (Promise callbacks via process.nextTick first, then Promises). process.nextTick always fires before any I/O, even before setImmediate. This ordering is critical for designing correct async flows and avoiding starvation.

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

// Check Phase
setImmediate(() => {
  console.log("5. setImmediate (Check Phase)");
});

// Timers Phase
setTimeout(() => {
  console.log("4. setTimeout (Timers Phase)");
}, 0);

// Close Callbacks Phase
const server = net.createServer((socket) => {
  socket.on('close', () => {
    console.log("Socket closed (Close Callbacks Phase)");
  });
  socket.destroy(); // force close
    console.log("Client connected");
});

server.listen(3000, () => {
  const client = net.createConnection(3000, () => {
    console.log("Client connected to server");
  });
});

// Poll Phase
fs.readFile(__filename, () => {
  console.log("6. fs.readFile (Poll Phase)");

  process.nextTick(() => {
    console.log("6.1 nextTick inside I/O");
  });

  Promise.resolve().then(() => {
    console.log("6.2 Promise inside I/O");
  });
});

// Microtasks
Promise.resolve().then(() => {
  console.log("3.1 Promise (Microtask)");
});
process.nextTick(() => {
  console.log("3.1 nextTick (Microtask)");
});

console.log("2. End (Sync)");

