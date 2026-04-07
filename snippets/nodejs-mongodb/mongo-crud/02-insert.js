// 02-insert.js - insertOne and insertMany into "students" collection
// Run: node 02-insert.js

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    const db = client.db("college");
    const students = db.collection("students");

    // Drop existing collection to start fresh
    await students.drop().catch(() => {}); // Ignore error if collection doesn't exist

    // --- insertOne ---
    console.log("=== insertOne ===\n");

    const oneResult = await students.insertOne({
      name: "Ravi Kumar",
      rollNumber: "21B01A1201",
      department: "IT",
      email: "ravi@example.com",
    });
    console.log(`Inserted 1 document with _id: ${oneResult.insertedId}\n`);

    // --- insertMany ---
    console.log("=== insertMany ===\n");

    const manyResult = await students.insertMany([
      {
        name: "Priya Sharma",
        rollNumber: "21B01A1202",
        department: "CSE",
        email: "priya@example.com",
      },
      {
        name: "Amit Reddy",
        rollNumber: "21B01A1203",
        department: "IT",
        email: "amit@example.com",
      },
      {
        name: "Sneha Patel",
        rollNumber: "21B01A1204",
        department: "ECE",
        email: "sneha@example.com",
      },
      {
        name: "Karthik Rao",
        rollNumber: "21B01A1205",
        department: "CSE",
        email: "karthik@example.com",
      },
    ]);
    console.log(`Inserted ${manyResult.insertedCount} documents`);
    console.log("Inserted IDs:", manyResult.insertedIds);

    // Verify
    const count = await students.countDocuments();
    console.log(`\nTotal documents in "students" collection: ${count}`);
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
    console.log("\nConnection closed.");
  }
}

main();
