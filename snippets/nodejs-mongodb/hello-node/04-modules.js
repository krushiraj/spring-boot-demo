// 04-modules.js - Using custom modules with require
// Run: node 04-modules.js

const math = require("./math");

console.log("=== Custom Module Demo ===\n");

const a = 10;
const b = 3;

console.log(`a = ${a}, b = ${b}\n`);
console.log(`add(${a}, ${b})      = ${math.add(a, b)}`);
console.log(`subtract(${a}, ${b}) = ${math.subtract(a, b)}`);
console.log(`multiply(${a}, ${b}) = ${math.multiply(a, b)}`);
console.log(`divide(${a}, ${b})   = ${math.divide(a, b).toFixed(2)}`);

// Demonstrate error handling
try {
  console.log(`\ndivide(${a}, 0)   =`, math.divide(a, 0));
} catch (err) {
  console.log(`\ndivide(${a}, 0)   = Error: ${err.message}`);
}
