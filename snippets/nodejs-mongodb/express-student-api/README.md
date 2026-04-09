# Express.js Student Management API

A properly structured Express.js REST API that **mirrors the Spring Boot Student Management API** — same endpoints, same responses, same MongoDB database. The React frontend (`labs/fullstack-student-app/solution/frontend/`) works with this backend without any changes.

## Project Structure — Spring Boot vs Express

```
Spring Boot                          Express.js
─────────────────────────            ─────────────────────────
Application.java                    server.js
application.properties               db.js
CorsConfig.java                      cors middleware in server.js
Student.java (@Document)             models/Student.js
StudentRepository.java               models/Student.js (getCollection)
StudentController.java               controllers/studentController.js
@RequestMapping("/api/students")     routes/studentRoutes.js
DataInitializer.java                 seed.js
pom.xml                              package.json
```

## Setup

```bash
# Install dependencies
npm install

# Seed sample data (run once)
node seed.js

# Start the server
npm start
# or with auto-reload on file changes:
npm run dev
```

Server runs on **http://localhost:8080** (same port as Spring Boot).

## API Endpoints (identical to Spring Boot)

| Method | URL | Description | Spring Boot Equivalent |
|--------|-----|-------------|----------------------|
| GET | `/api/students` | List all students | `@GetMapping` |
| GET | `/api/students/:id` | Get student by ID | `@GetMapping("/{id}")` |
| POST | `/api/students` | Create student | `@PostMapping` + `@RequestBody` |
| PUT | `/api/students/:id` | Update student | `@PutMapping("/{id}")` |
| DELETE | `/api/students/:id` | Delete student | `@DeleteMapping("/{id}")` |
| GET | `/api/students/search?name=x` | Search by name | `@GetMapping("/search")` + `@RequestParam` |
| GET | `/api/students/department/:dept` | Filter by department | `@GetMapping("/department/{dept}")` |

## Test with curl

```bash
# List all
curl http://localhost:8080/api/students

# Create
curl -X POST http://localhost:8080/api/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Vikram Singh","rollNumber":"21B01A1206","department":"IT","email":"vikram@example.com"}'

# Search
curl "http://localhost:8080/api/students/search?name=ravi"

# Filter by department
curl http://localhost:8080/api/students/department/IT

# Update (use an _id from the GET response)
curl -X PUT http://localhost:8080/api/students/YOUR_ID_HERE \
  -H "Content-Type: application/json" \
  -d '{"name":"Vikram Singh","rollNumber":"21B01A1206","department":"CSE","email":"vikram@example.com"}'

# Delete
curl -X DELETE http://localhost:8080/api/students/YOUR_ID_HERE
```

## Using with the React Frontend

The React frontend from `labs/fullstack-student-app/solution/frontend/` works with this API **without any code changes** because:
1. Same port (8080)
2. Same endpoints (`/api/students`)
3. Same JSON response format
4. CORS enabled for `localhost:5173`

```bash
# Terminal 1 — Run this Express backend
npm start

# Terminal 2 — Run the React frontend
cd ../../../../labs/fullstack-student-app/solution/frontend
npm install
npm run dev
```

Open http://localhost:5173 — the React app connects to Express instead of Spring Boot!

## Key Comparison

| Aspect | Spring Boot | Express.js |
|--------|------------|------------|
| Language | Java 8 | JavaScript |
| Server | Embedded Tomcat | Node.js HTTP |
| Routing | `@GetMapping`, `@PostMapping` | `router.get()`, `router.post()` |
| Request body | `@RequestBody Student` | `req.body` |
| Path params | `@PathVariable String id` | `req.params.id` |
| Query params | `@RequestParam String name` | `req.query.name` |
| DB access | `MongoRepository` (auto-generated) | `db.collection().find()` (manual) |
| DI | `@Autowired` (automatic) | `require()` (manual) |
| Response | `ResponseEntity.ok(data)` | `res.json(data)` |
| Status codes | `HttpStatus.CREATED` | `res.status(201)` |
| Config | `application.properties` | `db.js` / env vars |
| CORS | `CorsConfig.java` | `cors()` middleware |
