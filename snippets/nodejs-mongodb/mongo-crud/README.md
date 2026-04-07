# MongoDB CRUD from Node.js

Demonstrates MongoDB CRUD (Create, Read, Update, Delete) operations using the official MongoDB Node.js driver, plus a simple Express.js REST API.

## Prerequisites

- Node.js 20 LTS installed
- MongoDB 7.0 running locally on `localhost:27017`

## Setup

Install dependencies first:

```bash
cd mongo-crud
npm install
```

Make sure MongoDB is running:

```bash
mongosh --eval "db.runCommand({ ping: 1 })"
```

## Files

Run the scripts in order for the best experience.

### 01-connect.js - Connect and List Databases

Connects to local MongoDB and lists all databases.

```bash
node 01-connect.js
```

Expected output:
```
Connected to MongoDB successfully!

=== Databases ===
 - admin (40.00 KB)
 - config (72.00 KB)
 - local (40.00 KB)

Total: 3 database(s)

Connection closed.
```

### 02-insert.js - Insert Documents

Inserts student records using `insertOne` and `insertMany`. Drops existing data first for a clean start.

```bash
node 02-insert.js
```

Expected output:
```
=== insertOne ===

Inserted 1 document with _id: 65a...

=== insertMany ===

Inserted 4 documents
Inserted IDs: { '0': ..., '1': ..., '2': ..., '3': ... }

Total documents in "students" collection: 5

Connection closed.
```

### 03-find.js - Query Documents

Demonstrates `find`, `findOne`, filters, projections, sorting, and limiting.

```bash
node 03-find.js
```

Expected output:
```
=== findOne ===

Found: { _id: ..., name: 'Ravi Kumar', rollNumber: '21B01A1201', department: 'IT', email: 'ravi@example.com' }

=== find (all documents) ===

  Ravi Kumar | 21B01A1201 | IT
  Priya Sharma | 21B01A1202 | CSE
  Amit Reddy | 21B01A1203 | IT
  Sneha Patel | 21B01A1204 | ECE
  Karthik Rao | 21B01A1205 | CSE

=== find with filter (department: 'CSE') ===

  Priya Sharma | 21B01A1202
  Karthik Rao | 21B01A1205

=== find with projection (name and email only) ===

  Ravi Kumar - ravi@example.com
  Priya Sharma - priya@example.com
  ...

=== find with sorting (name ascending) ===

  Amit Reddy | IT
  Karthik Rao | CSE
  Priya Sharma | CSE
  Ravi Kumar | IT
  Sneha Patel | ECE

=== find with limit (top 3) ===

  Ravi Kumar | 21B01A1201
  Priya Sharma | 21B01A1202
  Amit Reddy | 21B01A1203

Connection closed.
```

### 04-update.js - Update Documents

Demonstrates `updateOne` and `updateMany` with the `$set` operator.

```bash
node 04-update.js
```

Expected output:
```
=== updateOne ===

Matched: 1, Modified: 1
Updated document: { ..., email: 'ravi.kumar@college.edu', year: 3 }

=== updateMany (add 'year: 3' to all IT students) ===

Matched: 2, Modified: 2

IT students after update:
  Ravi Kumar | Year: 3 | Semester: 5
  Amit Reddy | Year: 3 | Semester: 5

=== All students after updates ===

  Ravi Kumar | IT | Year: 3 | Semester: 5
  Priya Sharma | CSE | Year: N/A | Semester: N/A
  ...

Connection closed.
```

### 05-delete.js - Delete Documents

Demonstrates `deleteOne` and `deleteMany`.

```bash
node 05-delete.js
```

Expected output:
```
Students before deletion: 5

=== deleteOne (rollNumber: '21B01A1204') ===

Deleted 1 document(s)
Students after deleteOne: 4

=== deleteMany (department: 'CSE') ===

Deleted 2 document(s)
Students after deleteMany: 2

Remaining students:
  Ravi Kumar | 21B01A1201 | IT
  Amit Reddy | 21B01A1203 | IT

Connection closed.
```

### 06-express-api.js - Express REST API

A full CRUD REST API for students using Express.js and MongoDB.

```bash
node 06-express-api.js
```

The server starts on http://localhost:3000. Test with curl:

```bash
# Get all students
curl http://localhost:3000/students

# Create a student
curl -X POST http://localhost:3000/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Ravi Kumar","rollNumber":"21B01A1201","department":"IT","email":"ravi@example.com"}'

# Get a student by ID (replace <id> with actual _id)
curl http://localhost:3000/students/<id>

# Update a student
curl -X PUT http://localhost:3000/students/<id> \
  -H "Content-Type: application/json" \
  -d '{"department":"CSE"}'

# Delete a student
curl -X DELETE http://localhost:3000/students/<id>
```

Press Ctrl+C to stop the server.
