package com.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class HelloController {

    // Simple in-memory "database" of usernames and their roles
    private List<String> users = new ArrayList<>();
    private Map<String, String> tokens = new HashMap<>();

    public HelloController() {
        users.add("ravi");
        users.add("priya");
        tokens.put("valid-token-123", "ravi");
    }

    // ==========================================
    // BASIC ENDPOINTS (GET, POST, PUT, DELETE)
    // ==========================================

    // GET /hello → 200 OK (default)
    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }

    // GET /hello/{name} → 200 OK with path variable
    @GetMapping("/hello/{name}")
    public String helloName(@PathVariable String name) {
        return "Hello, " + name + "!";
    }

    // GET /greet?name=John → 200 OK with query parameter
    @GetMapping("/greet")
    public String greet(@RequestParam(defaultValue = "World") String name) {
        return "Greetings, " + name + "! Welcome to Spring Boot.";
    }

    // ==========================================
    // HTTP STATUS CODE EXAMPLES
    // ==========================================

    // --- 200 OK ---
    // Returned by default for successful GET requests
    // GET /users → returns list of users
    @GetMapping("/users")
    public ResponseEntity<List<String>> getUsers() {
        return ResponseEntity.ok(users);  // 200 OK
    }

    // --- 201 CREATED ---
    // Use when a new resource is successfully created
    // POST /users?name=amit → creates a user, returns 201
    @PostMapping("/users")
    public ResponseEntity<Map<String, String>> createUser(@RequestParam String name) {
        if (users.contains(name.toLowerCase())) {
            // 409 CONFLICT — resource already exists
            Map<String, String> error = new HashMap<>();
            error.put("error", "User '" + name + "' already exists");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
        }
        users.add(name.toLowerCase());
        Map<String, String> response = new HashMap<>();
        response.put("message", "User '" + name + "' created");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);  // 201
    }

    // --- 204 NO CONTENT ---
    // Use for successful DELETE — nothing to return
    // DELETE /users/{name} → deletes user, returns 204 (no body)
    @DeleteMapping("/users/{name}")
    public ResponseEntity<Void> deleteUser(@PathVariable String name) {
        boolean removed = users.remove(name.toLowerCase());
        if (!removed) {
            return ResponseEntity.notFound().build();  // 404
        }
        return ResponseEntity.noContent().build();  // 204 — success, no body
    }

    // --- 404 NOT FOUND ---
    // Use when the requested resource doesn't exist
    // GET /users/{name} → returns user or 404
    @GetMapping("/users/{name}")
    public ResponseEntity<?> getUser(@PathVariable String name) {
        if (users.contains(name.toLowerCase())) {
            Map<String, String> user = new HashMap<>();
            user.put("name", name);
            user.put("status", "active");
            return ResponseEntity.ok(user);  // 200
        }
        Map<String, String> error = new HashMap<>();
        error.put("error", "User '" + name + "' not found");
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);  // 404
    }

    // --- 401 UNAUTHORIZED ---
    // Use when the user is NOT authenticated (no token / invalid token)
    // GET /profile → requires auth token in header
    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(
            @RequestHeader(value = "Authorization", required = false) String authHeader) {
        // No token provided at all
        if (authHeader == null || authHeader.isEmpty()) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "Authentication required. Provide Authorization header.");
            error.put("hint", "Use: -H 'Authorization: Bearer valid-token-123'");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);  // 401
        }
        // Invalid token
        String token = authHeader.replace("Bearer ", "");
        if (!tokens.containsKey(token)) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "Invalid token");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);  // 401
        }
        // Valid token — return profile
        String username = tokens.get(token);
        Map<String, String> profile = new HashMap<>();
        profile.put("username", username);
        profile.put("role", "student");
        return ResponseEntity.ok(profile);  // 200
    }

    // --- 403 FORBIDDEN ---
    // Use when user IS authenticated but doesn't have PERMISSION
    // DELETE /admin/users/{name} → only admins can delete, regular users get 403
    @DeleteMapping("/admin/users/{name}")
    public ResponseEntity<?> adminDeleteUser(
            @PathVariable String name,
            @RequestHeader(value = "Authorization", required = false) String authHeader) {
        // Not authenticated at all → 401
        if (authHeader == null || authHeader.isEmpty()) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "Authentication required");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);  // 401
        }
        String token = authHeader.replace("Bearer ", "");
        if (!tokens.containsKey(token)) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "Invalid token");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);  // 401
        }
        // Authenticated but not an admin → 403
        // (In this demo, no one is an admin)
        Map<String, String> error = new HashMap<>();
        error.put("error", "Forbidden. You don't have admin privileges.");
        error.put("your_role", "student");
        error.put("required_role", "admin");
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(error);  // 403
    }

    // --- 400 BAD REQUEST ---
    // Use when the client sends invalid/malformed data
    // PUT /users/{name} → update user, but email is required
    @PutMapping("/users/{name}")
    public ResponseEntity<?> updateUser(
            @PathVariable String name,
            @RequestParam(required = false) String email) {
        if (!users.contains(name.toLowerCase())) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "User not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);  // 404
        }
        if (email == null || email.isEmpty()) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "Bad request. 'email' parameter is required.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);  // 400
        }
        Map<String, String> response = new HashMap<>();
        response.put("message", "User '" + name + "' updated");
        response.put("email", email);
        return ResponseEntity.ok(response);  // 200
    }
}
