// To create a simple HTTP server in Node.js, we can use the built-in 'http' module.
// Below is an example of how to set up a basic HTTP server that listens on a specified port and responds with a simple message when accessed.

let http = require("http");
const PORT = process.env.PORT || 3000;
console.log(`Starting server on port ${PORT}...`);

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello, World!");
  res.write("\nWelcome to Node.js HTTP Server.");
  res.end("\nEnd, World!");
})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

