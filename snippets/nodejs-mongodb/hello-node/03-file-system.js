// 03-file-system.js - File System operations (sync and async)
// Run: node 03-file-system.js

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "demo-output.txt");

// --- Synchronous File Operations ---
console.log("=== Synchronous Operations ===\n");

// Write file (sync)
fs.writeFileSync(filePath, "Hello from Node.js!\nThis was written synchronously.\n");
console.log("File written (sync)");

// Read file (sync)
const contentSync = fs.readFileSync(filePath, "utf-8");
console.log("File contents (sync):");
console.log(contentSync);

// Append to file (sync)
fs.appendFileSync(filePath, "This line was appended.\n");
console.log("Content appended (sync)\n");

// --- Asynchronous File Operations (callback style) ---
console.log("=== Asynchronous Operations ===\n");

// Read file (async with callback)
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }
  console.log("File contents (async callback):");
  console.log(data);

  // Clean up the demo file
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting file:", err.message);
      return;
    }
    console.log("Demo file cleaned up.");
  });
});
