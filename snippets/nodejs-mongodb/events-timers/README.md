# Events and Timers

Demonstrates Node.js EventEmitter and timer functions. No npm packages required.

## Prerequisites

- Node.js 20 LTS installed

## Files

### 01-events.js - EventEmitter Basics

Shows how to create custom events, emit them, and listen with `.on()` and `.once()`.

```bash
node 01-events.js
```

Expected output:
```
=== .on() - fires every time ===

Hello, Ravi!
Hello, Priya!
Hello, Amit!

=== .on() with multiple arguments ===

User "ravi_kumar" logged in at 10:30:00 AM

=== .once() - fires only once ===

Welcome! You visited "/home" for the first time.
(Second emit of 'firstVisit' produced no output)
```

### 02-timers.js - Timer Functions

Demonstrates `setTimeout`, `setInterval`, `setImmediate`, and `clearInterval`.

```bash
node 02-timers.js
```

Expected output:
```
=== Timer Demonstrations ===

1. setTimeout scheduled (runs after 1 second)
2. setImmediate scheduled (runs on next event loop tick)
3. setInterval scheduled (runs every 500ms, stops after 3 ticks)

(This line runs before any timer callbacks)

   -> setImmediate fired!
   -> setInterval tick #1
   -> setInterval tick #2
   -> setTimeout fired! (1 second delay)
   -> setInterval tick #3
   -> clearInterval called. Timer stopped.
```

### 03-event-driven-app.js - Order Processing Simulation

A practical example of event-driven architecture. `OrderEmitter` extends `EventEmitter` and simulates an order lifecycle through `orderPlaced`, `orderProcessed`, and `orderShipped` events.

```bash
node 03-event-driven-app.js
```

Expected output:
```
=== Event-Driven Order Processing ===

[ORDER PLACED]   Order #1001 - Wireless Mouse (Qty: 2)
                 Customer: Ravi Kumar

[ORDER PROCESSED] Order #1001 - Payment verified, packing started.

[ORDER SHIPPED]  Order #1001 - "Wireless Mouse" shipped to Ravi Kumar.
                 Tracking ID: A1B2C3D4

[ORDER PLACED]   Order #1002 - Mechanical Keyboard (Qty: 1)
                 Customer: Priya Sharma

[ORDER PROCESSED] Order #1002 - Payment verified, packing started.

[ORDER SHIPPED]  Order #1002 - "Mechanical Keyboard" shipped to Priya Sharma.
                 Tracking ID: E5F6G7H8
```

Note: Tracking IDs are randomly generated and will differ each run.
