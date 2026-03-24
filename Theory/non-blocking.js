// Example 1: Non-blocking I/O with fs.readFile
console.log('Example 1: Non-blocking I/O with fs.readFile');
const fs = require('fs');
console.log('Start');

// Non-blocking (asynchronous) read
fs.readFile('./non-blocking.js', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Non-blocking read length:', data.length);
});

// Blocking (synchronous) read - for comparison
const blockingData = fs.readFileSync('./non-blocking.js', 'utf8');
console.log('Blocking read length:', blockingData.length);
console.log('End'); 

// Expected output:
// Start
// Blocking read length: <length of the file>
// End
// Non-blocking read length: <length of the file>

// How it works:
// 1. The 'Start' message is logged first.
// 2. The non-blocking read is initiated, but it doesn't wait for the file to be read. 
//    Node sends this task to the background (libuv thread pool),
//    it continues executing the next lines of code.
// 3. The blocking read is executed immediately, and it waits until the file is fully read before moving on.
// 4. The 'End' message is logged after the blocking read, but before the non-blocking read callback is executed.
// 5. Finally, when the non-blocking read completes, its callback is executed, logging the length of the data read from the file.

// Example 2: Non-blocking I/O with setTimeout

console.log('Example 2: Non-blocking I/O with setTimeout');
console.log('Start');

setTimeout(() => {
    console.log('This is a non-blocking timeout');
}, 1000);

console.log('End');

// Expected output:
// Start
// End
// This is a non-blocking timeout

// Explanation:
// 1. 'Start' is logged first.
// 2. The setTimeout function is called, which schedules the callback to be executed after 1 second, but it doesn't block the execution of the next line.
// 3. 'End' is logged immediately after scheduling the timeout.
// 4. After 1 second, the callback for setTimeout is executed, logging 'This is a non-blocking timeout'.