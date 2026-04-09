// server.js — Equivalent to Application.java (@SpringBootApplication) in Spring Boot
//
// Spring Boot: SpringApplication.run(Application.class, args) → starts Tomcat on 8080
// Express:     app.listen(3000) → starts Node.js HTTP server on 3000

const express = require("express");
const cors = require("cors");
const { connectDB, closeDB } = require("./db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 8080;  // Same port as Spring Boot for easy React frontend switching

// Middleware (equivalent to Spring Boot auto-configuration)
app.use(cors({ origin: "http://localhost:5173" }));  // Equivalent to CorsConfig.java
app.use(express.json());                              // Equivalent to Jackson JSON auto-config

// Routes (equivalent to @RequestMapping("/api/students"))
app.use("/api/students", studentRoutes);

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ status: "Express Student API is running", port: PORT });
});

// Start server after DB connection (equivalent to SpringApplication.run)
async function start() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`\nExpress Student API running at http://localhost:${PORT}`);
      console.log("\nEndpoints (same as Spring Boot!):");
      console.log("  GET    /api/students              — List all");
      console.log("  GET    /api/students/:id           — Get one");
      console.log("  POST   /api/students              — Create");
      console.log("  PUT    /api/students/:id           — Update");
      console.log("  DELETE /api/students/:id           — Delete");
      console.log("  GET    /api/students/search?name=  — Search");
      console.log("  GET    /api/students/department/:d — Filter");
      console.log("\nReact frontend: http://localhost:5173");
      console.log("Press Ctrl+C to stop\n");
    });
  } catch (err) {
    console.error("Failed to start:", err.message);
    process.exit(1);
  }
}

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("\nShutting down...");
  await closeDB();
  process.exit(0);
});

start();
