// TCP Server Example
// This example demonstrates how to create a simple TCP server using Node.js's built-in 'net' module.
// The server listens for incoming connections and sends a greeting message to each client that connects.

// Used in Chat servers, Game servers, Custom protocols

// To run this server, save the code to a file named 'tcp-server.js' and execute it using Node.js:
// node tcp-server.js
// You can then connect to the server using a TCP client (e.g., telnet or netcat) on the same port (4000 in this case) to see the greeting message.
const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Hello Client');
  // socket.end();
});

server.listen(3000);