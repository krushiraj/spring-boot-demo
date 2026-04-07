# Node.js & MongoDB - Questions & Answers

> Exam preparation material covering all Node.js and MongoDB topics from Unit V

## Table of Contents

- [Topic 1: Introduction to Node.js](#topic-1-introduction-to-nodejs)
  - [Short Answer Questions (2 Marks)](#short-answer-questions-2-marks---introduction-to-nodejs)
  - [Essay Questions (10 Marks)](#essay-questions-10-marks---introduction-to-nodejs)
- [Topic 2: Installing Node.js](#topic-2-installing-nodejs)
  - [Short Answer Questions (2 Marks)](#short-answer-questions-2-marks---installing-nodejs)
  - [Essay Questions (10 Marks)](#essay-questions-10-marks---installing-nodejs)
- [Topic 3: Events, Listeners, Timers, and Callbacks](#topic-3-events-listeners-timers-and-callbacks)
  - [Short Answer Questions (2 Marks)](#short-answer-questions-2-marks---events-listeners-timers-and-callbacks)
  - [Essay Questions (10 Marks)](#essay-questions-10-marks---events-listeners-timers-and-callbacks)
- [Topic 4: Introduction to MongoDB](#topic-4-introduction-to-mongodb)
  - [Short Answer Questions (2 Marks)](#short-answer-questions-2-marks---introduction-to-mongodb)
  - [Essay Questions (10 Marks)](#essay-questions-10-marks---introduction-to-mongodb)
- [Topic 5: Accessing MongoDB from Node.js](#topic-5-accessing-mongodb-from-nodejs)
  - [Short Answer Questions (2 Marks)](#short-answer-questions-2-marks---accessing-mongodb-from-nodejs)
  - [Essay Questions (10 Marks)](#essay-questions-10-marks---accessing-mongodb-from-nodejs)

---

## Topic 1: Introduction to Node.js

### Short Answer Questions (2 Marks) - Introduction to Node.js

---

**Q1. What is Node.js?**

Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine. It allows developers to execute JavaScript code outside the browser, on the server side. Node.js uses an event-driven, non-blocking I/O model, making it lightweight and efficient for building scalable network applications such as web servers and APIs.

---

**Q2. What is the V8 engine?**

V8 is Google's open-source high-performance JavaScript and WebAssembly engine, written in C++. It compiles JavaScript directly into native machine code using Just-In-Time (JIT) compilation, rather than interpreting it line by line. V8 is used in Google Chrome and is the core engine that powers Node.js, enabling fast execution of JavaScript on the server side.

---

**Q3. What is npm?**

npm (Node Package Manager) is the default package manager for Node.js. It serves two purposes: (1) it is an online repository of open-source Node.js packages/modules, and (2) it is a command-line tool to install, manage, and publish packages. It uses `package.json` to track project dependencies. Example: `npm install express` installs the Express framework.

---

**Q4. What is the event loop in Node.js?**

The event loop is the core mechanism in Node.js that handles asynchronous operations. It continuously checks the event queue for pending callbacks and executes them one at a time in a single thread. This allows Node.js to perform non-blocking I/O operations despite being single-threaded, by offloading operations like file I/O and network requests to the OS kernel or the libuv thread pool and processing their callbacks when complete.

---

**Q5. What is non-blocking I/O?**

Non-blocking I/O means that I/O operations (file read, database query, network call) do not block the execution of subsequent code. Instead of waiting for the operation to complete, Node.js registers a callback and continues executing the next line. When the I/O operation finishes, the callback is placed in the event queue and executed by the event loop. This contrasts with blocking I/O where the program halts until the operation completes.

---

**Q6. What is the difference between Node.js and browser JavaScript?**

| Feature | Browser JavaScript | Node.js |
|---|---|---|
| Environment | Runs in the browser | Runs on the server |
| DOM Access | Has access to `document`, `window` | No DOM access |
| File System | Cannot access the file system | Can read/write files via `fs` module |
| Modules | Uses ES Modules (`import`) | Supports both CommonJS (`require`) and ES Modules |
| Global Object | `window` | `global` (or `globalThis`) |
| Purpose | Client-side interactivity | Server-side applications, APIs |

---

**Q7. What are the key features of Node.js?**

Key features of Node.js include: (1) **Single-threaded** with event loop for concurrency, (2) **Non-blocking I/O** for high performance, (3) **V8 engine** for fast JavaScript execution, (4) **npm ecosystem** with thousands of reusable packages, (5) **Cross-platform** support (Windows, Linux, macOS), and (6) **Full-stack JavaScript** allowing the same language on client and server.

---

**Q8. What is the role of libuv in Node.js?**

libuv is a C library that provides Node.js with its event loop and asynchronous I/O capabilities. It handles operations like file system access, DNS resolution, networking, and child processes. It maintains a thread pool (default 4 threads) to offload blocking operations, and uses OS-level mechanisms (epoll on Linux, kqueue on macOS) for efficient event notification. libuv is what makes Node.js truly non-blocking.

---

### Essay Questions (10 Marks) - Introduction to Node.js

---

**Q1. Explain Node.js architecture with event loop diagram.**

**Answer:**

Node.js is built on an event-driven, non-blocking architecture that allows it to handle thousands of concurrent connections efficiently using a single thread.

**Core Components of Node.js Architecture:**

1. **V8 JavaScript Engine:** Compiles JavaScript to native machine code.
2. **libuv:** A C library providing the event loop and asynchronous I/O.
3. **Event Loop:** The central mechanism that orchestrates all async operations.
4. **Thread Pool:** A pool of worker threads (default 4) managed by libuv for CPU-intensive or blocking tasks.
5. **Node.js Bindings (C++ Addons):** Bridge between JavaScript and C/C++ libraries.
6. **Node.js Standard Library:** Built-in modules like `fs`, `http`, `path`, `events`.

**How Node.js Processes Requests:**

1. Client sends a request to the Node.js server.
2. The request is placed in the **Event Queue**.
3. The **Event Loop** picks up the request from the queue.
4. If the operation is **non-blocking** (e.g., simple computation), it processes it immediately and returns the response.
5. If the operation is **blocking** (e.g., file I/O, database query), it delegates it to a **worker thread** from the thread pool.
6. The worker thread completes the operation and places the callback in the event queue.
7. The event loop picks up the callback and sends the response to the client.

**Event Loop Phases Diagram:**

```mermaid
graph TD
    A[Timers Phase<br>setTimeout, setInterval] --> B[Pending Callbacks Phase<br>I/O callbacks deferred]
    B --> C[Idle / Prepare Phase<br>Internal use only]
    C --> D[Poll Phase<br>Retrieve new I/O events]
    D --> E[Check Phase<br>setImmediate callbacks]
    E --> F[Close Callbacks Phase<br>socket.on close]
    F --> A
```

**Event Loop Phases Explained:**

| Phase | Description |
|---|---|
| **Timers** | Executes callbacks scheduled by `setTimeout()` and `setInterval()` |
| **Pending Callbacks** | Executes I/O callbacks deferred to the next loop iteration |
| **Idle, Prepare** | Used internally by Node.js |
| **Poll** | Retrieves new I/O events; executes I/O-related callbacks |
| **Check** | Executes `setImmediate()` callbacks |
| **Close Callbacks** | Executes close event callbacks (e.g., `socket.on('close')`) |

**Node.js Architecture Diagram:**

```mermaid
graph TB
    Client[Client Requests] --> EQ[Event Queue]
    EQ --> EL[Event Loop - Single Thread]
    EL -->|Non-blocking| Resp[Response to Client]
    EL -->|Blocking| TP[Thread Pool - libuv]
    TP --> EQ
    
    subgraph "Node.js Runtime"
        EL
        TP
        V8[V8 Engine]
        NB[Node.js Bindings]
        SL[Standard Library<br>fs, http, path, events]
    end
```

**Example demonstrating event loop behavior:**

```javascript
console.log("1. Start");

setTimeout(() => {
  console.log("2. Timeout callback (Timers phase)");
}, 0);

setImmediate(() => {
  console.log("3. Immediate callback (Check phase)");
});

process.nextTick(() => {
  console.log("4. nextTick callback (before next phase)");
});

console.log("5. End");

// Output:
// 1. Start
// 5. End
// 4. nextTick callback (before next phase)
// 2. Timeout callback (Timers phase)
// 3. Immediate callback (Check phase)
```

**Advantages of this architecture:**
- Handles thousands of concurrent connections with a single thread
- Low memory footprint compared to thread-per-request models
- High throughput for I/O-intensive applications
- Simple programming model using callbacks and async/await

---

**Q2. Compare Node.js with traditional multi-threaded server architecture.**

**Answer:**

Traditional web servers (like Apache) use a multi-threaded architecture, while Node.js uses a single-threaded event-driven architecture. Both approaches have distinct advantages and trade-offs.

**Multi-Threaded Architecture (e.g., Apache, Java Servlets):**

In a multi-threaded server, each incoming client request is assigned a dedicated thread from a thread pool. The thread handles the entire lifecycle of the request, including I/O operations. If the thread encounters a blocking I/O call (e.g., database query), it waits (blocks) until the operation completes.

```mermaid
graph LR
    C1[Client 1] --> T1[Thread 1]
    C2[Client 2] --> T2[Thread 2]
    C3[Client 3] --> T3[Thread 3]
    C4[Client 4] --> T4[Thread 4]
    C5[Client 5] -->|Waiting| Q[Queue - No free thread]
    
    T1 --> DB[(Database)]
    T2 --> DB
    T3 --> FS[File System]
    T4 --> DB
```

**Node.js Single-Threaded Architecture:**

Node.js uses a single thread with an event loop to handle all client requests. Blocking operations are delegated to background worker threads, and callbacks are processed when the operation completes.

```mermaid
graph LR
    C1[Client 1] --> EL[Event Loop<br>Single Thread]
    C2[Client 2] --> EL
    C3[Client 3] --> EL
    C4[Client 4] --> EL
    C5[Client 5] --> EL
    
    EL -->|Async I/O| TP[Thread Pool]
    TP --> DB[(Database)]
    TP --> FS[File System]
```

**Detailed Comparison:**

| Feature | Multi-Threaded (Apache/Java) | Node.js (Single-Threaded) |
|---|---|---|
| **Threading Model** | One thread per request | Single thread + event loop |
| **Concurrency** | Limited by thread pool size | Handles thousands of connections |
| **Memory Usage** | High (each thread ~1-2 MB stack) | Low (single thread + small event loop) |
| **I/O Handling** | Blocking (thread waits for I/O) | Non-blocking (callback after I/O) |
| **CPU-Intensive Tasks** | Good (parallel threads) | Poor (blocks the event loop) |
| **Scalability** | Vertical (add more CPU/RAM) | Horizontal (add more instances) |
| **Complexity** | Complex (thread safety, deadlocks) | Simpler (no shared state issues) |
| **Best For** | CPU-bound applications | I/O-bound, real-time applications |
| **Examples** | Banking systems, scientific computing | Chat apps, REST APIs, streaming |

**Code Example - Multi-threaded style (blocking):**

```javascript
// Simulating blocking behavior (NOT how Node.js works)
const result = database.querySync("SELECT * FROM students"); // Thread blocks here
console.log(result); // Executes only after query completes
console.log("Next operation"); // Waits for above
```

**Code Example - Node.js style (non-blocking):**

```javascript
const { MongoClient } = require("mongodb");

// Non-blocking: callback executes when query completes
const client = new MongoClient("mongodb://localhost:27017");

async function fetchStudents() {
  await client.connect();
  const db = client.db("college");
  
  // This does NOT block the event loop
  const students = await db.collection("students").find({}).toArray();
  console.log(students);
  
  console.log("This may execute while query is in progress");
  await client.close();
}

fetchStudents();
console.log("Server continues processing other requests");
```

**When to use Node.js:**
- Real-time applications (chat, live notifications)
- RESTful APIs with many concurrent users
- Streaming applications
- Single-page application backends
- Microservices architecture

**When to use Multi-Threaded Servers:**
- CPU-intensive computations (image processing, ML)
- Applications requiring heavy parallel processing
- Legacy enterprise applications

---

## Topic 2: Installing Node.js

### Short Answer Questions (2 Marks) - Installing Node.js

---

**Q9. What is the command to check the installed Node.js version?**

To check the installed Node.js version, use the command `node -v` or `node --version` in the terminal. This displays the version number (e.g., `v20.11.0`). Similarly, `npm -v` checks the npm version. For detailed information about the Node.js installation including V8 version and platform, use `node -p process.versions`.

---

**Q10. What is the difference between LTS and Current versions of Node.js?**

**LTS (Long Term Support):** Recommended for production use. Receives bug fixes and security updates for 30 months. Even-numbered versions (e.g., 18, 20, 22) become LTS. Example: Node.js 20 LTS.

**Current:** Contains latest features but may have breaking changes. Odd-numbered versions (e.g., 19, 21) are Current and have a shorter support window (6 months). Best for testing new features before they reach LTS.

---

**Q11. What is package.json?**

`package.json` is a metadata file in a Node.js project that contains project information and configuration. It includes the project name, version, description, entry point (`main`), scripts, and most importantly, the list of **dependencies** (packages required for production) and **devDependencies** (packages needed only during development). It is created using `npm init` and is essential for managing project dependencies.

---

### Essay Questions (10 Marks) - Installing Node.js

---

**Q3. Explain the steps to install Node.js and set up a project. Describe the role of npm and package.json.**

**Answer:**

**Step 1: Download and Install Node.js**

1. Visit the official website: [https://nodejs.org](https://nodejs.org)
2. Download the **LTS version** (Node.js 20 LTS recommended for stability).
3. Run the installer:
   - **Windows:** Run the `.msi` installer, follow the wizard, ensure "Add to PATH" is checked.
   - **Linux (Ubuntu/Debian):**
     ```
     curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
     sudo apt-get install -y nodejs
     ```
   - **macOS:** Run the `.pkg` installer or use Homebrew: `brew install node@20`

4. Verify installation:
   ```
   node -v      # Output: v20.x.x
   npm -v       # Output: 10.x.x
   ```

**Step 2: Understanding npm (Node Package Manager)**

npm is the default package manager bundled with Node.js. It has three main components:

| Component | Description |
|---|---|
| **npm CLI** | Command-line tool to install, update, and manage packages |
| **npm Registry** | Online database of open-source packages (npmjs.com) |
| **package.json** | Project manifest file tracking dependencies |

**Common npm Commands:**

| Command | Purpose |
|---|---|
| `npm init` | Initialize a new project (creates package.json) |
| `npm init -y` | Initialize with default values |
| `npm install <pkg>` | Install a package locally |
| `npm install -g <pkg>` | Install a package globally |
| `npm install` | Install all dependencies from package.json |
| `npm uninstall <pkg>` | Remove a package |
| `npm update` | Update all packages |
| `npm list` | List installed packages |
| `npm start` | Run the start script |
| `npm test` | Run the test script |

**Step 3: Create a Node.js Project**

```
mkdir college-app
cd college-app
npm init -y
```

This generates a `package.json` file:

```javascript
{
  "name": "college-app",
  "version": "1.0.0",
  "description": "Student management application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

**Step 4: Install Dependencies**

```
npm install express mongodb
npm install --save-dev nodemon
```

After installing, `package.json` updates:

```javascript
{
  "name": "college-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2",
    "mongodb": "^6.3.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

**Understanding Version Notation:**
- `^4.18.2` - Compatible with version 4.x.x (caret: allows minor and patch updates)
- `~4.18.2` - Approximately equivalent (tilde: allows only patch updates)
- `4.18.2` - Exact version only

**Step 5: Create and Run a Simple Server**

```javascript
// index.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to Vasavi College of Engineering - IT Department");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

Run the server:
```
node index.js
```

**The node_modules Directory:**

When packages are installed, they are downloaded into the `node_modules` folder. This folder should NOT be committed to version control. Instead, add it to `.gitignore`:

```
node_modules/
```

To recreate `node_modules` from `package.json`, run:
```
npm install
```

**package-lock.json:**

This file is auto-generated and records the exact version of every installed package and its dependencies. It ensures consistent installations across different environments and machines.

---

## Topic 3: Events, Listeners, Timers, and Callbacks

### Short Answer Questions (2 Marks) - Events, Listeners, Timers, and Callbacks

---

**Q12. What is an EventEmitter?**

EventEmitter is a class in Node.js (from the `events` module) that facilitates communication between objects through events. It allows objects to emit named events and register listener functions to handle those events. Key methods include `on()` to register a listener, `emit()` to trigger an event, and `removeListener()` to unregister. Many built-in Node.js modules (like `http`, `fs`, `stream`) inherit from EventEmitter.

---

**Q13. What is a callback function?**

A callback function is a function passed as an argument to another function, which is then invoked (called back) after the completion of an asynchronous operation. In Node.js, callbacks follow the **error-first** convention where the first parameter is an error object (`null` if no error) and the second is the result. Example:
```javascript
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

**Q14. What is callback hell?**

Callback hell (also called "Pyramid of Doom") occurs when multiple nested callbacks are used for sequential asynchronous operations, resulting in deeply indented, hard-to-read code. Each async operation depends on the result of the previous one, creating a pyramid-shaped nesting structure. It makes code difficult to maintain and debug. Solutions include using **Promises**, **async/await**, or modularizing callbacks into named functions.

---

**Q15. What is a Promise?**

A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: **Pending** (initial state), **Fulfilled** (operation completed successfully), and **Rejected** (operation failed). Promises use `.then()` for success handling and `.catch()` for error handling. They solve the callback hell problem by enabling chaining.
```javascript
fetchData()
  .then(result => process(result))
  .catch(err => console.error(err));
```

---

**Q16. What is async/await?**

async/await is syntactic sugar over Promises introduced in ES2017. The `async` keyword declares a function that always returns a Promise. The `await` keyword pauses execution inside an async function until the Promise resolves, making asynchronous code look and behave like synchronous code. Errors are handled using `try/catch` blocks. It greatly improves readability over raw Promises.
```javascript
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
```

---

**Q17. What is the difference between setTimeout and setInterval?**

| Feature | `setTimeout(callback, delay)` | `setInterval(callback, delay)` |
|---|---|---|
| Execution | Executes callback **once** after the delay | Executes callback **repeatedly** at every interval |
| Cancellation | `clearTimeout(id)` | `clearInterval(id)` |
| Use Case | Delayed one-time tasks | Periodic/recurring tasks |

Example: `setTimeout(() => console.log("Once"), 1000)` prints "Once" after 1 second, while `setInterval(() => console.log("Repeat"), 1000)` prints "Repeat" every second.

---

**Q18. What is the purpose of setImmediate() in Node.js?**

`setImmediate()` schedules a callback to execute in the **Check phase** of the event loop, immediately after the Poll phase completes. It is similar to `setTimeout(fn, 0)` but is guaranteed to execute before any timers in the next iteration. It is used to break up long-running operations to prevent blocking the event loop. Cancel with `clearImmediate(id)`.

---

**Q19. What is process.nextTick()?**

`process.nextTick()` schedules a callback to execute **before** the event loop continues to the next phase. It has the highest priority among all async scheduling methods. The callback runs after the current operation completes but before the event loop proceeds. Use it for operations that must execute immediately after the current synchronous code, but overuse can starve the event loop.

---

### Essay Questions (10 Marks) - Events, Listeners, Timers, and Callbacks

---

**Q4. Explain Events, Listeners, and EventEmitter in Node.js with examples.**

**Answer:**

Node.js follows an event-driven architecture where many objects emit events, and listener functions respond to those events. The `events` module provides the `EventEmitter` class, which is the foundation of this architecture.

**EventEmitter Class:**

The EventEmitter class provides methods to work with events:

| Method | Description |
|---|---|
| `on(event, listener)` | Registers a listener for the event |
| `emit(event, [args])` | Triggers the named event |
| `once(event, listener)` | Registers a listener that executes only once |
| `removeListener(event, listener)` | Removes a specific listener |
| `removeAllListeners(event)` | Removes all listeners for an event |
| `listenerCount(event)` | Returns the number of listeners for an event |
| `eventNames()` | Returns an array of event names |

**Basic EventEmitter Example:**

```javascript
const EventEmitter = require("events");

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Register a listener for the "greet" event
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}! Welcome to VCE IT Department.`);
});

// Register another listener for the same event
emitter.on("greet", (name) => {
  console.log(`${name} has joined the class.`);
});

// Emit the event
emitter.emit("greet", "Ravi Kumar");

// Output:
// Hello, Ravi Kumar! Welcome to VCE IT Department.
// Ravi Kumar has joined the class.
```

**Custom Class Extending EventEmitter:**

```javascript
const EventEmitter = require("events");

class StudentManager extends EventEmitter {
  constructor() {
    super();
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
    // Emit an event when a student is added
    this.emit("studentAdded", student);
  }

  removeStudent(rollNo) {
    const index = this.students.findIndex(s => s.rollNo === rollNo);
    if (index !== -1) {
      const removed = this.students.splice(index, 1)[0];
      this.emit("studentRemoved", removed);
    } else {
      this.emit("error", new Error(`Student ${rollNo} not found`));
    }
  }
}

const manager = new StudentManager();

// Register listeners
manager.on("studentAdded", (student) => {
  console.log(`New student enrolled: ${student.name} (${student.rollNo})`);
});

manager.on("studentRemoved", (student) => {
  console.log(`Student removed: ${student.name}`);
});

manager.on("error", (err) => {
  console.error(`Error: ${err.message}`);
});

// Use once() for a one-time welcome message
manager.once("studentAdded", (student) => {
  console.log(`Welcome, first student of the batch!`);
});

// Trigger events
manager.addStudent({ name: "Ravi Kumar", rollNo: "21B01A1201", branch: "IT" });
manager.addStudent({ name: "Priya Sharma", rollNo: "21B01A1202", branch: "CSE" });
manager.removeStudent("21B01A1201");

// Output:
// New student enrolled: Ravi Kumar (21B01A1201)
// Welcome, first student of the batch!
// New student enrolled: Priya Sharma (21B01A1202)
// Student removed: Ravi Kumar
```

**Built-in Modules Using EventEmitter:**

Many Node.js core modules inherit from EventEmitter:

```javascript
const http = require("http");

const server = http.createServer();

// The server object is an EventEmitter
server.on("request", (req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Response from VCE server");
});

server.on("listening", () => {
  console.log("Server is listening on port 3000");
});

server.on("close", () => {
  console.log("Server has been closed");
});

server.listen(3000);
```

**Removing Listeners:**

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

function onAttendance(student) {
  console.log(`${student} marked present`);
}

emitter.on("attendance", onAttendance);
emitter.emit("attendance", "Amit Reddy"); // Output: Amit Reddy marked present

// Remove the listener
emitter.removeListener("attendance", onAttendance);
emitter.emit("attendance", "Sneha Patel"); // No output - listener removed

// Check listener count
console.log(emitter.listenerCount("attendance")); // Output: 0
```

**Event-Driven Architecture Flow:**

```mermaid
graph LR
    A[Event Occurs] --> B[EventEmitter.emit]
    B --> C{Listeners Registered?}
    C -->|Yes| D[Execute Listener 1]
    C -->|Yes| E[Execute Listener 2]
    C -->|Yes| F[Execute Listener N]
    C -->|No| G[Event Ignored]
```

**Key Points:**
- Events are synchronous - listeners are called in the order they are registered.
- The `error` event is special: if emitted with no listener, Node.js throws the error and crashes.
- `once()` automatically removes the listener after the first invocation.
- Maximum listeners per event default is 10 (change with `setMaxListeners()`).

---

**Q5. Explain Timers in Node.js (setTimeout, setInterval, setImmediate) with examples.**

**Answer:**

Node.js provides timer functions to schedule code execution at specific intervals or after a delay. These timers are part of the global scope and do not need to be imported.

**1. setTimeout(callback, delay, [args])**

Executes the callback function once after the specified delay (in milliseconds).

```javascript
console.log("Exam starts now");

setTimeout(() => {
  console.log("Time's up! Submit your papers.");
}, 3000); // Executes after 3 seconds

console.log("You have 3 seconds remaining");

// Output:
// Exam starts now
// You have 3 seconds remaining
// (after 3 seconds) Time's up! Submit your papers.
```

**Cancelling a timeout:**

```javascript
const timerId = setTimeout(() => {
  console.log("This will NOT execute");
}, 5000);

// Cancel before it executes
clearTimeout(timerId);
console.log("Timeout cancelled");
```

**2. setInterval(callback, delay, [args])**

Executes the callback function repeatedly at every specified interval.

```javascript
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(`Attendance check #${count}`);

  if (count === 5) {
    clearInterval(intervalId); // Stop after 5 checks
    console.log("Attendance complete");
  }
}, 1000);

// Output (one per second):
// Attendance check #1
// Attendance check #2
// Attendance check #3
// Attendance check #4
// Attendance check #5
// Attendance complete
```

**3. setImmediate(callback, [args])**

Executes the callback in the Check phase of the event loop, after I/O events.

```javascript
console.log("Start");

setImmediate(() => {
  console.log("setImmediate callback");
});

setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

process.nextTick(() => {
  console.log("nextTick callback");
});

console.log("End");

// Output:
// Start
// End
// nextTick callback
// setTimeout callback  (or setImmediate - order not guaranteed at top level)
// setImmediate callback (or setTimeout)
```

**4. process.nextTick(callback)**

Not technically a timer, but important for scheduling. Executes before any other I/O events or timers in the next iteration.

```javascript
console.log("Start");

process.nextTick(() => {
  console.log("nextTick - executes before timers");
});

setTimeout(() => {
  console.log("setTimeout - executes in Timers phase");
}, 0);

setImmediate(() => {
  console.log("setImmediate - executes in Check phase");
});

console.log("End");

// Guaranteed output order:
// Start
// End
// nextTick - executes before timers
// setTimeout - executes in Timers phase
// setImmediate - executes in Check phase
```

**Execution Priority Order:**

```mermaid
graph TD
    A[Synchronous Code] -->|First| B[process.nextTick]
    B -->|Second| C[Promise.then / microtasks]
    C -->|Third| D[setTimeout / setInterval - Timers Phase]
    D -->|Fourth| E[I/O Callbacks]
    E -->|Fifth| F[setImmediate - Check Phase]
```

**Practical Example - Student Notification System:**

```javascript
const students = [
  { name: "Ravi Kumar", rollNo: "21B01A1201" },
  { name: "Priya Sharma", rollNo: "21B01A1202" },
  { name: "Amit Reddy", rollNo: "21B01A1203" },
  { name: "Sneha Patel", rollNo: "21B01A1204" },
  { name: "Karthik Rao", rollNo: "21B01A1205" }
];

// Delayed announcement
setTimeout(() => {
  console.log("Announcement: Results will be posted in 5 minutes.");
}, 2000);

// Periodic attendance call
let index = 0;
const rollCall = setInterval(() => {
  if (index < students.length) {
    console.log(`Roll Call: ${students[index].rollNo} - ${students[index].name}`);
    index++;
  } else {
    clearInterval(rollCall);
    console.log("Roll call complete.");
    
    // Use setImmediate for post-rollcall processing
    setImmediate(() => {
      console.log("Processing attendance records...");
    });
  }
}, 1000);
```

**Key Differences Summary:**

| Timer | When it Executes | Cancellation | Use Case |
|---|---|---|---|
| `setTimeout` | Once, after delay | `clearTimeout()` | Delayed operations |
| `setInterval` | Repeatedly, at interval | `clearInterval()` | Polling, periodic tasks |
| `setImmediate` | After current I/O cycle | `clearImmediate()` | After I/O completion |
| `process.nextTick` | Before next event loop phase | Cannot cancel | Immediate async execution |

---

**Q6. Explain the progression from Callbacks to Promises to Async/Await with examples.**

**Answer:**

Node.js has evolved its approach to handling asynchronous operations. Understanding this progression is essential for writing modern, maintainable code.

**1. Callbacks (The Original Approach)**

A callback is a function passed as an argument to another function, executed after the async operation completes. Node.js follows the **error-first callback** convention.

```javascript
const fs = require("fs");

// Error-first callback pattern
fs.readFile("students.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }
  console.log("File contents:", data);
});

console.log("This runs before the file is read");
```

**The Callback Hell Problem:**

When multiple async operations depend on each other, callbacks become deeply nested:

```javascript
// Callback Hell - "Pyramid of Doom"
const fs = require("fs");

fs.readFile("student1.json", "utf8", (err, data1) => {
  if (err) return console.error(err);
  
  fs.readFile("student2.json", "utf8", (err, data2) => {
    if (err) return console.error(err);
    
    fs.readFile("student3.json", "utf8", (err, data3) => {
      if (err) return console.error(err);
      
      fs.writeFile("allStudents.json", data1 + data2 + data3, (err) => {
        if (err) return console.error(err);
        
        console.log("All student data merged successfully");
        // More nesting continues...
      });
    });
  });
});
```

Problems with callbacks:
- Deep nesting reduces readability
- Error handling is repetitive
- Difficult to debug and maintain
- Hard to implement control flow (parallel, sequential)

**2. Promises (ES6 - The Improvement)**

A Promise represents a future value. It has three states:

```mermaid
graph LR
    A[Promise Created<br>State: PENDING] -->|Operation Succeeds| B[State: FULFILLED<br>.then handler]
    A -->|Operation Fails| C[State: REJECTED<br>.catch handler]
```

**Creating and using Promises:**

```javascript
// Creating a Promise
function getStudent(rollNo) {
  return new Promise((resolve, reject) => {
    const students = [
      { rollNo: "21B01A1201", name: "Ravi Kumar", branch: "IT" },
      { rollNo: "21B01A1202", name: "Priya Sharma", branch: "CSE" },
      { rollNo: "21B01A1203", name: "Amit Reddy", branch: "IT" }
    ];
    
    const student = students.find(s => s.rollNo === rollNo);
    
    if (student) {
      resolve(student); // Success
    } else {
      reject(new Error(`Student ${rollNo} not found`)); // Failure
    }
  });
}

// Using the Promise
getStudent("21B01A1201")
  .then(student => {
    console.log(`Found: ${student.name}, Branch: ${student.branch}`);
  })
  .catch(err => {
    console.error(err.message);
  });
```

**Promise Chaining (solving callback hell):**

```javascript
const fs = require("fs").promises; // fs with Promise API

fs.readFile("student1.json", "utf8")
  .then(data1 => {
    console.log("Read student 1");
    return fs.readFile("student2.json", "utf8");
  })
  .then(data2 => {
    console.log("Read student 2");
    return fs.readFile("student3.json", "utf8");
  })
  .then(data3 => {
    console.log("Read student 3");
    return fs.writeFile("allStudents.json", "merged data");
  })
  .then(() => {
    console.log("All student data merged successfully");
  })
  .catch(err => {
    console.error("Error:", err.message); // Single error handler
  });
```

**Promise Utility Methods:**

```javascript
// Promise.all - Run all in parallel, fail if ANY fails
const promise1 = getStudent("21B01A1201");
const promise2 = getStudent("21B01A1202");
const promise3 = getStudent("21B01A1203");

Promise.all([promise1, promise2, promise3])
  .then(students => {
    students.forEach(s => console.log(`${s.name} - ${s.branch}`));
  })
  .catch(err => console.error(err.message));

// Promise.allSettled - Run all, report each result
Promise.allSettled([promise1, promise2, getStudent("INVALID")])
  .then(results => {
    results.forEach(r => {
      if (r.status === "fulfilled") console.log(`Found: ${r.value.name}`);
      else console.log(`Failed: ${r.reason.message}`);
    });
  });

// Promise.race - Returns result of first settled promise
Promise.race([promise1, promise2])
  .then(first => console.log(`First found: ${first.name}`));
```

**3. Async/Await (ES2017 - The Modern Approach)**

async/await is syntactic sugar over Promises that makes async code look synchronous.

```javascript
// The async keyword makes a function return a Promise
// The await keyword pauses execution until the Promise resolves

async function processStudents() {
  try {
    const student1 = await getStudent("21B01A1201");
    console.log(`Found: ${student1.name}`);

    const student2 = await getStudent("21B01A1202");
    console.log(`Found: ${student2.name}`);

    const student3 = await getStudent("21B01A1203");
    console.log(`Found: ${student3.name}`);

    console.log("All students processed successfully");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

processStudents();
```

**Parallel execution with async/await:**

```javascript
async function fetchAllStudents() {
  try {
    // Run all queries in parallel using Promise.all with await
    const [student1, student2, student3] = await Promise.all([
      getStudent("21B01A1201"),
      getStudent("21B01A1202"),
      getStudent("21B01A1203")
    ]);

    console.log(student1.name, student2.name, student3.name);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

fetchAllStudents();
```

**Comparison Summary:**

| Feature | Callbacks | Promises | Async/Await |
|---|---|---|---|
| Readability | Poor (nested) | Better (chained) | Best (sequential) |
| Error Handling | Each callback | Single `.catch()` | `try/catch` block |
| Chaining | Nested callbacks | `.then()` chains | `await` statements |
| Debugging | Difficult | Moderate | Easy (line by line) |
| Parallel Execution | Manual | `Promise.all()` | `await Promise.all()` |
| Introduced | Node.js origin | ES6 (2015) | ES2017 |

---

**Q7. Explain error handling in Node.js with callbacks and async/await.**

**Answer:**

Error handling is critical in Node.js applications. Since Node.js is asynchronous, traditional try/catch does not work with callbacks. Node.js provides multiple error handling mechanisms depending on the async pattern used.

**1. Error-First Callback Pattern**

The convention in Node.js is to pass the error as the first argument to the callback:

```javascript
const fs = require("fs");

// Error-first callback
fs.readFile("students.txt", "utf8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("File not found: students.txt");
    } else if (err.code === "EACCES") {
      console.error("Permission denied");
    } else {
      console.error("Unexpected error:", err.message);
    }
    return; // Important: stop execution
  }
  console.log("Data:", data);
});
```

**Why try/catch does NOT work with callbacks:**

```javascript
// WRONG - try/catch cannot catch async errors
try {
  fs.readFile("missing.txt", "utf8", (err, data) => {
    if (err) throw err; // This throw is NOT caught by the outer try/catch
  });
} catch (e) {
  console.log("This will NOT execute for async errors");
}
```

**2. Error Handling with Promises**

```javascript
function getStudentFromDB(rollNo) {
  return new Promise((resolve, reject) => {
    if (!rollNo) {
      reject(new Error("Roll number is required"));
      return;
    }
    // Simulate database lookup
    setTimeout(() => {
      const student = { name: "Ravi Kumar", rollNo: "21B01A1201" };
      if (rollNo === student.rollNo) {
        resolve(student);
      } else {
        reject(new Error(`Student ${rollNo} not found`));
      }
    }, 100);
  });
}

// Using .catch()
getStudentFromDB("21B01A1299")
  .then(student => console.log(student.name))
  .catch(err => console.error("Error:", err.message));

// Chained error handling
getStudentFromDB("21B01A1201")
  .then(student => {
    console.log(`Found: ${student.name}`);
    return getStudentFromDB("INVALID");
  })
  .then(student2 => {
    console.log(student2.name);
  })
  .catch(err => {
    // Catches error from ANY step in the chain
    console.error("Pipeline failed:", err.message);
  })
  .finally(() => {
    console.log("Operation complete (runs always)");
  });
```

**3. Error Handling with async/await**

```javascript
async function enrollStudent(studentData) {
  try {
    // Validate input
    if (!studentData.name || !studentData.rollNo) {
      throw new Error("Name and Roll Number are required");
    }

    // Simulate async operations
    const student = await getStudentFromDB(studentData.rollNo);
    console.log(`Student ${student.name} already exists`);
  } catch (err) {
    if (err.message.includes("not found")) {
      console.log(`Enrolling new student: ${studentData.name}`);
    } else {
      console.error("Enrollment error:", err.message);
    }
  } finally {
    console.log("Enrollment process completed");
  }
}

enrollStudent({ name: "Sneha Patel", rollNo: "21B01A1204" });
```

**4. Global Error Handlers**

```javascript
// Catch unhandled Promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason.message);
  // Log the error, clean up, then exit
  process.exit(1);
});

// Catch uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err.message);
  // Perform cleanup and exit
  process.exit(1);
});
```

**5. Custom Error Classes**

```javascript
class StudentNotFoundError extends Error {
  constructor(rollNo) {
    super(`Student with roll number ${rollNo} not found`);
    this.name = "StudentNotFoundError";
    this.rollNo = rollNo;
    this.statusCode = 404;
  }
}

class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
    this.statusCode = 400;
  }
}

async function findStudent(rollNo) {
  if (!rollNo) {
    throw new ValidationError("rollNo", "Roll number is required");
  }
  
  const student = null; // Simulate not found
  if (!student) {
    throw new StudentNotFoundError(rollNo);
  }
  return student;
}

async function handleRequest(rollNo) {
  try {
    const student = await findStudent(rollNo);
    console.log(student);
  } catch (err) {
    if (err instanceof StudentNotFoundError) {
      console.error(`404: ${err.message}`);
    } else if (err instanceof ValidationError) {
      console.error(`400: ${err.message} (field: ${err.field})`);
    } else {
      console.error(`500: Internal Server Error`);
    }
  }
}

handleRequest("21B01A1299");
```

**Error Handling Best Practices:**
1. Always handle errors - never ignore them.
2. Use error-first callbacks for callback-based code.
3. Prefer async/await with try/catch for modern code.
4. Always register `unhandledRejection` and `uncaughtException` handlers.
5. Create custom error classes for domain-specific errors.
6. Use `finally` for cleanup operations (close connections, release resources).

---

## Topic 4: Introduction to MongoDB

### Short Answer Questions (2 Marks) - Introduction to MongoDB

---

**Q20. What is MongoDB?**

MongoDB is an open-source, cross-platform, document-oriented NoSQL database. It stores data in flexible, JSON-like documents (BSON format) instead of rows and columns like relational databases. Key features include: schema flexibility (documents in the same collection can have different fields), horizontal scalability through sharding, built-in replication for high availability, and rich query language with aggregation support. MongoDB 7.0 is the latest version.

---

**Q21. What is a document in MongoDB?**

A document is the basic unit of data in MongoDB, analogous to a row in a relational database. Documents are stored in BSON (Binary JSON) format and consist of field-value pairs. Fields can contain strings, numbers, arrays, nested documents, and other data types. Each document must have a unique `_id` field (auto-generated if not provided). Example:
```javascript
{
  _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
  name: "Ravi Kumar",
  rollNo: "21B01A1201",
  branch: "IT"
}
```

---

**Q22. What is a collection in MongoDB?**

A collection is a group of MongoDB documents, analogous to a table in a relational database. Unlike tables, collections do not enforce a fixed schema - documents within the same collection can have different fields and data types. Collections are created implicitly when the first document is inserted. They exist within a database. Example: a "students" collection holds all student documents.

---

**Q23. What is BSON?**

BSON (Binary JSON) is the binary-encoded serialization format used by MongoDB to store documents and make remote procedure calls. It extends JSON by supporting additional data types like `Date`, `ObjectId`, `Binary`, `Int32`, `Int64`, `Decimal128`, and `RegExp`. BSON is designed for efficient encoding/decoding and fast traversal. While documents appear as JSON when queried, they are stored internally as BSON.

---

**Q24. What is the difference between SQL and NoSQL databases?**

| Feature | SQL (e.g., Oracle DB) | NoSQL (e.g., MongoDB) |
|---|---|---|
| Data Model | Tables with rows and columns | Documents, key-value, graph, column |
| Schema | Fixed schema (predefined) | Flexible/dynamic schema |
| Query Language | SQL (Structured Query Language) | MongoDB Query Language (MQL) |
| Scalability | Vertical (scale up) | Horizontal (scale out/sharding) |
| Relationships | JOINs across tables | Embedded documents or references |
| ACID | Full ACID compliance | ACID at document level |

---

**Q25. What is mongosh?**

mongosh (MongoDB Shell) is the modern, official command-line interface for interacting with MongoDB. It replaces the legacy `mongo` shell. It supports JavaScript syntax, provides syntax highlighting, auto-completion, and clear error messages. Connect using `mongosh` (defaults to localhost:27017) or `mongosh "mongodb://localhost:27017/college"`. It is used for running queries, administrative tasks, and database management.

---

**Q26. What is the insertOne() command?**

`insertOne()` is a MongoDB method that inserts a single document into a collection. It returns an object containing `acknowledged: true` and the `insertedId` (the `_id` of the new document). If the collection does not exist, it creates it automatically.
```javascript
db.students.insertOne({
  name: "Ravi Kumar",
  rollNo: "21B01A1201",
  branch: "IT"
})
// Returns: { acknowledged: true, insertedId: ObjectId("...") }
```

---

**Q27. What is the find() command?**

`find()` is a MongoDB method that retrieves documents from a collection. Without arguments, `find()` returns all documents. It accepts a filter object (query criteria) and an optional projection object (to specify which fields to return). It returns a cursor that can be iterated.
```javascript
db.students.find({ branch: "IT" })           // All IT students
db.students.find({ branch: "IT" }, { name: 1 }) // Only name field
db.students.findOne({ rollNo: "21B01A1201" })   // Single document
```

---

**Q28. What is the difference between updateOne() and updateMany()?**

| Feature | `updateOne()` | `updateMany()` |
|---|---|---|
| Documents Modified | Updates the **first** matching document | Updates **all** matching documents |
| Syntax | `db.col.updateOne(filter, update)` | `db.col.updateMany(filter, update)` |
| Use Case | Update a specific record | Batch updates |

Example:
```javascript
db.students.updateOne({ rollNo: "21B01A1201" }, { $set: { age: 21 } })
db.students.updateMany({ branch: "IT" }, { $set: { semester: 4 } })
```

---

**Q29. What is an aggregation pipeline?**

An aggregation pipeline is a framework in MongoDB for performing data transformations and computations on documents. It consists of stages that process documents sequentially - the output of one stage becomes the input of the next. Common stages include `$match` (filter), `$group` (aggregate), `$sort`, `$project` (reshape), `$lookup` (join), and `$unwind`. It is MongoDB's equivalent of SQL GROUP BY, JOIN, and subqueries.

---

**Q30. What is indexing in MongoDB?**

Indexing in MongoDB improves query performance by creating efficient data structures (B-tree) for quick lookup of documents. Without indexes, MongoDB performs a collection scan (examines every document). The `_id` field is indexed by default. Create indexes on frequently queried fields using `db.collection.createIndex({ field: 1 })` where 1 is ascending and -1 is descending. Types include single field, compound, text, and geospatial indexes.

---

### Essay Questions (10 Marks) - Introduction to MongoDB

---

**Q8. Compare SQL (RDBMS) vs NoSQL (MongoDB) with examples.**

**Answer:**

Since students have prior experience with Oracle DB (RDBMS), this comparison maps familiar SQL concepts to their MongoDB equivalents.

**Terminology Mapping:**

| SQL (Oracle DB) | MongoDB |
|---|---|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |
| Primary Key | `_id` field |
| Foreign Key | Reference / Embedded document |
| JOIN | `$lookup` (aggregation) / Embedding |
| Index | Index |
| Schema | Dynamic (no fixed schema) |

**Data Model Comparison:**

SQL (Oracle DB) - Students Table:
```
CREATE TABLE students (
    roll_no   VARCHAR2(20) PRIMARY KEY,
    name      VARCHAR2(50) NOT NULL,
    age       NUMBER,
    branch    VARCHAR2(10),
    semester  NUMBER
);

INSERT INTO students VALUES ('21B01A1201', 'Ravi Kumar', 21, 'IT', 4);
INSERT INTO students VALUES ('21B01A1202', 'Priya Sharma', 20, 'CSE', 4);
```

MongoDB - Students Collection:
```javascript
db.students.insertMany([
  {
    rollNo: "21B01A1201",
    name: "Ravi Kumar",
    age: 21,
    branch: "IT",
    semester: 4,
    subjects: ["DBMS", "Node.js", "OS"],  // Arrays - not possible in single SQL column
    address: {                              // Nested document - no need for separate table
      city: "Hyderabad",
      state: "Telangana"
    }
  },
  {
    rollNo: "21B01A1202",
    name: "Priya Sharma",
    age: 20,
    branch: "CSE",
    semester: 4,
    cgpa: 9.2   // This field exists only in this document - flexible schema
  }
])
```

**Query Comparison:**

| Operation | SQL (Oracle) | MongoDB |
|---|---|---|
| Select All | `SELECT * FROM students` | `db.students.find()` |
| Filter | `SELECT * FROM students WHERE branch = 'IT'` | `db.students.find({ branch: "IT" })` |
| Projection | `SELECT name, branch FROM students` | `db.students.find({}, { name: 1, branch: 1 })` |
| Count | `SELECT COUNT(*) FROM students` | `db.students.countDocuments()` |
| Sort | `SELECT * FROM students ORDER BY name` | `db.students.find().sort({ name: 1 })` |
| Limit | `SELECT * FROM students WHERE ROWNUM <= 5` | `db.students.find().limit(5)` |
| Insert | `INSERT INTO students VALUES (...)` | `db.students.insertOne({...})` |
| Update | `UPDATE students SET age=22 WHERE roll_no='21B01A1201'` | `db.students.updateOne({ rollNo: "21B01A1201" }, { $set: { age: 22 } })` |
| Delete | `DELETE FROM students WHERE roll_no='21B01A1201'` | `db.students.deleteOne({ rollNo: "21B01A1201" })` |
| Aggregation | `SELECT branch, COUNT(*) FROM students GROUP BY branch` | `db.students.aggregate([{ $group: { _id: "$branch", count: { $sum: 1 } } }])` |

**Schema Flexibility:**

In SQL, every row must conform to the table schema. Adding a new column requires `ALTER TABLE`:
```
ALTER TABLE students ADD email VARCHAR2(100);
-- All existing rows now have NULL email
```

In MongoDB, documents can have different structures within the same collection:
```javascript
// No ALTER needed - just insert a document with the new field
db.students.insertOne({
  rollNo: "21B01A1204",
  name: "Sneha Patel",
  branch: "ECE",
  email: "sneha@vce.ac.in",   // New field - no schema change needed
  hobbies: ["reading", "coding"]  // Arrays supported natively
});
```

**Relationships:**

SQL uses JOINs across normalized tables:
```
-- Separate tables with foreign keys
SELECT s.name, m.subject, m.marks
FROM students s
JOIN marks m ON s.roll_no = m.roll_no
WHERE s.roll_no = '21B01A1201';
```

MongoDB prefers embedding related data:
```javascript
// Embedded approach - no JOIN needed
db.students.findOne({ rollNo: "21B01A1201" })
// Returns:
{
  rollNo: "21B01A1201",
  name: "Ravi Kumar",
  marks: [                      // Embedded array of marks
    { subject: "DBMS", marks: 85 },
    { subject: "Node.js", marks: 90 },
    { subject: "OS", marks: 78 }
  ]
}
```

**When to Use SQL vs NoSQL:**

| Use SQL (Oracle) When | Use NoSQL (MongoDB) When |
|---|---|
| Data is highly structured | Data structure varies or evolves |
| Complex transactions (banking) | Rapid development with changing requirements |
| Strong data integrity needed | Horizontal scalability needed |
| Complex JOINs are frequent | Real-time analytics and big data |
| Regulatory compliance required | Flexible schema (IoT, CMS, catalogs) |

---

**Q9. Explain MongoDB CRUD operations with mongosh examples.**

**Answer:**

CRUD stands for Create, Read, Update, Delete - the four basic operations for managing data in MongoDB. Below are comprehensive examples using the mongosh shell connected to `mongodb://localhost:27017`.

**Setting Up:**

```javascript
// Connect to MongoDB
// In terminal: mongosh "mongodb://localhost:27017"

// Switch to (or create) database
use college

// The collection is created automatically when first document is inserted
```

**1. CREATE Operations**

**insertOne() - Insert a single document:**

```javascript
db.students.insertOne({
  rollNo: "21B01A1201",
  name: "Ravi Kumar",
  age: 21,
  branch: "IT",
  semester: 4,
  subjects: ["DBMS", "Node.js", "OS"],
  address: { city: "Hyderabad", state: "Telangana" }
})

// Output:
// { acknowledged: true, insertedId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1") }
```

**insertMany() - Insert multiple documents:**

```javascript
db.students.insertMany([
  {
    rollNo: "21B01A1202",
    name: "Priya Sharma",
    age: 20,
    branch: "CSE",
    semester: 4,
    subjects: ["AI", "ML", "DBMS"]
  },
  {
    rollNo: "21B01A1203",
    name: "Amit Reddy",
    age: 21,
    branch: "IT",
    semester: 4,
    subjects: ["DBMS", "Node.js", "CN"]
  },
  {
    rollNo: "21B01A1204",
    name: "Sneha Patel",
    age: 20,
    branch: "ECE",
    semester: 4,
    subjects: ["Signals", "Embedded", "VLSI"]
  },
  {
    rollNo: "21B01A1205",
    name: "Karthik Rao",
    age: 21,
    branch: "CSE",
    semester: 4,
    subjects: ["AI", "Cloud", "DBMS"]
  }
])

// Output:
// { acknowledged: true, insertedIds: { '0': ObjectId("..."), '1': ObjectId("..."), ... } }
```

**2. READ Operations**

**find() - Retrieve documents:**

```javascript
// Find all documents
db.students.find()

// Find with filter
db.students.find({ branch: "IT" })

// Find with projection (include specific fields)
db.students.find({ branch: "IT" }, { name: 1, rollNo: 1, _id: 0 })
// Output: [{ name: "Ravi Kumar", rollNo: "21B01A1201" }, { name: "Amit Reddy", rollNo: "21B01A1203" }]

// Find with exclusion projection
db.students.find({}, { subjects: 0, address: 0 })
```

**findOne() - Retrieve a single document:**

```javascript
db.students.findOne({ rollNo: "21B01A1201" })

// Output:
// {
//   _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
//   rollNo: "21B01A1201",
//   name: "Ravi Kumar",
//   age: 21,
//   branch: "IT",
//   ...
// }
```

**Sorting, Limiting, and Skipping:**

```javascript
// Sort by name ascending
db.students.find().sort({ name: 1 })

// Sort by age descending
db.students.find().sort({ age: -1 })

// Limit results to 3
db.students.find().limit(3)

// Skip first 2 and get next 2 (pagination)
db.students.find().skip(2).limit(2)

// Count documents
db.students.countDocuments({ branch: "IT" })
// Output: 2
```

**3. UPDATE Operations**

**updateOne() - Update first matching document:**

```javascript
db.students.updateOne(
  { rollNo: "21B01A1201" },                    // filter
  { $set: { age: 22, email: "ravi@vce.ac.in" } }  // update
)
// Output: { acknowledged: true, modifiedCount: 1, matchedCount: 1 }
```

**updateMany() - Update all matching documents:**

```javascript
db.students.updateMany(
  { branch: "IT" },                   // filter: all IT students
  { $set: { semester: 5 } }           // update: change semester to 5
)
// Output: { acknowledged: true, modifiedCount: 2, matchedCount: 2 }
```

**Update Operators:**

```javascript
// $inc - Increment a value
db.students.updateOne({ rollNo: "21B01A1201" }, { $inc: { age: 1 } })

// $push - Add to an array
db.students.updateOne(
  { rollNo: "21B01A1201" },
  { $push: { subjects: "Cloud Computing" } }
)

// $pull - Remove from an array
db.students.updateOne(
  { rollNo: "21B01A1201" },
  { $pull: { subjects: "OS" } }
)

// $unset - Remove a field
db.students.updateOne(
  { rollNo: "21B01A1201" },
  { $unset: { email: "" } }
)

// $rename - Rename a field
db.students.updateMany({}, { $rename: { "branch": "department" } })
```

**replaceOne() - Replace entire document:**

```javascript
db.students.replaceOne(
  { rollNo: "21B01A1204" },
  {
    rollNo: "21B01A1204",
    name: "Sneha Patel",
    age: 21,
    branch: "ECE",
    semester: 5,
    subjects: ["Signals", "Embedded", "IoT"]
  }
)
```

**4. DELETE Operations**

**deleteOne() - Delete first matching document:**

```javascript
db.students.deleteOne({ rollNo: "21B01A1204" })
// Output: { acknowledged: true, deletedCount: 1 }
```

**deleteMany() - Delete all matching documents:**

```javascript
// Delete all ECE students
db.students.deleteMany({ branch: "ECE" })

// Delete all documents (empty filter)
db.students.deleteMany({})
```

**CRUD Operations Summary:**

| Operation | Method | Example |
|---|---|---|
| **Create** | `insertOne()`, `insertMany()` | `db.students.insertOne({...})` |
| **Read** | `find()`, `findOne()` | `db.students.find({ branch: "IT" })` |
| **Update** | `updateOne()`, `updateMany()`, `replaceOne()` | `db.students.updateOne({filter}, {$set: {...}})` |
| **Delete** | `deleteOne()`, `deleteMany()` | `db.students.deleteOne({ rollNo: "..." })` |

---

**Q10. Explain MongoDB query operators with examples ($eq, $gt, $lt, $in, $and, $or).**

**Answer:**

MongoDB query operators allow you to build complex queries to filter documents. They are prefixed with `$` and can be categorized into comparison, logical, element, and array operators.

**Sample Data for Examples:**

```javascript
// Assume the students collection has:
db.students.insertMany([
  { rollNo: "21B01A1201", name: "Ravi Kumar", age: 21, branch: "IT", marks: 85, semester: 4 },
  { rollNo: "21B01A1202", name: "Priya Sharma", age: 20, branch: "CSE", marks: 92, semester: 4 },
  { rollNo: "21B01A1203", name: "Amit Reddy", age: 21, branch: "IT", marks: 78, semester: 4 },
  { rollNo: "21B01A1204", name: "Sneha Patel", age: 20, branch: "ECE", marks: 88, semester: 4 },
  { rollNo: "21B01A1205", name: "Karthik Rao", age: 22, branch: "CSE", marks: 95, semester: 4 }
])
```

**1. Comparison Operators:**

| Operator | Description | SQL Equivalent |
|---|---|---|
| `$eq` | Equal to | `=` |
| `$ne` | Not equal to | `!=` |
| `$gt` | Greater than | `>` |
| `$gte` | Greater than or equal | `>=` |
| `$lt` | Less than | `<` |
| `$lte` | Less than or equal | `<=` |
| `$in` | Matches any value in array | `IN` |
| `$nin` | Matches none of the values | `NOT IN` |

```javascript
// $eq - Equal to (implicit and explicit)
db.students.find({ branch: "IT" })               // Implicit $eq
db.students.find({ branch: { $eq: "IT" } })       // Explicit $eq
// SQL: SELECT * FROM students WHERE branch = 'IT'

// $ne - Not equal to
db.students.find({ branch: { $ne: "IT" } })
// Returns: Priya (CSE), Sneha (ECE), Karthik (CSE)

// $gt - Greater than
db.students.find({ marks: { $gt: 85 } })
// Returns: Priya (92), Sneha (88), Karthik (95)
// SQL: SELECT * FROM students WHERE marks > 85

// $gte - Greater than or equal
db.students.find({ marks: { $gte: 85 } })
// Returns: Ravi (85), Priya (92), Sneha (88), Karthik (95)

// $lt - Less than
db.students.find({ age: { $lt: 21 } })
// Returns: Priya (20), Sneha (20)

// $lte - Less than or equal
db.students.find({ age: { $lte: 21 } })
// Returns: Ravi (21), Priya (20), Amit (21), Sneha (20)

// $in - Matches any value in array
db.students.find({ branch: { $in: ["IT", "CSE"] } })
// Returns: Ravi, Priya, Amit, Karthik
// SQL: SELECT * FROM students WHERE branch IN ('IT', 'CSE')

// $nin - Matches none of the values
db.students.find({ branch: { $nin: ["IT", "CSE"] } })
// Returns: Sneha (ECE)
```

**Combining comparison operators:**

```javascript
// Range query: marks between 80 and 90 (inclusive)
db.students.find({ marks: { $gte: 80, $lte: 90 } })
// Returns: Ravi (85), Sneha (88)
// SQL: SELECT * FROM students WHERE marks BETWEEN 80 AND 90
```

**2. Logical Operators:**

| Operator | Description | SQL Equivalent |
|---|---|---|
| `$and` | Logical AND | `AND` |
| `$or` | Logical OR | `OR` |
| `$not` | Logical NOT | `NOT` |
| `$nor` | Logical NOR | `NOT (... OR ...)` |

```javascript
// $and - All conditions must be true
db.students.find({
  $and: [
    { branch: "IT" },
    { marks: { $gt: 80 } }
  ]
})
// Returns: Ravi (IT, 85)
// SQL: SELECT * FROM students WHERE branch = 'IT' AND marks > 80

// Implicit $and (shorthand - when fields are different)
db.students.find({ branch: "IT", marks: { $gt: 80 } })
// Same result as above

// $or - At least one condition must be true
db.students.find({
  $or: [
    { branch: "IT" },
    { marks: { $gt: 90 } }
  ]
})
// Returns: Ravi (IT), Amit (IT), Priya (92), Karthik (95)
// SQL: SELECT * FROM students WHERE branch = 'IT' OR marks > 90

// $not - Negates a condition
db.students.find({ marks: { $not: { $gt: 85 } } })
// Returns: Ravi (85), Amit (78)
// SQL: SELECT * FROM students WHERE NOT marks > 85

// $nor - None of the conditions must be true
db.students.find({
  $nor: [
    { branch: "IT" },
    { marks: { $gt: 90 } }
  ]
})
// Returns: Sneha (ECE, 88)
```

**Combining $and and $or:**

```javascript
// IT students with marks > 80 OR CSE students with marks > 90
db.students.find({
  $or: [
    { $and: [{ branch: "IT" }, { marks: { $gt: 80 } }] },
    { $and: [{ branch: "CSE" }, { marks: { $gt: 90 } }] }
  ]
})
// Returns: Ravi (IT, 85), Priya (CSE, 92), Karthik (CSE, 95)
```

**3. Element Operators:**

```javascript
// $exists - Check if field exists
db.students.find({ email: { $exists: true } })

// $type - Check field type
db.students.find({ age: { $type: "number" } })
```

**4. Array Operators:**

```javascript
// Add subjects array for demo
db.students.updateOne(
  { rollNo: "21B01A1201" },
  { $set: { subjects: ["DBMS", "Node.js", "OS"] } }
)

// $all - Array contains all specified elements
db.students.find({ subjects: { $all: ["DBMS", "Node.js"] } })

// $size - Array has specific length
db.students.find({ subjects: { $size: 3 } })

// $elemMatch - At least one element matches all conditions
db.students.find({
  grades: { $elemMatch: { subject: "DBMS", marks: { $gt: 80 } } }
})
```

**Operators Quick Reference:**

```mermaid
graph TD
    A[MongoDB Query Operators] --> B[Comparison]
    A --> C[Logical]
    A --> D[Element]
    A --> E[Array]
    
    B --> B1["$eq, $ne, $gt, $gte<br>$lt, $lte, $in, $nin"]
    C --> C1["$and, $or<br>$not, $nor"]
    D --> D1["$exists, $type"]
    E --> E1["$all, $size<br>$elemMatch"]
```

---

**Q11. Explain the MongoDB document model with examples.**

**Answer:**

The MongoDB document model is the fundamental concept behind how data is stored and organized in MongoDB. Unlike relational databases that use tables with fixed schemas, MongoDB uses a flexible document model.

**Document Structure:**

A MongoDB document is a data structure composed of field-value pairs, stored in BSON format. It is analogous to JSON objects and can contain various data types.

```javascript
{
  _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),  // Unique identifier (auto-generated)
  rollNo: "21B01A1201",                          // String
  name: "Ravi Kumar",                            // String
  age: 21,                                        // Number (Integer)
  cgpa: 8.75,                                     // Number (Double)
  isActive: true,                                  // Boolean
  joinDate: ISODate("2021-08-15"),                // Date
  subjects: ["DBMS", "Node.js", "OS"],            // Array
  address: {                                       // Embedded Document
    street: "Road No. 3, Banjara Hills",
    city: "Hyderabad",
    state: "Telangana",
    pin: "500034"
  },
  marks: [                                         // Array of Embedded Documents
    { subject: "DBMS", internal: 28, external: 57 },
    { subject: "Node.js", internal: 30, external: 60 },
    { subject: "OS", internal: 25, external: 53 }
  ]
}
```

**Supported BSON Data Types:**

| Type | Description | Example |
|---|---|---|
| String | UTF-8 string | `"Ravi Kumar"` |
| Integer (32/64-bit) | Whole numbers | `21`, `NumberLong("999999999999")` |
| Double | Floating-point | `8.75` |
| Boolean | true or false | `true` |
| ObjectId | 12-byte unique ID | `ObjectId("65a1...")` |
| Date | Date/time | `ISODate("2021-08-15")` |
| Array | Ordered list | `["DBMS", "Node.js"]` |
| Embedded Document | Nested document | `{ city: "Hyderabad" }` |
| Null | Null value | `null` |
| Binary Data | Binary string | `BinData(0, "...")` |
| Decimal128 | High-precision decimal | `NumberDecimal("9.99")` |

**MongoDB Data Hierarchy:**

```mermaid
graph TD
    A[MongoDB Server] --> B[Database: college]
    A --> C[Database: library]
    B --> D[Collection: students]
    B --> E[Collection: faculty]
    B --> F[Collection: courses]
    D --> G["Document: {name: 'Ravi Kumar', ...}"]
    D --> H["Document: {name: 'Priya Sharma', ...}"]
    D --> I["Document: {name: 'Amit Reddy', ...}"]
```

**Flexible Schema:**

One of MongoDB's key features is that documents in the same collection can have different structures:

```javascript
// Document 1 - IT student with project details
db.students.insertOne({
  rollNo: "21B01A1201",
  name: "Ravi Kumar",
  branch: "IT",
  project: {
    title: "Student Management System",
    tech: ["Node.js", "MongoDB", "React"]
  }
})

// Document 2 - CSE student with certification
db.students.insertOne({
  rollNo: "21B01A1202",
  name: "Priya Sharma",
  branch: "CSE",
  certifications: ["AWS Cloud Practitioner", "Google Data Analytics"],
  internship: { company: "TCS", duration: "2 months" }
})

// Both documents coexist in the same collection with different fields
```

**Embedding vs Referencing:**

There are two approaches to model relationships in MongoDB:

**Approach 1: Embedding (Denormalization)**

Related data is stored within the same document. Best when data is accessed together.

```javascript
// Student with embedded marks (one-to-many)
{
  rollNo: "21B01A1201",
  name: "Ravi Kumar",
  branch: "IT",
  marks: [
    { subject: "DBMS", marks: 85 },
    { subject: "Node.js", marks: 90 },
    { subject: "OS", marks: 78 }
  ]
}
// Advantage: Single query retrieves all data
// Disadvantage: Document size grows; 16 MB limit per document
```

**Approach 2: Referencing (Normalization)**

Related data is stored in separate collections with references (like foreign keys).

```javascript
// Students collection
{
  _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
  rollNo: "21B01A1201",
  name: "Ravi Kumar",
  branch: "IT"
}

// Marks collection (references student by _id)
{
  studentId: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
  subject: "DBMS",
  internal: 28,
  external: 57
}

// Query using $lookup (equivalent of SQL JOIN)
db.students.aggregate([
  {
    $lookup: {
      from: "marks",
      localField: "_id",
      foreignField: "studentId",
      as: "marksList"
    }
  }
])
```

**When to Embed vs Reference:**

| Criteria | Embed | Reference |
|---|---|---|
| Relationship | One-to-few | One-to-many (large) |
| Read Pattern | Data accessed together | Data accessed separately |
| Data Size | Small sub-documents | Large or growing sub-documents |
| Update Frequency | Rarely updated | Frequently updated |
| Example | Student + address | Student + all exam results over 4 years |

**The _id Field:**

Every document must have a unique `_id` field. If not provided, MongoDB auto-generates an `ObjectId`:

```javascript
// ObjectId structure (12 bytes):
// 4 bytes: Unix timestamp
// 5 bytes: Random value (unique to machine + process)
// 3 bytes: Incrementing counter

const id = ObjectId("65a1b2c3d4e5f6a7b8c9d0e1");
id.getTimestamp()  // Returns the creation date
```

---

**Q12. Explain aggregation pipeline in MongoDB with examples.**

**Answer:**

The aggregation pipeline is a powerful data processing framework in MongoDB that transforms documents through a sequence of stages. Each stage performs an operation on the input documents and passes the results to the next stage.

**Pipeline Concept:**

```mermaid
graph LR
    A[Collection] --> B["$match<br>Filter"]
    B --> C["$group<br>Aggregate"]
    C --> D["$sort<br>Order"]
    D --> E["$project<br>Reshape"]
    E --> F[Results]
```

**Sample Data:**

```javascript
db.students.insertMany([
  { rollNo: "21B01A1201", name: "Ravi Kumar", age: 21, branch: "IT", marks: 85, semester: 4 },
  { rollNo: "21B01A1202", name: "Priya Sharma", age: 20, branch: "CSE", marks: 92, semester: 4 },
  { rollNo: "21B01A1203", name: "Amit Reddy", age: 21, branch: "IT", marks: 78, semester: 4 },
  { rollNo: "21B01A1204", name: "Sneha Patel", age: 20, branch: "ECE", marks: 88, semester: 4 },
  { rollNo: "21B01A1205", name: "Karthik Rao", age: 22, branch: "CSE", marks: 95, semester: 4 }
])
```

**Common Aggregation Stages:**

| Stage | Description | SQL Equivalent |
|---|---|---|
| `$match` | Filters documents | `WHERE` |
| `$group` | Groups and aggregates | `GROUP BY` |
| `$sort` | Sorts documents | `ORDER BY` |
| `$project` | Reshapes documents (include/exclude/compute fields) | `SELECT` |
| `$limit` | Limits output documents | `LIMIT` |
| `$skip` | Skips documents | `OFFSET` |
| `$lookup` | Left outer join | `LEFT JOIN` |
| `$unwind` | Deconstructs array field | Unnest |
| `$count` | Counts documents | `COUNT(*)` |
| `$addFields` | Adds new fields | Computed columns |

**Example 1: $match - Filter Documents**

```javascript
// Find all IT students (like WHERE clause)
db.students.aggregate([
  { $match: { branch: "IT" } }
])
// SQL: SELECT * FROM students WHERE branch = 'IT'
// Returns: Ravi Kumar, Amit Reddy
```

**Example 2: $group - Group and Aggregate**

```javascript
// Count students per branch
db.students.aggregate([
  {
    $group: {
      _id: "$branch",             // Group by branch
      totalStudents: { $sum: 1 },  // Count
      avgMarks: { $avg: "$marks" }, // Average marks
      maxMarks: { $max: "$marks" }, // Highest marks
      minMarks: { $min: "$marks" }  // Lowest marks
    }
  }
])
// SQL: SELECT branch, COUNT(*), AVG(marks), MAX(marks), MIN(marks)
//      FROM students GROUP BY branch

// Output:
// { _id: "IT",  totalStudents: 2, avgMarks: 81.5, maxMarks: 85, minMarks: 78 }
// { _id: "CSE", totalStudents: 2, avgMarks: 93.5, maxMarks: 95, minMarks: 92 }
// { _id: "ECE", totalStudents: 1, avgMarks: 88,   maxMarks: 88, minMarks: 88 }
```

**Example 3: $match + $group + $sort (Multi-stage Pipeline)**

```javascript
// Average marks per branch for students with marks > 80, sorted descending
db.students.aggregate([
  { $match: { marks: { $gt: 80 } } },           // Stage 1: Filter
  {
    $group: {                                     // Stage 2: Group
      _id: "$branch",
      avgMarks: { $avg: "$marks" },
      count: { $sum: 1 }
    }
  },
  { $sort: { avgMarks: -1 } }                    // Stage 3: Sort descending
])
// Output:
// { _id: "CSE", avgMarks: 93.5, count: 2 }
// { _id: "ECE", avgMarks: 88,   count: 1 }
// { _id: "IT",  avgMarks: 85,   count: 1 }
```

**Example 4: $project - Reshape Documents**

```javascript
// Display formatted student info
db.students.aggregate([
  {
    $project: {
      _id: 0,
      studentInfo: { $concat: ["$name", " (", "$rollNo", ")"] },
      branch: 1,
      percentage: { $multiply: ["$marks", 1] },  // marks already in percentage
      grade: {
        $switch: {
          branches: [
            { case: { $gte: ["$marks", 90] }, then: "A+" },
            { case: { $gte: ["$marks", 80] }, then: "A" },
            { case: { $gte: ["$marks", 70] }, then: "B" },
            { case: { $gte: ["$marks", 60] }, then: "C" }
          ],
          default: "D"
        }
      }
    }
  }
])
// Output:
// { studentInfo: "Ravi Kumar (21B01A1201)", branch: "IT", percentage: 85, grade: "A" }
// { studentInfo: "Priya Sharma (21B01A1202)", branch: "CSE", percentage: 92, grade: "A+" }
// ...
```

**Example 5: $lookup - Join Collections**

```javascript
// Assume a "courses" collection exists
db.courses.insertMany([
  { branch: "IT", courseName: "B.Tech IT", hod: "Dr. Ramesh" },
  { branch: "CSE", courseName: "B.Tech CSE", hod: "Dr. Suresh" },
  { branch: "ECE", courseName: "B.Tech ECE", hod: "Dr. Venkat" }
])

// Join students with their department info
db.students.aggregate([
  {
    $lookup: {
      from: "courses",           // Collection to join
      localField: "branch",      // Field in students
      foreignField: "branch",    // Field in courses
      as: "departmentInfo"       // Output array field
    }
  },
  { $unwind: "$departmentInfo" },  // Flatten the array
  {
    $project: {
      name: 1,
      branch: 1,
      hod: "$departmentInfo.hod"
    }
  }
])
// SQL: SELECT s.name, s.branch, c.hod FROM students s LEFT JOIN courses c ON s.branch = c.branch
```

**Example 6: $unwind - Deconstruct Arrays**

```javascript
// If students have subjects array
db.students.aggregate([
  { $match: { rollNo: "21B01A1201" } },
  { $unwind: "$subjects" },     // Create one document per subject
  {
    $project: {
      name: 1,
      subject: "$subjects"
    }
  }
])
// Output:
// { name: "Ravi Kumar", subject: "DBMS" }
// { name: "Ravi Kumar", subject: "Node.js" }
// { name: "Ravi Kumar", subject: "OS" }
```

**Aggregation Accumulator Operators:**

| Operator | Description | Example |
|---|---|---|
| `$sum` | Sum of values | `{ $sum: "$marks" }` |
| `$avg` | Average of values | `{ $avg: "$marks" }` |
| `$min` | Minimum value | `{ $min: "$marks" }` |
| `$max` | Maximum value | `{ $max: "$marks" }` |
| `$first` | First value in group | `{ $first: "$name" }` |
| `$last` | Last value in group | `{ $last: "$name" }` |
| `$push` | Push values to array | `{ $push: "$name" }` |
| `$addToSet` | Push unique values to array | `{ $addToSet: "$branch" }` |

---

**Q13. Explain indexing in MongoDB and its importance.**

**Answer:**

Indexes are special data structures in MongoDB that store a small portion of the collection's data in an easy-to-traverse form (B-tree). They improve query performance by allowing MongoDB to find documents without scanning every document in a collection.

**Why Indexing is Important:**

Without an index, MongoDB performs a **collection scan** (COLLSCAN) - it examines every document to find matches. With an index, MongoDB can directly navigate to matching documents using an **index scan** (IXSCAN).

```mermaid
graph TD
    subgraph "Without Index - Collection Scan"
        A[Query: branch = IT] --> B[Scan Doc 1]
        B --> C[Scan Doc 2]
        C --> D[Scan Doc 3]
        D --> E[Scan Doc 4]
        E --> F[Scan Doc 5]
        F --> G[Return Matches]
    end
```

```mermaid
graph TD
    subgraph "With Index - Index Scan"
        A2[Query: branch = IT] --> B2[Index Lookup]
        B2 --> C2[Jump to Doc 1]
        B2 --> D2[Jump to Doc 3]
        C2 --> E2[Return Matches]
        D2 --> E2
    end
```

**Default Index:**

MongoDB automatically creates a unique index on the `_id` field for every collection. This index cannot be dropped.

**Types of Indexes:**

**1. Single Field Index:**

```javascript
// Create ascending index on rollNo
db.students.createIndex({ rollNo: 1 })

// Create descending index on marks
db.students.createIndex({ marks: -1 })
```

**2. Compound Index (Multiple Fields):**

```javascript
// Index on branch (ascending) and marks (descending)
db.students.createIndex({ branch: 1, marks: -1 })

// This index supports queries on:
// - { branch: "IT" }                    (uses prefix)
// - { branch: "IT", marks: { $gt: 80 } } (uses full index)
// But NOT:
// - { marks: { $gt: 80 } }              (cannot use - not a prefix)
```

**3. Unique Index:**

```javascript
// Ensure rollNo is unique across all documents
db.students.createIndex({ rollNo: 1 }, { unique: true })

// Attempting to insert a duplicate will throw an error
db.students.insertOne({ rollNo: "21B01A1201", name: "Duplicate" })
// Error: E11000 duplicate key error
```

**4. Text Index:**

```javascript
// Create text index for full-text search
db.students.createIndex({ name: "text" })

// Search for students with "Kumar" in their name
db.students.find({ $text: { $search: "Kumar" } })
```

**5. TTL Index (Time-To-Live):**

```javascript
// Documents auto-delete after 3600 seconds (1 hour)
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })
```

**Managing Indexes:**

```javascript
// List all indexes on a collection
db.students.getIndexes()

// Drop a specific index
db.students.dropIndex({ rollNo: 1 })

// Drop all indexes (except _id)
db.students.dropIndexes()
```

**Analyzing Query Performance with explain():**

```javascript
// Without index
db.students.find({ branch: "IT" }).explain("executionStats")
// Look for:
//   winningPlan.stage: "COLLSCAN"       (Bad - full collection scan)
//   totalDocsExamined: 5                 (All documents scanned)

// Create index
db.students.createIndex({ branch: 1 })

// With index
db.students.find({ branch: "IT" }).explain("executionStats")
// Look for:
//   winningPlan.stage: "IXSCAN"         (Good - index scan)
//   totalDocsExamined: 2                 (Only matching docs examined)
```

**Indexing Best Practices:**

1. **Index frequently queried fields** - fields used in `find()`, `sort()`, and `$match`.
2. **Use compound indexes** for queries involving multiple fields.
3. **Follow the ESR rule** - Equality, Sort, Range fields in that order for compound indexes.
4. **Avoid over-indexing** - each index consumes storage and slows write operations.
5. **Use `explain()`** to verify that indexes are being used.
6. **Create indexes in the background** for large collections to avoid blocking operations.

**Index Impact on Performance:**

| Aspect | Without Index | With Index |
|---|---|---|
| Read Speed | Slow (scans all documents) | Fast (direct lookup) |
| Write Speed | Fast (no index to update) | Slightly slower (index update) |
| Storage | No extra storage | Extra storage for index |
| Memory | Less RAM usage | More RAM (index in memory) |

---

## Topic 5: Accessing MongoDB from Node.js

### Short Answer Questions (2 Marks) - Accessing MongoDB from Node.js

---

**Q31. What is the MongoDB Node.js driver?**

The MongoDB Node.js driver is the official npm package (`mongodb`) that allows Node.js applications to connect to and interact with MongoDB databases. It provides a native JavaScript API for performing CRUD operations, aggregations, and administrative tasks. Install it using `npm install mongodb`. It supports connection pooling, authentication, TLS/SSL, and all MongoDB features. The current major version is 6.x.

---

**Q32. What is MongoClient?**

MongoClient is the main class from the `mongodb` driver used to establish a connection to a MongoDB server. It manages the connection pool and provides methods to access databases and collections. Usage:
```javascript
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
const db = client.db("college");
```
Always close the connection with `client.close()` when done.

---

**Q33. What is a connection string in MongoDB?**

A connection string (also called URI) specifies how to connect to a MongoDB server. The standard format is `mongodb://[username:password@]host:port/[database][?options]`. For a local MongoDB 7.0 instance: `mongodb://localhost:27017/college`. For MongoDB Atlas (cloud): `mongodb+srv://user:pass@cluster0.abc.mongodb.net/college`. The connection string can include options like replica set name, authentication source, and TLS settings.

---

### Essay Questions (10 Marks) - Accessing MongoDB from Node.js

---

**Q14. Explain how to connect to MongoDB from Node.js with code example.**

**Answer:**

The official MongoDB Node.js driver provides a robust API to connect, query, and manage MongoDB databases from Node.js applications. Here is a complete guide to establishing connections and performing operations.

**Step 1: Install the MongoDB Driver**

```
mkdir student-app
cd student-app
npm init -y
npm install mongodb
```

**Step 2: Basic Connection**

```javascript
// connect.js
const { MongoClient } = require("mongodb");

// Connection URI for local MongoDB 7.0
const uri = "mongodb://localhost:27017";

// Create a MongoClient instance
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to MongoDB server
    await client.connect();
    console.log("Connected successfully to MongoDB");

    // Access a database (creates it if it doesn't exist)
    const db = client.db("college");

    // Access a collection
    const students = db.collection("students");

    // Perform a simple operation
    const count = await students.countDocuments();
    console.log(`Total students: ${count}`);

  } catch (err) {
    console.error("Connection failed:", err.message);
  } finally {
    // Always close the connection
    await client.close();
    console.log("Connection closed");
  }
}

main();
```

**Step 3: Connection with Options**

```javascript
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  maxPoolSize: 10,              // Maximum connections in pool
  minPoolSize: 2,               // Minimum connections in pool
  connectTimeoutMS: 5000,       // Connection timeout
  socketTimeoutMS: 30000,       // Socket timeout
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});
```

**Step 4: CRUD Operations from Node.js**

```javascript
// crud.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function performCRUD() {
  try {
    await client.connect();
    const db = client.db("college");
    const students = db.collection("students");

    // ---- CREATE ----
    // Insert one document
    const insertResult = await students.insertOne({
      rollNo: "21B01A1201",
      name: "Ravi Kumar",
      age: 21,
      branch: "IT",
      semester: 4,
      subjects: ["DBMS", "Node.js", "OS"]
    });
    console.log("Inserted ID:", insertResult.insertedId);

    // Insert many documents
    const insertManyResult = await students.insertMany([
      { rollNo: "21B01A1202", name: "Priya Sharma", age: 20, branch: "CSE", semester: 4 },
      { rollNo: "21B01A1203", name: "Amit Reddy", age: 21, branch: "IT", semester: 4 },
      { rollNo: "21B01A1204", name: "Sneha Patel", age: 20, branch: "ECE", semester: 4 },
      { rollNo: "21B01A1205", name: "Karthik Rao", age: 22, branch: "CSE", semester: 4 }
    ]);
    console.log("Inserted count:", insertManyResult.insertedCount);

    // ---- READ ----
    // Find one document
    const oneStudent = await students.findOne({ rollNo: "21B01A1201" });
    console.log("Found student:", oneStudent);

    // Find multiple documents
    const itStudents = await students.find({ branch: "IT" }).toArray();
    console.log("IT students:", itStudents);

    // Find with projection and sorting
    const sorted = await students
      .find({})
      .project({ name: 1, branch: 1, _id: 0 })
      .sort({ name: 1 })
      .toArray();
    console.log("All students (sorted):", sorted);

    // ---- UPDATE ----
    // Update one document
    const updateResult = await students.updateOne(
      { rollNo: "21B01A1201" },
      { $set: { age: 22, email: "ravi@vce.ac.in" } }
    );
    console.log("Modified count:", updateResult.modifiedCount);

    // Update many documents
    const updateManyResult = await students.updateMany(
      { branch: "IT" },
      { $set: { semester: 5 } }
    );
    console.log("Modified count:", updateManyResult.modifiedCount);

    // ---- DELETE ----
    // Delete one document
    const deleteResult = await students.deleteOne({ rollNo: "21B01A1204" });
    console.log("Deleted count:", deleteResult.deletedCount);

    // Delete many documents
    // const deleteManyResult = await students.deleteMany({ branch: "ECE" });

  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
  }
}

performCRUD();
```

**Step 5: Using Aggregation from Node.js**

```javascript
async function aggregateStudents() {
  try {
    await client.connect();
    const db = client.db("college");
    const students = db.collection("students");

    // Average marks per branch
    const results = await students.aggregate([
      {
        $group: {
          _id: "$branch",
          count: { $sum: 1 },
          avgAge: { $avg: "$age" }
        }
      },
      { $sort: { count: -1 } }
    ]).toArray();

    console.log("Branch statistics:", results);
  } finally {
    await client.close();
  }
}
```

**Connection Flow Diagram:**

```mermaid
graph TD
    A[Node.js Application] -->|require mongodb| B[MongoClient]
    B -->|connect| C[MongoDB Server<br>localhost:27017]
    C --> D[Database: college]
    D --> E[Collection: students]
    E -->|insertOne/find/updateOne/deleteOne| F[Documents]
    F -->|Results| A
    A -->|client.close| G[Connection Closed]
```

---

**Q15. Explain how to build a REST API using Node.js, Express, and MongoDB.**

**Answer:**

A REST (Representational State Transfer) API provides HTTP endpoints for clients to perform CRUD operations on data. Here we build a complete Student Management API using Express.js and MongoDB.

**Project Setup:**

```
mkdir student-api
cd student-api
npm init -y
npm install express mongodb
```

**Project Structure:**

```
student-api/
  |- package.json
  |- server.js        (Main entry point)
  |- db.js            (Database connection)
  |- routes/
      |- students.js  (Student routes)
```

**Step 1: Database Connection Module (db.js)**

```javascript
// db.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("college");
    console.log("Connected to MongoDB - college database");
    return db;
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  }
}

function getDB() {
  if (!db) {
    throw new Error("Database not initialized. Call connectDB() first.");
  }
  return db;
}

module.exports = { connectDB, getDB };
```

**Step 2: Student Routes (routes/students.js)**

```javascript
// routes/students.js
const express = require("express");
const { ObjectId } = require("mongodb");
const { getDB } = require("../db");

const router = express.Router();

// GET /api/students - Get all students
router.get("/", async (req, res) => {
  try {
    const db = getDB();
    const students = await db.collection("students")
      .find({})
      .project({ _id: 1, rollNo: 1, name: 1, branch: 1, semester: 1 })
      .sort({ rollNo: 1 })
      .toArray();

    res.status(200).json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/students/:rollNo - Get a student by roll number
router.get("/:rollNo", async (req, res) => {
  try {
    const db = getDB();
    const student = await db.collection("students")
      .findOne({ rollNo: req.params.rollNo });

    if (!student) {
      return res.status(404).json({
        success: false,
        error: `Student ${req.params.rollNo} not found`
      });
    }

    res.status(200).json({ success: true, data: student });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/students - Add a new student
router.post("/", async (req, res) => {
  try {
    const db = getDB();
    const { rollNo, name, age, branch, semester } = req.body;

    // Validation
    if (!rollNo || !name || !branch) {
      return res.status(400).json({
        success: false,
        error: "rollNo, name, and branch are required"
      });
    }

    // Check if student already exists
    const existing = await db.collection("students").findOne({ rollNo });
    if (existing) {
      return res.status(409).json({
        success: false,
        error: `Student ${rollNo} already exists`
      });
    }

    const result = await db.collection("students").insertOne({
      rollNo,
      name,
      age: age || null,
      branch,
      semester: semester || 1,
      createdAt: new Date()
    });

    res.status(201).json({
      success: true,
      message: "Student added successfully",
      insertedId: result.insertedId
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// PUT /api/students/:rollNo - Update a student
router.put("/:rollNo", async (req, res) => {
  try {
    const db = getDB();
    const updateData = { ...req.body };
    delete updateData.rollNo; // Prevent roll number modification

    const result = await db.collection("students").updateOne(
      { rollNo: req.params.rollNo },
      { $set: { ...updateData, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        error: `Student ${req.params.rollNo} not found`
      });
    }

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      modifiedCount: result.modifiedCount
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE /api/students/:rollNo - Delete a student
router.delete("/:rollNo", async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("students")
      .deleteOne({ rollNo: req.params.rollNo });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        error: `Student ${req.params.rollNo} not found`
      });
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/students/branch/:branch - Get students by branch
router.get("/branch/:branch", async (req, res) => {
  try {
    const db = getDB();
    const students = await db.collection("students")
      .find({ branch: req.params.branch.toUpperCase() })
      .sort({ name: 1 })
      .toArray();

    res.status(200).json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
```

**Step 3: Main Server File (server.js)**

```javascript
// server.js
const express = require("express");
const { connectDB } = require("./db");
const studentRoutes = require("./routes/students");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/api/students", studentRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Student Management API - VCE IT Department",
    endpoints: {
      "GET /api/students": "Get all students",
      "GET /api/students/:rollNo": "Get student by roll number",
      "POST /api/students": "Add a new student",
      "PUT /api/students/:rollNo": "Update a student",
      "DELETE /api/students/:rollNo": "Delete a student"
    }
  });
});

// Start server after connecting to database
async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
```

**REST API Endpoints Summary:**

| HTTP Method | Endpoint | Description | Status Code |
|---|---|---|---|
| GET | `/api/students` | Get all students | 200 |
| GET | `/api/students/:rollNo` | Get one student | 200 / 404 |
| POST | `/api/students` | Create a student | 201 / 400 |
| PUT | `/api/students/:rollNo` | Update a student | 200 / 404 |
| DELETE | `/api/students/:rollNo` | Delete a student | 200 / 404 |

**Testing the API:**

```
# Start the server
node server.js

# Test with curl commands:

# 1. Add a student (POST)
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{"rollNo":"21B01A1201","name":"Ravi Kumar","age":21,"branch":"IT","semester":4}'

# 2. Get all students (GET)
curl http://localhost:3000/api/students

# 3. Get one student (GET)
curl http://localhost:3000/api/students/21B01A1201

# 4. Update a student (PUT)
curl -X PUT http://localhost:3000/api/students/21B01A1201 \
  -H "Content-Type: application/json" \
  -d '{"age":22,"semester":5}'

# 5. Delete a student (DELETE)
curl -X DELETE http://localhost:3000/api/students/21B01A1201
```

**Request-Response Flow:**

```mermaid
graph LR
    A[Client<br>Browser/Postman] -->|HTTP Request| B[Express.js<br>Server :3000]
    B -->|Route Matching| C[Student Router<br>/api/students]
    C -->|MongoDB Driver| D[MongoDB<br>localhost:27017]
    D -->|Documents| C
    C -->|JSON Response| B
    B -->|HTTP Response| A
```

---

**Q16. Explain the MongoDB Node.js driver CRUD operations with code examples.**

**Answer:**

The MongoDB Node.js driver (npm package `mongodb`) provides a comprehensive API for performing all database operations from a Node.js application. Below is a complete guide with all CRUD operations.

**Setup:**

```javascript
const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("college");
    const students = db.collection("students");
    
    // Operations go here...
    
  } finally {
    await client.close();
  }
}

run().catch(console.error);
```

**1. CREATE Operations**

```javascript
// insertOne() - Insert a single document
async function addStudent(db) {
  const students = db.collection("students");

  const result = await students.insertOne({
    rollNo: "21B01A1201",
    name: "Ravi Kumar",
    age: 21,
    branch: "IT",
    semester: 4,
    subjects: ["DBMS", "Node.js", "OS"],
    address: {
      city: "Hyderabad",
      state: "Telangana"
    },
    createdAt: new Date()
  });

  console.log(`Inserted document with _id: ${result.insertedId}`);
  // Output: Inserted document with _id: 65a1b2c3d4e5f6a7b8c9d0e1
}

// insertMany() - Insert multiple documents
async function addMultipleStudents(db) {
  const students = db.collection("students");

  const result = await students.insertMany([
    { rollNo: "21B01A1202", name: "Priya Sharma", age: 20, branch: "CSE", semester: 4 },
    { rollNo: "21B01A1203", name: "Amit Reddy", age: 21, branch: "IT", semester: 4 },
    { rollNo: "21B01A1204", name: "Sneha Patel", age: 20, branch: "ECE", semester: 4 },
    { rollNo: "21B01A1205", name: "Karthik Rao", age: 22, branch: "CSE", semester: 4 }
  ]);

  console.log(`Inserted ${result.insertedCount} documents`);
  console.log("Inserted IDs:", result.insertedIds);
}
```

**2. READ Operations**

```javascript
// findOne() - Find a single document
async function findStudent(db) {
  const student = await db.collection("students")
    .findOne({ rollNo: "21B01A1201" });

  console.log("Found:", student);
  // Output: { _id: ..., rollNo: "21B01A1201", name: "Ravi Kumar", ... }
}

// find() - Find multiple documents
async function findAllStudents(db) {
  // find() returns a cursor - use toArray() to get all results
  const allStudents = await db.collection("students")
    .find({})
    .toArray();

  console.log("All students:", allStudents);
}

// find() with filter, projection, sort, limit
async function findWithOptions(db) {
  const results = await db.collection("students")
    .find({ branch: "IT" })                    // Filter: only IT branch
    .project({ name: 1, rollNo: 1, _id: 0 })   // Projection: only name and rollNo
    .sort({ name: 1 })                          // Sort: ascending by name
    .limit(10)                                  // Limit: max 10 results
    .toArray();

  console.log("IT Students:", results);
  // Output: [{ name: "Amit Reddy", rollNo: "21B01A1203" }, { name: "Ravi Kumar", rollNo: "21B01A1201" }]
}

// find() with query operators
async function advancedQueries(db) {
  const students = db.collection("students");

  // Students older than 20
  const older = await students.find({ age: { $gt: 20 } }).toArray();

  // IT or CSE students
  const itCse = await students.find({
    branch: { $in: ["IT", "CSE"] }
  }).toArray();

  // IT students with age > 20
  const itOlder = await students.find({
    $and: [{ branch: "IT" }, { age: { $gt: 20 } }]
  }).toArray();

  // Using cursor iteration (for large datasets)
  const cursor = students.find({});
  while (await cursor.hasNext()) {
    const doc = await cursor.next();
    console.log(`${doc.rollNo}: ${doc.name}`);
  }

  // Count documents
  const count = await students.countDocuments({ branch: "IT" });
  console.log(`IT students count: ${count}`);

  // Distinct values
  const branches = await students.distinct("branch");
  console.log("Branches:", branches); // ["IT", "CSE", "ECE"]
}
```

**3. UPDATE Operations**

```javascript
// updateOne() - Update a single document
async function updateStudent(db) {
  const result = await db.collection("students").updateOne(
    { rollNo: "21B01A1201" },                  // Filter
    {
      $set: { age: 22, email: "ravi@vce.ac.in" },  // Set fields
      $push: { subjects: "Cloud Computing" },       // Add to array
      $currentDate: { updatedAt: true }             // Set current date
    }
  );

  console.log(`Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`);
}

// updateMany() - Update multiple documents
async function updateMultiple(db) {
  const result = await db.collection("students").updateMany(
    { branch: "IT" },                         // Filter: all IT students
    { $set: { semester: 5 } }                  // Update: change semester
  );

  console.log(`Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`);
}

// findOneAndUpdate() - Find, update, and return the document
async function findAndUpdate(db) {
  const result = await db.collection("students").findOneAndUpdate(
    { rollNo: "21B01A1201" },
    { $inc: { age: 1 } },
    { returnDocument: "after" }   // Return the updated document
  );

  console.log("Updated student:", result);
}

// Upsert - Insert if not found, update if found
async function upsertStudent(db) {
  const result = await db.collection("students").updateOne(
    { rollNo: "21B01A1206" },
    {
      $set: {
        name: "Neha Gupta",
        branch: "IT",
        semester: 4
      }
    },
    { upsert: true }  // Insert if not found
  );

  console.log(`Upserted ID: ${result.upsertedId}`);
}
```

**4. DELETE Operations**

```javascript
// deleteOne() - Delete a single document
async function deleteStudent(db) {
  const result = await db.collection("students")
    .deleteOne({ rollNo: "21B01A1204" });

  console.log(`Deleted: ${result.deletedCount} document(s)`);
}

// deleteMany() - Delete multiple documents
async function deleteMultiple(db) {
  const result = await db.collection("students")
    .deleteMany({ branch: "ECE" });

  console.log(`Deleted: ${result.deletedCount} document(s)`);
}

// findOneAndDelete() - Find, delete, and return the deleted document
async function findAndDelete(db) {
  const deleted = await db.collection("students")
    .findOneAndDelete({ rollNo: "21B01A1205" });

  console.log("Deleted student:", deleted);
}
```

**5. Bulk Operations (for efficiency)**

```javascript
async function bulkOperations(db) {
  const students = db.collection("students");

  const result = await students.bulkWrite([
    {
      insertOne: {
        document: { rollNo: "21B01A1206", name: "Neha Gupta", branch: "IT" }
      }
    },
    {
      updateOne: {
        filter: { rollNo: "21B01A1201" },
        update: { $set: { semester: 5 } }
      }
    },
    {
      deleteOne: {
        filter: { rollNo: "21B01A1204" }
      }
    }
  ]);

  console.log(`Inserted: ${result.insertedCount}`);
  console.log(`Modified: ${result.modifiedCount}`);
  console.log(`Deleted: ${result.deletedCount}`);
}
```

**Complete Working Example:**

```javascript
// complete-crud.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("college");
    const students = db.collection("students");

    // Clear collection for fresh start
    await students.deleteMany({});

    // CREATE
    await students.insertMany([
      { rollNo: "21B01A1201", name: "Ravi Kumar", age: 21, branch: "IT" },
      { rollNo: "21B01A1202", name: "Priya Sharma", age: 20, branch: "CSE" },
      { rollNo: "21B01A1203", name: "Amit Reddy", age: 21, branch: "IT" },
      { rollNo: "21B01A1204", name: "Sneha Patel", age: 20, branch: "ECE" },
      { rollNo: "21B01A1205", name: "Karthik Rao", age: 22, branch: "CSE" }
    ]);
    console.log("Inserted 5 students");

    // READ
    const itStudents = await students.find({ branch: "IT" }).toArray();
    console.log("IT Students:", itStudents.map(s => s.name));

    // UPDATE
    await students.updateOne(
      { rollNo: "21B01A1201" },
      { $set: { age: 22 } }
    );
    console.log("Updated Ravi's age to 22");

    // DELETE
    await students.deleteOne({ rollNo: "21B01A1204" });
    console.log("Deleted Sneha Patel");

    // VERIFY
    const remaining = await students.find({}).toArray();
    console.log("Remaining students:", remaining.map(s => `${s.name} (${s.branch})`));

  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

main();
```

**Output:**
```
Connected to MongoDB
Inserted 5 students
IT Students: [ 'Ravi Kumar', 'Amit Reddy' ]
Updated Ravi's age to 22
Deleted Sneha Patel
Remaining students: [ 'Ravi Kumar (IT)', 'Priya Sharma (CSE)', 'Amit Reddy (IT)', 'Karthik Rao (CSE)' ]
Connection closed
```

---

## Additional Short Answer Questions

---

**Q34. What is the difference between require() and import in Node.js?**

| Feature | `require()` (CommonJS) | `import` (ES Modules) |
|---|---|---|
| Syntax | `const fs = require("fs")` | `import fs from "fs"` |
| Loading | Synchronous (runtime) | Asynchronous (compile time) |
| Default in Node.js | Yes (default module system) | Requires `"type": "module"` in package.json or `.mjs` extension |
| Selective Import | `const { readFile } = require("fs")` | `import { readFile } from "fs"` |
| Availability | All Node.js versions | Node.js 12+ (stable from 14+) |

---

**Q35. What is middleware in Express.js?**

Middleware functions are functions that have access to the request (`req`), response (`res`), and the `next` function in the application's request-response cycle. They can execute code, modify request/response objects, end the cycle, or call the next middleware. Common middleware includes `express.json()` for parsing JSON bodies, `cors()` for cross-origin requests, and custom authentication/logging middleware.
```javascript
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to next middleware
});
```

---

**Q36. What is the purpose of the ObjectId in MongoDB?**

ObjectId is a 12-byte unique identifier used as the default value for the `_id` field in MongoDB documents. Its structure includes: 4 bytes for Unix timestamp, 5 bytes for a random value unique to the machine and process, and 3 bytes for an incrementing counter. It is globally unique without requiring a central authority. You can extract the creation time with `ObjectId.getTimestamp()`. Example: `ObjectId("65a1b2c3d4e5f6a7b8c9d0e1")`.

---

**Q37. What is the difference between findOne() and find() in MongoDB?**

| Feature | `findOne()` | `find()` |
|---|---|---|
| Returns | A single document (or `null`) | A cursor (iterable over multiple documents) |
| Usage | When you need exactly one result | When you need multiple results |
| Methods | Cannot chain sort/limit | Can chain `.sort()`, `.limit()`, `.skip()`, `.project()` |
| Performance | Stops after first match | Iterates through all matches |
| Node.js | Returns a document directly | Must call `.toArray()` to get array |

---

**Q38. What is the difference between deleteOne() and drop() in MongoDB?**

`deleteOne()` removes a single document matching the filter from a collection (the collection still exists). `drop()` removes the entire collection along with all its documents, indexes, and metadata from the database. Use `deleteMany({})` to remove all documents while keeping the collection structure. Example: `db.students.deleteOne({ rollNo: "21B01A1201" })` vs `db.students.drop()`.

---

**Q39. What is sharding in MongoDB?**

Sharding is MongoDB's method for distributing data across multiple servers (shards) to support horizontal scaling. Each shard holds a subset of the data, determined by a shard key. A `mongos` router directs queries to the appropriate shard(s). Sharding helps handle large datasets and high-throughput operations that exceed the capacity of a single server. It provides: data distribution, read/write scalability, and high availability.

---
