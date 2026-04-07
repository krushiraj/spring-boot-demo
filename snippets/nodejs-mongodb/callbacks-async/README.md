# Callbacks and Async Patterns

Demonstrates the evolution of asynchronous programming in Node.js: from callbacks to Promises to async/await. No npm packages required.

## Prerequisites

- Node.js 20 LTS installed

## Files

### sample.txt

A sample text file used by all the scripts for reading and processing.

### 01-callbacks.js - Simple Callbacks

Shows the basic callback pattern with `fs.readFile`. Demonstrates that code after an async call runs before the callback.

```bash
node 01-callbacks.js
```

Expected output:
```
=== Callback Pattern ===

1. Before reading file...
2. After readFile call (but before callback runs!)
   Notice: this prints BEFORE the file contents.

3. File contents received in callback:
---
Hello from sample.txt!
This file is used to demonstrate asynchronous file reading in Node.js.
Line 3: Callbacks, Promises, and Async/Await are different ways to handle async operations.
Line 4: Each approach has its own advantages.
---
4. Done processing file.
```

### 02-callback-hell.js - Callback Hell

Shows deeply nested callbacks (the "pyramid of doom") that result from sequential async operations.

```bash
node 02-callback-hell.js
```

Expected output:
```
=== Callback Hell (Pyramid of Doom) ===

Step 1: Read file successfully
Step 2: Wrote uppercase version to output.txt
Step 3: Read back the output file
---
HELLO FROM SAMPLE.TXT!
THIS FILE IS USED TO DEMONSTRATE ASYNCHRONOUS FILE READING IN NODE.JS.
LINE 3: CALLBACKS, PROMISES, AND ASYNC/AWAIT ARE DIFFERENT WAYS TO HANDLE ASYNC OPERATIONS.
LINE 4: EACH APPROACH HAS ITS OWN ADVANTAGES.
---
Step 4: Cleaned up output.txt

Notice how deeply nested this code is!
This is called 'callback hell' or 'pyramid of doom'.
```

### 03-promises.js - Promises

Refactors the callback hell example using Promise chains with `.then()` and `.catch()`.

```bash
node 03-promises.js
```

Expected output:
```
=== Promises (flat chain, no nesting) ===

Step 1: Read file successfully
Step 2: Wrote uppercase version to output.txt
Step 3: Read back the output file
---
HELLO FROM SAMPLE.TXT!
...
---
Step 4: Cleaned up output.txt

No nesting! Each step is at the same level.
```

### 04-async-await.js - Async/Await

Refactors to async/await, which reads like synchronous code while remaining non-blocking.

```bash
node 04-async-await.js
```

Expected output:
```
=== Async/Await (reads like synchronous code) ===

Step 1: Read file successfully
Step 2: Wrote uppercase version to output.txt
Step 3: Read back the output file
---
HELLO FROM SAMPLE.TXT!
...
---
Step 4: Cleaned up output.txt

Clean, readable, and easy to follow!
```
