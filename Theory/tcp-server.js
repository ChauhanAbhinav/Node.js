// TCP Server in Node.js
// To create a TCP server in Node.js, we can use the built-in 'net' module. Below is an example of how to set up a simple TCP server that listens on a specified port and responds to incoming connections.

const net = require('net');
const PORT = process.env.PORT || 3000;

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`); // Log on server, the received data from the client
    socket.write(`Echo: ${data}`);// Send back the received data to the client as an echo response
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });

  socket.on('error', (err) => {
    console.error(`Socket error: ${err.message}`);
  });
});

server.listen(PORT, () => {
  console.log(`TCP server is running on port ${PORT}`);
});

server.on('error', (err) => {
  console.error(`Server error: ${err.message}`);
});

// To test the TCP server, you can use a simple TCP client like 'telnet' or 'netcat' to connect to the server and send messages. For example, you can run the following command in your terminal:
// telnet localhost 3000
// nc localhost 3000
// Then, you can type messages and see the echoed responses from the server.
