// 04-update.js - updateOne and updateMany with $set
// Run: node 04-update.js (run 02-insert.js first to populate data)

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    const db = client.db("college");
    const students = db.collection("students");

    // --- updateOne ---
    console.log("=== updateOne ===\n");

    const updateOneResult = await students.updateOne(
      { rollNumber: "21B01A1201" },
      { $set: { email: "ravi.kumar@college.edu", year: 3 } }
    );
    console.log(`Matched: ${updateOneResult.matchedCount}, Modified: ${updateOneResult.modifiedCount}`);

    // Verify the update
    const updated = await students.findOne({ rollNumber: "21B01A1201" });
    console.log("Updated document:", updated);

    // --- updateMany ---
    console.log("\n=== updateMany (add 'year: 3' to all IT students) ===\n");

    const updateManyResult = await students.updateMany(
      { department: "IT" },
      { $set: { year: 3, semester: 5 } }
    );
    console.log(`Matched: ${updateManyResult.matchedCount}, Modified: ${updateManyResult.modifiedCount}`);

    // Verify
    console.log("\nIT students after update:");
    const itStudents = await students.find({ department: "IT" }).toArray();
    itStudents.forEach((s) => {
      console.log(`  ${s.name} | Year: ${s.year} | Semester: ${s.semester}`);
    });

    // Show all students
    console.log("\n=== All students after updates ===\n");
    const all = await students.find({}).toArray();
    all.forEach((s) => {
      console.log(
        `  ${s.name} | ${s.department} | Year: ${s.year || "N/A"} | Semester: ${s.semester || "N/A"}`
      );
    });
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
    console.log("\nConnection closed.");
  }
}

main();
