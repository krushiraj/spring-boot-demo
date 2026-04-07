// 03-find.js - find, findOne, filters, projections, sorting, limiting
// Run: node 03-find.js (run 02-insert.js first to populate data)

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    const db = client.db("college");
    const students = db.collection("students");

    // --- findOne ---
    console.log("=== findOne ===\n");
    const oneStudent = await students.findOne({ rollNumber: "21B01A1201" });
    console.log("Found:", oneStudent);

    // --- find all ---
    console.log("\n=== find (all documents) ===\n");
    const allStudents = await students.find({}).toArray();
    allStudents.forEach((s) => {
      console.log(`  ${s.name} | ${s.rollNumber} | ${s.department}`);
    });

    // --- find with filter ---
    console.log("\n=== find with filter (department: 'CSE') ===\n");
    const cseStudents = await students.find({ department: "CSE" }).toArray();
    cseStudents.forEach((s) => {
      console.log(`  ${s.name} | ${s.rollNumber}`);
    });

    // --- find with projection (include only specific fields) ---
    console.log("\n=== find with projection (name and email only) ===\n");
    const projected = await students
      .find({}, { projection: { name: 1, email: 1, _id: 0 } })
      .toArray();
    projected.forEach((s) => {
      console.log(`  ${s.name} - ${s.email}`);
    });

    // --- find with sorting ---
    console.log("\n=== find with sorting (name ascending) ===\n");
    const sorted = await students
      .find({}, { projection: { name: 1, department: 1, _id: 0 } })
      .sort({ name: 1 })
      .toArray();
    sorted.forEach((s) => {
      console.log(`  ${s.name} | ${s.department}`);
    });

    // --- find with limit ---
    console.log("\n=== find with limit (top 3) ===\n");
    const limited = await students
      .find({}, { projection: { name: 1, rollNumber: 1, _id: 0 } })
      .limit(3)
      .toArray();
    limited.forEach((s) => {
      console.log(`  ${s.name} | ${s.rollNumber}`);
    });
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
    console.log("\nConnection closed.");
  }
}

main();
