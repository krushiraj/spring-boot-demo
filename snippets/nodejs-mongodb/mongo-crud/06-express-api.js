// 06-express-api.js - Simple Express.js REST API for students (full CRUD)
// Run: node 06-express-api.js
// API runs on http://localhost:3000

const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const PORT = 3000;

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

let students; // collection reference

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB before starting the server
async function start() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("college");
    students = db.collection("students");

    app.listen(PORT, () => {
      console.log(`Express API running at http://localhost:${PORT}`);
      console.log("\nEndpoints:");
      console.log("  GET    /students       - Get all students");
      console.log("  GET    /students/:id   - Get student by ID");
      console.log("  POST   /students       - Create a student");
      console.log("  PUT    /students/:id   - Update a student");
      console.log("  DELETE /students/:id   - Delete a student");
      console.log("\nPress Ctrl+C to stop\n");
    });
  } catch (err) {
    console.error("Failed to start:", err.message);
    process.exit(1);
  }
}

// --- GET all students ---
app.get("/students", async (req, res) => {
  try {
    const allStudents = await students.find({}).toArray();
    res.json(allStudents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- GET student by ID ---
app.get("/students/:id", async (req, res) => {
  try {
    const student = await students.findOne({ _id: new ObjectId(req.params.id) });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- POST create a student ---
app.post("/students", async (req, res) => {
  try {
    const { name, rollNumber, department, email } = req.body;

    if (!name || !rollNumber || !department || !email) {
      return res.status(400).json({ error: "All fields required: name, rollNumber, department, email" });
    }

    const result = await students.insertOne({ name, rollNumber, department, email });
    res.status(201).json({ message: "Student created", id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- PUT update a student ---
app.put("/students/:id", async (req, res) => {
  try {
    const updates = req.body;
    const result = await students.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: updates }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ message: "Student updated", modifiedCount: result.modifiedCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- DELETE a student ---
app.delete("/students/:id", async (req, res) => {
  try {
    const result = await students.deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("\nShutting down...");
  await client.close();
  console.log("MongoDB connection closed.");
  process.exit(0);
});

start();
