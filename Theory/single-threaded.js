// Single-threaded nature of Node.js
// Node.js runs on a single thread, which means it can only execute one piece of code at a time.
// However, it uses an event loop and non-blocking I/O to handle multiple operations concurrently without blocking the main thread.

// Example of single-threaded execution
console.log('Start');

// Synchronous operation - blocks the thread
for (let i = 0; i < 3; i++) {
    console.log(`Loop iteration ${i}`);
}

// Asynchronous operation - non-blocking
setTimeout(() => {
    console.log('Callback after 1 second');
}, 1000);

console.log('End');

// Multiple async operations queue up
setImmediate(() => {
    console.log('Immediate 1');
});

setImmediate(() => {
    console.log('Immediate 2');
});

// Expected output:
// Start
// Loop iteration 0
// Loop iteration 1
// Loop iteration 2
// End
// Immediate 1
// Immediate 2
// Callback after 1 second

// Explanation:
// 1. The 'Start' message is logged first.
// 2. The synchronous loop runs, logging each iteration, and blocks the thread until it finishes.
// 3. After the loop, 'End' is logged.
// 4. The setImmediate callbacks are executed next, as they are scheduled to run after the current event loop phase.
// 5. Finally, after 1 second, the setTimeout callback is executed, logging 'Callback after 1 second'.