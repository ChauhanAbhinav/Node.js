// A stream is a way to handle reading/writing data in chunks, instead of loading the entire data into memory at once.
// Traditional way → Load full file → process
// Streams → Process data piece by piece

// Benefits:
// Memory efficient (great for large files)
// Faster processing (start working before full data loads)
// Ideal for real-time data (videos, logs, network)

// 1. Readale streams
// Used to read data

// Example:
const fs = require("fs");

let readStream = fs.createReadStream("./test.txt","utf-8");

readStream.on("data", (chunk)=>{
    console.log("chunk", chunk); // default chunk size 64KB for createReadStream
    console.log("ChunkEnded============>>>")
})

// highWaterMark: 1024 in options for chunk size

// 2. Writable Stream

// Used to write data
const writeStream = fs.createWriteStream("output.txt");
writeStream.write("Hello");
writeStream.write("World");
writeStream.end();

// 3. Duplex Stream
// Can read AND write

// Example:
// TCP sockets

//4. Transform Stream
// Special duplex stream that modifies data

// Example:
// Compression
// Encryption
const zlib = require("zlib");

const readStream1 = fs.createReadStream("test.txt");
const writeStream1 = fs.createWriteStream("test.txt.gz");

readStream1.pipe(zlib.createGzip()).pipe(writeStream1);

//Stream Events
// Readable Events:
// data → when chunk is available
// end → no more data
// error → error occurred

// Writable Events:
// finish → writing done
// error → error occurred

// pipe() Method (Very Important)
// Connect streams together

readStream.pipe(writeStream);
// Handles chunking automatically
// Manages backpressure

// Backpressure
// When write speed < read speed
// Streams handle this automatically using:
// 1. internal buffering
// 2. pause/resume

// Without streams → memory crash possible