// 02-callback-hell.js - Nested callbacks showing "callback hell"
// Run: node 02-callback-hell.js

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sample.txt");
const outputPath = path.join(__dirname, "output.txt");

console.log("=== Callback Hell (Pyramid of Doom) ===\n");

// Each step depends on the previous one, leading to deep nesting
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }
  console.log("Step 1: Read file successfully");

  const upperData = data.toUpperCase();

  fs.writeFile(outputPath, upperData, (err) => {
    if (err) {
      console.error("Error writing file:", err.message);
      return;
    }
    console.log("Step 2: Wrote uppercase version to output.txt");

    fs.readFile(outputPath, "utf-8", (err, result) => {
      if (err) {
        console.error("Error reading output:", err.message);
        return;
      }
      console.log("Step 3: Read back the output file");
      console.log("---");
      console.log(result);
      console.log("---");

      fs.unlink(outputPath, (err) => {
        if (err) {
          console.error("Error deleting file:", err.message);
          return;
        }
        console.log("Step 4: Cleaned up output.txt");
        console.log("\nNotice how deeply nested this code is!");
        console.log("This is called 'callback hell' or 'pyramid of doom'.");
      });
    });
  });
});
