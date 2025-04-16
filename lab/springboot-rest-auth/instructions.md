# Spring Boot REST Authentication API with JWT

This project demonstrates a REST API authentication system using Spring Boot, Spring Security, MongoDB, and JSON Web Tokens (JWT).

## Prerequisites

1. Java 1.8 installed
2. MongoDB installed and running on default port (27017)
3. Maven installed
4. Postman or similar tool for testing REST APIs

## Project Structure

```
src/main/java/com/lab/auth/
├── AuthApplication.java           # Main application class
├── controller/
│   └── AuthController.java       # REST endpoints for auth
├── dto/
│   ├── AuthResponse.java         # JWT response DTO
│   └── LoginRequest.java         # Login request DTO
├── model/
│   └── User.java                # User entity
├── repository/
│   └── UserRepository.java      # MongoDB repository
└── security/
    ├── SecurityConfig.java      # Security configuration
    ├── JwtUtil.java            # JWT utility methods
    ├── JwtAuthenticationFilter.java  # JWT filter
    └── CustomUserDetailsService.java  # User details service
```

## Key Features

1. User Registration with validation
2. User Login with JWT authentication
3. Token validation endpoint
4. MongoDB for user storage
5. Password encryption
6. CORS configuration for frontend access

## REST API Endpoints

### 1. Register User
- **URL**: POST /api/auth/register
- **Body**:
  ```json
  {
    "username": "user123",
    "password": "password123",
    "email": "user@example.com"
  }
  ```
- **Response**:
  ```json
  {
    "token": "jwt-token-here",
    "username": "user123"
  }
  ```

### 2. Login User
- **URL**: POST /api/auth/login
- **Body**:
  ```json
  {
    "username": "user123",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "jwt-token-here",
    "username": "user123"
  }
  ```

### 3. Validate Token
- **URL**: GET /api/auth/validate
- **Headers**: 
  - Authorization: Bearer your-jwt-token
- **Response**: 200 OK if valid, 400 Bad Request if invalid

## Running the Application

1. Start MongoDB:
   ```bash
   mongod
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

4. Test the endpoints using Postman or curl

## Understanding the Code

### 1. Security Configuration
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    // Configures security settings
    // Sets up JWT authentication
    // Configures CORS
    // Defines public/private endpoints
}
```

### 2. JWT Authentication Filter
```java
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    // Extracts JWT from request header
    // Validates JWT token
    // Sets up Spring Security context
}
```

### 3. JWT Utility
```java
@Component
public class JwtUtil {
    // Generates JWT tokens
    // Validates tokens
    // Extracts user information
}
```

## Data Validation Rules

1. Username:
   - Required
   - 3-20 characters

2. Password:
   - Required
   - Minimum 6 characters

3. Email:
   - Required
   - Valid email format
   - Must be unique

## Lab Tasks

1. Test user registration:
   - Create a new user with valid data
   - Try creating a user with invalid data
   - Try creating a user with duplicate username/email

2. Test user login:
   - Login with valid credentials
   - Try logging in with invalid credentials
   - Verify JWT token in response

3. Test token validation:
   - Use a valid token
   - Try an invalid/expired token
   - Try without a token

## Common Issues and Solutions

1. **MongoDB Connection Issues**
   - Verify MongoDB is running
   - Check connection string in application.properties
   - Ensure correct database name

2. **JWT Token Issues**
   - Check token expiration time
   - Verify secret key configuration
   - Ensure proper token format in Authorization header

3. **CORS Issues**
   - Check CORS configuration in SecurityConfig
   - Verify allowed origins
   - Check request headers

## Testing with Postman

1. **Registration Test**
   - Create POST request to /api/auth/register
   - Set Content-Type: application/json
   - Add user data in request body
   - Verify JWT token in response

2. **Login Test**
   - Create POST request to /api/auth/login
   - Set Content-Type: application/json
   - Add credentials in request body
   - Save JWT token for next requests

3. **Protected Endpoint Test**
   - Add Authorization header
   - Use format: Bearer your-jwt-token
   - Try accessing protected endpoints

## Additional Challenges

1. Add password reset functionality
2. Implement token refresh mechanism
3. Add role-based authorization
4. Implement account verification via email
5. Add OAuth2 authentication

## Troubleshooting Tips

1. **JWT Token Invalid**
   - Check token format
   - Verify secret key
   - Check token expiration

2. **Authentication Failed**
   - Verify credentials
   - Check password encryption
   - Monitor debug logs

3. **CORS Errors**
   - Add proper CORS headers
   - Check allowed methods
   - Verify origin configuration