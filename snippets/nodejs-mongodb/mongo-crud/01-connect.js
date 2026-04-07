// 01-connect.js - Connect to local MongoDB and list databases
// Run: node 01-connect.js

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB successfully!\n");

    // List all databases
    const adminDb = client.db().admin();
    const databases = await adminDb.listDatabases();

    console.log("=== Databases ===");
    databases.databases.forEach((db) => {
      console.log(` - ${db.name} (${(db.sizeOnDisk / 1024).toFixed(2)} KB)`);
    });
    console.log(`\nTotal: ${databases.databases.length} database(s)`);
  } catch (err) {
    console.error("Connection failed:", err.message);
  } finally {
    await client.close();
    console.log("\nConnection closed.");
  }
}

main();
