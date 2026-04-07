# REST Controller - HTTP Methods and Request/Response Patterns

## What this demonstrates
- `@RestController` and `@RequestMapping` for base path
- `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`
- `@PathVariable` for URL path parameters
- `@RequestParam` for query parameters
- `@RequestBody` for JSON request bodies
- `ResponseEntity` for controlling HTTP status codes
- In-memory data storage (no database needed)

## How to run
```bash
cd rest-controller
mvn spring-boot:run
```
The application starts on port 8080.

## Endpoints to test

```bash
# GET all messages
curl http://localhost:8080/api/messages
# Expected: JSON array with 2 seed messages

# GET message by id
curl http://localhost:8080/api/messages/1
# Expected: {"id":1,"text":"Hello World","author":"Alice"}

# GET message that doesn't exist
curl -v http://localhost:8080/api/messages/99
# Expected: 404 Not Found

# Search by author
curl http://localhost:8080/api/messages/search?author=Alice
# Expected: JSON array with Alice's messages

# POST create a new message
curl -X POST http://localhost:8080/api/messages \
  -H "Content-Type: application/json" \
  -d '{"text":"New message","author":"Charlie"}'
# Expected: 201 Created with the new message (id auto-assigned)

# PUT update a message
curl -X PUT http://localhost:8080/api/messages/1 \
  -H "Content-Type: application/json" \
  -d '{"text":"Updated message","author":"Alice"}'
# Expected: 200 OK with updated message

# DELETE a message
curl -X DELETE http://localhost:8080/api/messages/1
# Expected: 204 No Content
```
