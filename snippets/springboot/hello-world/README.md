# Hello World - Spring Boot REST with HTTP Status Codes

## What this demonstrates
- `@RestController` with `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`
- `@PathVariable`, `@RequestParam`, `@RequestHeader`
- `ResponseEntity` for controlling HTTP status codes
- All major status codes: **200, 201, 204, 400, 401, 403, 404, 409**

## How to run
```bash
mvn spring-boot:run
```
App starts on http://localhost:8080

## Endpoints & Status Codes

### 200 OK — Successful GET
```bash
curl http://localhost:8080/hello
# → Hello, Spring Boot!

curl http://localhost:8080/hello/Ravi
# → Hello, Ravi!

curl http://localhost:8080/greet?name=Priya
# → Greetings, Priya! Welcome to Spring Boot.

curl http://localhost:8080/users
# → ["ravi","priya"]
```

### 201 CREATED — Resource created
```bash
curl -X POST "http://localhost:8080/users?name=amit"
# → 201 {"message":"User 'amit' created"}
```

### 409 CONFLICT — Already exists
```bash
curl -X POST "http://localhost:8080/users?name=ravi"
# → 409 {"error":"User 'ravi' already exists"}
```

### 204 NO CONTENT — Successful delete (no body)
```bash
curl -X DELETE http://localhost:8080/users/priya -v
# → 204 (no response body)
```

### 404 NOT FOUND — Resource doesn't exist
```bash
curl http://localhost:8080/users/nobody
# → 404 {"error":"User 'nobody' not found"}
```

### 400 BAD REQUEST — Invalid/missing data
```bash
curl -X PUT "http://localhost:8080/users/ravi"
# → 400 {"error":"Bad request. 'email' parameter is required."}

curl -X PUT "http://localhost:8080/users/ravi?email=ravi@example.com"
# → 200 {"message":"User 'ravi' updated","email":"ravi@example.com"}
```

### 401 UNAUTHORIZED — Not authenticated
```bash
# No token
curl http://localhost:8080/profile
# → 401 {"error":"Authentication required..."}

# Invalid token
curl -H "Authorization: Bearer wrong-token" http://localhost:8080/profile
# → 401 {"error":"Invalid token"}

# Valid token
curl -H "Authorization: Bearer valid-token-123" http://localhost:8080/profile
# → 200 {"username":"ravi","role":"student"}
```

### 403 FORBIDDEN — Authenticated but no permission
```bash
curl -H "Authorization: Bearer valid-token-123" \
     -X DELETE http://localhost:8080/admin/users/priya
# → 403 {"error":"Forbidden. You don't have admin privileges.","your_role":"student","required_role":"admin"}
```

## Status Code Summary

| Code | Name | When | Endpoint Example |
|------|------|------|-----------------|
| 200 | OK | Successful read/update | `GET /users`, `PUT /users/ravi?email=...` |
| 201 | Created | New resource created | `POST /users?name=amit` |
| 204 | No Content | Successful delete | `DELETE /users/priya` |
| 400 | Bad Request | Missing/invalid data | `PUT /users/ravi` (no email) |
| 401 | Unauthorized | No auth / bad token | `GET /profile` (no header) |
| 403 | Forbidden | Auth OK but no permission | `DELETE /admin/users/priya` |
| 404 | Not Found | Resource doesn't exist | `GET /users/nobody` |
| 409 | Conflict | Duplicate resource | `POST /users?name=ravi` (exists) |

## Key concept: 401 vs 403
- **401**: "Who are you? I don't know you." (not logged in)
- **403**: "I know who you are, but you can't do this." (logged in, no permission)
