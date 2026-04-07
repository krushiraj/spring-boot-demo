// math.js - A custom module exporting math operations
// This module is required by 04-modules.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Export functions so other files can use them
module.exports = { add, subtract, multiply, divide };
