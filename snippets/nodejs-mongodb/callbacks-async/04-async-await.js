// 04-async-await.js - Refactoring to async/await
// Run: node 04-async-await.js

const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "sample.txt");
const outputPath = path.join(__dirname, "output.txt");

async function processFile() {
  console.log("=== Async/Await (reads like synchronous code) ===\n");

  try {
    // Step 1: Read the file
    const data = await fs.readFile(filePath, "utf-8");
    console.log("Step 1: Read file successfully");

    // Step 2: Write uppercase version
    const upperData = data.toUpperCase();
    await fs.writeFile(outputPath, upperData);
    console.log("Step 2: Wrote uppercase version to output.txt");

    // Step 3: Read back
    const result = await fs.readFile(outputPath, "utf-8");
    console.log("Step 3: Read back the output file");
    console.log("---");
    console.log(result);
    console.log("---");

    // Step 4: Clean up
    await fs.unlink(outputPath);
    console.log("Step 4: Cleaned up output.txt");

    console.log("\nClean, readable, and easy to follow!");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

processFile();
