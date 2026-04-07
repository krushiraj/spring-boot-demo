# Hello Node.js

Basic Node.js examples demonstrating core concepts. No npm packages required.

## Prerequisites

- Node.js 20 LTS installed

## Files

### 01-hello.js - Hello World

Prints "Hello, World!" along with Node.js version and platform info.

```bash
node 01-hello.js
```

Expected output:
```
Hello, World!
Node.js version: v20.x.x
Platform: darwin
Current directory: /path/to/hello-node
```

### 02-http-server.js - HTTP Server

Creates a basic HTTP server using the built-in `http` module. Responds with "Hello from Node.js!" on port 3000.

```bash
node 02-http-server.js
```

Then open http://localhost:3000 in your browser. Press Ctrl+C to stop.

Expected output:
```
Server running at http://localhost:3000/
Press Ctrl+C to stop the server
```

### 03-file-system.js - File System

Demonstrates reading, writing, and appending files using the `fs` module with both synchronous and asynchronous approaches.

```bash
node 03-file-system.js
```

Expected output:
```
=== Synchronous Operations ===

File written (sync)
File contents (sync):
Hello from Node.js!
This was written synchronously.

Content appended (sync)

=== Asynchronous Operations ===

File contents (async callback):
Hello from Node.js!
This was written synchronously.
This line was appended.

Demo file cleaned up.
```

### 04-modules.js - Custom Modules

Shows how to create and use custom modules with `module.exports` and `require`. Uses `math.js` as the custom module.

```bash
node 04-modules.js
```

Expected output:
```
=== Custom Module Demo ===

a = 10, b = 3

add(10, 3)      = 13
subtract(10, 3) = 7
multiply(10, 3) = 30
divide(10, 3)   = 3.33

divide(10, 0)   = Error: Cannot divide by zero
```
