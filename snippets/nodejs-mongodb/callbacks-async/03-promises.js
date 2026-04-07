// 03-promises.js - Refactoring callbacks to Promises
// Run: node 03-promises.js

const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "sample.txt");
const outputPath = path.join(__dirname, "output.txt");

console.log("=== Promises (flat chain, no nesting) ===\n");

// Each .then() returns a new promise, keeping the chain flat
fs.readFile(filePath, "utf-8")
  .then((data) => {
    console.log("Step 1: Read file successfully");
    const upperData = data.toUpperCase();
    return fs.writeFile(outputPath, upperData);
  })
  .then(() => {
    console.log("Step 2: Wrote uppercase version to output.txt");
    return fs.readFile(outputPath, "utf-8");
  })
  .then((result) => {
    console.log("Step 3: Read back the output file");
    console.log("---");
    console.log(result);
    console.log("---");
    return fs.unlink(outputPath);
  })
  .then(() => {
    console.log("Step 4: Cleaned up output.txt");
    console.log("\nNo nesting! Each step is at the same level.");
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });
