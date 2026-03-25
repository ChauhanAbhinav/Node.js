const net = require('net');

const clients = [];

const server = net.createServer((socket) => {
    console.log('Client connected');
    clients.push(socket);

    socket.write('Welcome to the chat server!\n');

    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log(`Message from client: ${message}`);

        // Broadcast message to all connected clients
        clients.forEach((client) => {
            if (client !== socket && client.writable) {
                client.write(`Client: ${message}\n`);
            }
        });
    });

    socket.on('end', () => {
        console.log('Client disconnected');
        clients.splice(clients.indexOf(socket), 1);
    });

    socket.on('error', (err) => {
        console.error('Socket error:', err);
    });
});

server.listen(3000, '127.0.0.1', () => {
    console.log('TCP chat server listening on port 3000');
});