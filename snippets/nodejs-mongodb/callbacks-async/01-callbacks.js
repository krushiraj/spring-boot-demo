// 01-callbacks.js - Simple callbacks with fs.readFile
// Run: node 01-callbacks.js

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sample.txt");

console.log("=== Callback Pattern ===\n");
console.log("1. Before reading file...");

// fs.readFile uses a callback: function(error, data)
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }

  console.log("3. File contents received in callback:");
  console.log("---");
  console.log(data);
  console.log("---");
  console.log("4. Done processing file.");
});

console.log("2. After readFile call (but before callback runs!)");
console.log("   Notice: this prints BEFORE the file contents.\n");
