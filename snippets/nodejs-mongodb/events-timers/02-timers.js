// 02-timers.js - setTimeout, setInterval, setImmediate, clearInterval
// Run: node 02-timers.js

console.log("=== Timer Demonstrations ===\n");

// setTimeout - runs once after a delay
console.log("1. setTimeout scheduled (runs after 1 second)");
setTimeout(() => {
  console.log("   -> setTimeout fired! (1 second delay)");
}, 1000);

// setImmediate - runs on the next iteration of the event loop
console.log("2. setImmediate scheduled (runs on next event loop tick)");
setImmediate(() => {
  console.log("   -> setImmediate fired!");
});

// setInterval - runs repeatedly at an interval
console.log("3. setInterval scheduled (runs every 500ms, stops after 3 ticks)\n");

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`   -> setInterval tick #${count}`);

  if (count >= 3) {
    clearInterval(intervalId);
    console.log("   -> clearInterval called. Timer stopped.");
  }
}, 500);

console.log("(This line runs before any timer callbacks)\n");
