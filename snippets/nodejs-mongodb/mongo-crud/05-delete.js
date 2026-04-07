// 05-delete.js - deleteOne and deleteMany
// Run: node 05-delete.js (run 02-insert.js first to populate data)

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    const db = client.db("college");
    const students = db.collection("students");

    // Show current count
    let count = await students.countDocuments();
    console.log(`Students before deletion: ${count}\n`);

    // --- deleteOne ---
    console.log("=== deleteOne (rollNumber: '21B01A1204') ===\n");

    const deleteOneResult = await students.deleteOne({ rollNumber: "21B01A1204" });
    console.log(`Deleted ${deleteOneResult.deletedCount} document(s)`);

    count = await students.countDocuments();
    console.log(`Students after deleteOne: ${count}`);

    // --- deleteMany ---
    console.log("\n=== deleteMany (department: 'CSE') ===\n");

    const deleteManyResult = await students.deleteMany({ department: "CSE" });
    console.log(`Deleted ${deleteManyResult.deletedCount} document(s)`);

    // Show remaining students
    count = await students.countDocuments();
    console.log(`Students after deleteMany: ${count}\n`);

    console.log("Remaining students:");
    const remaining = await students.find({}).toArray();
    remaining.forEach((s) => {
      console.log(`  ${s.name} | ${s.rollNumber} | ${s.department}`);
    });

    if (remaining.length === 0) {
      console.log("  (none)");
    }
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
    console.log("\nConnection closed.");
  }
}

main();
