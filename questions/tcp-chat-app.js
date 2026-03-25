const net = require("net");
const PORT = process.env.PORT || 3000;

let clients = {};

function replyAll(msg, sender) {
    for (const user in clients) {
        if (clients[user] !== sender) {
            clients[user].write("\n" + msg + "\n");
        }
    }
}

const server = net.createServer((socket) => {
    console.log("Client Connected");

    socket.write("Enter username: ");
    let username = "";

    socket.on("data", (data) => {
        const message = data.toString().trim();

        // First input = username
        if (!username) {
            username = message;
            clients[username] = socket;

            socket.write(`Welcome ${username}\n`);
            replyAll(`${username} joined the chat`, socket);
            return;
        }

        console.log(`${username}: ${message}`);
        replyAll(`${username}: ${message}`, socket);
    });

    socket.on("end", () => {
        console.log(`${username} disconnected`);
        delete clients[username];
        replyAll(`${username} left the chat`, socket);
    });

    socket.on("error", (err) => {
        console.log("Error:", err.message);
        delete clients[username];
    });
});

server.listen(PORT, () => {
    console.log(`TCP chat app running on port ${PORT}`);
});