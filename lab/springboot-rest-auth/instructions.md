# Spring Boot REST Authentication API with JWT

This project implements a secure REST API authentication system using Spring Boot, Spring Security, MongoDB, and JSON Web Tokens (JWT).

## Prerequisites

1. Java 1.8 or higher
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
5. Password encryption with BCrypt
6. CORS configuration for frontend access
7. Comprehensive error handling
8. Input validation and sanitization

## REST API Endpoints

### 1. Register User
- **URL**: POST /api/auth/register
- **Body**:
  ```json
  {
    "username": "user123",
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Success Response**: 201 Created
- **Error Response**: 400 Bad Request if validation fails

### 2. Login User
- **URL**: POST /api/auth/login
- **Body**:
  ```json
  {
    "username": "user123",
    "password": "password123"
  }
  ```
- **Success Response**: JWT token
- **Error Response**: 401 Unauthorized

### 3. Validate Token
- **URL**: GET /api/auth/validate
- **Headers**: 
  - Authorization: Bearer your-jwt-token
- **Success Response**: 200 OK
- **Error Response**: 401 Unauthorized

## Data Validation Rules

1. Username:
   - Required
   - 3-20 characters
   - Alphanumeric characters only
   - Must be unique

2. Password:
   - Required
   - Minimum 6 characters
   - At least one number
   - At least one letter

3. Email:
   - Required
   - Valid email format
   - Must be unique

## Security Implementation

1. Password Storage:
   - BCrypt hashing
   - Salt generation
   - No plain text storage

2. JWT Configuration:
   - Token expiration
   - Signature verification
   - Role-based claims

3. Request Security:
   - CORS configuration
   - XSS protection
   - CSRF protection

## Lab Tasks

1. User Registration:
   - Implement validation rules
   - Add duplicate check
   - Create error responses
   - Test with valid/invalid data

2. User Login:
   - Implement authentication
   - Generate JWT token
   - Handle invalid credentials
   - Test token generation

3. Token Validation:
   - Implement token verification
   - Add expiration check
   - Create protected endpoints
   - Test with valid/invalid tokens

4. Error Handling:
   - Implement global error handler
   - Create custom exceptions
   - Add validation messages
   - Test error scenarios

## Testing Strategy

1. Unit Testing:
   - Service layer logic
   - JWT utility methods
   - Password encryption
   - Validation rules

2. Integration Testing:
   - API endpoints
   - Database operations
   - Authentication flow
   - Error handling

3. Security Testing:
   - Token validation
   - Password hashing
   - Authorization checks
   - Input validation

## Common Issues and Solutions

1. Token Issues:
   - Check token expiration time
   - Verify signature key
   - Validate token format
   - Check authorization header

2. Authentication Problems:
   - Verify credentials
   - Check password encryption
   - Validate user existence
   - Check role assignments

3. CORS Issues:
   - Configure allowed origins
   - Set allowed methods
   - Add required headers
   - Test with frontend

## Additional Challenges

1. Add password reset functionality
2. Implement email verification
3. Add OAuth2 integration
4. Create role-based access
5. Add session management
6. Implement rate limiting

## Troubleshooting Tips

1. Authentication Fails:
   - Check password hashing
   - Verify user exists
   - Validate credentials
   - Check token validity

2. Token Validation Fails:
   - Check expiration time
   - Verify signature
   - Validate token format
   - Check header format

3. Database Issues:
   - Check MongoDB connection
   - Verify indexes
   - Check unique constraints
   - Monitor performance

## Resources

1. Documentation:
   - [Spring Security](https://docs.spring.io/spring-security/reference/index.html)
   - [JWT](https://jwt.io/)
   - [MongoDB](https://docs.mongodb.com/)

2. Testing Tools:
   - [Postman](https://www.postman.com/)
   - [JUnit](https://junit.org/)

3. Security Resources:
   - [OWASP](https://owasp.org/)
   - [Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)