// 03-event-driven-app.js - Event-driven order processing simulation
// Run: node 03-event-driven-app.js

const EventEmitter = require("events");

// Custom class extending EventEmitter
class OrderEmitter extends EventEmitter {}

const orderSystem = new OrderEmitter();

// --- Register Listeners ---

orderSystem.on("orderPlaced", (order) => {
  console.log(`[ORDER PLACED]   Order #${order.id} - ${order.item} (Qty: ${order.qty})`);
  console.log(`                 Customer: ${order.customer}\n`);

  // Simulate processing after a short delay
  setTimeout(() => {
    orderSystem.emit("orderProcessed", order);
  }, 1000);
});

orderSystem.on("orderProcessed", (order) => {
  console.log(`[ORDER PROCESSED] Order #${order.id} - Payment verified, packing started.\n`);

  // Simulate shipping after another delay
  setTimeout(() => {
    orderSystem.emit("orderShipped", order);
  }, 1000);
});

orderSystem.on("orderShipped", (order) => {
  console.log(`[ORDER SHIPPED]  Order #${order.id} - "${order.item}" shipped to ${order.customer}.`);
  console.log("                 Tracking ID:", Math.random().toString(36).substring(2, 10).toUpperCase());
  console.log();
});

// --- Place Orders ---

console.log("=== Event-Driven Order Processing ===\n");

orderSystem.emit("orderPlaced", {
  id: 1001,
  item: "Wireless Mouse",
  qty: 2,
  customer: "Ravi Kumar",
});

setTimeout(() => {
  orderSystem.emit("orderPlaced", {
    id: 1002,
    item: "Mechanical Keyboard",
    qty: 1,
    customer: "Priya Sharma",
  });
}, 3500);
