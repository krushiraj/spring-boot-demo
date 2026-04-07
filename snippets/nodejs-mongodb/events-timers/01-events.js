// 01-events.js - EventEmitter basics
// Run: node 01-events.js

const EventEmitter = require("events");

const emitter = new EventEmitter();

// .on() - listens every time the event is emitted
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// .on() with multiple arguments
emitter.on("userLogin", (username, timestamp) => {
  console.log(`User "${username}" logged in at ${timestamp}`);
});

// .once() - listens only the first time the event is emitted
emitter.once("firstVisit", (page) => {
  console.log(`Welcome! You visited "${page}" for the first time.`);
});

console.log("=== .on() - fires every time ===\n");
emitter.emit("greet", "Ravi");
emitter.emit("greet", "Priya");
emitter.emit("greet", "Amit");

console.log("\n=== .on() with multiple arguments ===\n");
emitter.emit("userLogin", "ravi_kumar", new Date().toLocaleTimeString());

console.log("\n=== .once() - fires only once ===\n");
emitter.emit("firstVisit", "/home");
emitter.emit("firstVisit", "/about"); // This will NOT trigger the listener
console.log("(Second emit of 'firstVisit' produced no output)");
