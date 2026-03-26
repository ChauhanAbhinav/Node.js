process.on("message", (msg) => {
  process.send(`Received: ${msg}`);
});