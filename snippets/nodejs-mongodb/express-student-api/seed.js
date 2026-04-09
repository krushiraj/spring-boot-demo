// seed.js — Equivalent to DataInitializer.java (CommandLineRunner) in Spring Boot
// Run: node seed.js

const { connectDB, getDB, closeDB } = require("./db");

const sampleStudents = [
  { name: "Ravi Kumar",    rollNumber: "21B01A1201", department: "IT",  email: "ravi@example.com" },
  { name: "Priya Sharma",  rollNumber: "21B01A1202", department: "CSE", email: "priya@example.com" },
  { name: "Amit Reddy",    rollNumber: "21B01A1203", department: "IT",  email: "amit@example.com" },
  { name: "Sneha Patel",   rollNumber: "21B01A1204", department: "ECE", email: "sneha@example.com" },
  { name: "Karthik Rao",   rollNumber: "21B01A1205", department: "CSE", email: "karthik@example.com" },
];

async function seed() {
  await connectDB();
  const db = getDB();
  const collection = db.collection("students");

  const count = await collection.countDocuments();
  if (count > 0) {
    console.log(`Collection already has ${count} students. Skipping seed.`);
  } else {
    const result = await collection.insertMany(sampleStudents);
    console.log(`Inserted ${result.insertedCount} sample students.`);
  }

  // Create unique index on rollNumber
  await collection.createIndex({ rollNumber: 1 }, { unique: true });
  console.log("Created unique index on rollNumber.");

  await closeDB();
}

seed().catch(console.error);
