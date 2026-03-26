// Buffer in Node.js is used to handle binary data directly in memory.
// Since JavaScript (in browsers) mainly works with strings,
// Node.js introduced Buffers to work with:

// Files
// Streams
// Network data (TCP, HTTP)

// Buffer
// An array of bytes (numbers 0–255), but display hex values - <Buffer 4e 6f 64 65>
const buffer = Buffer.from("Node");
console.log(buffer);

console.log(typeof buffer);
console.log(buffer.length);

for (const buf of buffer) {
    console.log(buf, String.fromCharCode(buf)); // Ascii code / decimal value, char
}

// Create Buffers 

// 1. from string
const buf = Buffer.from("Node");

// 2. Fix size
const buf2 = Buffer.alloc(10);

// 3. Fast and unsafe
const buf3 = Buffer.alloc(10);

// Buffer to string
console.log(buffer.toString()); // Node

// Buffers are the array of ascii code of chars
const buf4 = Buffer.from("ABC");

console.log(buf4[0]); // 65 (ASCII of A)

buf4[0] = 97; // change to 'a'

console.log(buf4.toString()); // aBC