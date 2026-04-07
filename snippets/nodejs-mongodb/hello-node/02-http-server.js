// 02-http-server.js - Basic HTTP Server using built-in http module
// Run: node 02-http-server.js
// Then visit http://localhost:3000 in your browser

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js!");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log("Press Ctrl+C to stop the server");
});
