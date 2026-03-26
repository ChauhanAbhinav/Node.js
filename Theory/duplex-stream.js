// Duplex stream is two can read and write data.
// Example:
// TCP server and Socket
const net = require("net");

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log("Received:", data.toString());

    // Writing back (duplex)
    socket.write("Hello Client");
  });
});

server.listen(3000);

// HTTP server
const http = require("http");

http.createServer((req, res) => {
  req.on("data", (chunk) => {
    console.log("Request chunk:", chunk.toString());
  });

  res.write("Hello");
  res.end();
}).listen(3000);

//Custome Duplex function
const { Duplex } = require("stream");

class MyDuplex extends Duplex {
  constructor(options) {
    super(options);
  }

  // Called when data is written to stream
  _write(chunk, encoding, callback) {
    const upperChunk = chunk.toString().toUpperCase();

    // Push processed data to readable side
    this.push(upperChunk);

    callback();
  }

  // Called when data is read from stream
  _read(size) {
    // No need to implement anything for this example
  }
}

// Usage
const myStream = new MyDuplex();

myStream.on("data", (chunk) => {
  console.log("Read:", chunk.toString());
});

myStream.write("hello");
myStream.write("world");
myStream.end();