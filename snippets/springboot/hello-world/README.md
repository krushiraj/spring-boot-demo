# Hello World - Minimal Spring Boot REST Application

## What this demonstrates
- Creating a Spring Boot application from scratch
- `@SpringBootApplication` annotation
- `@RestController` and `@GetMapping`
- `@PathVariable` for URL path parameters
- `@RequestParam` for query parameters

## How to run
```bash
cd hello-world
mvn spring-boot:run
```
The application starts on port 8080.

## Endpoints to test

```bash
# Simple GET endpoint
curl http://localhost:8080/hello
# Expected: Hello, Spring Boot!

# Path variable
curl http://localhost:8080/hello/John
# Expected: Hello, John!

# Query parameter
curl http://localhost:8080/greet?name=Alice
# Expected: Greetings, Alice! Welcome to Spring Boot.

# Query parameter with default value
curl http://localhost:8080/greet
# Expected: Greetings, World! Welcome to Spring Boot.
```
