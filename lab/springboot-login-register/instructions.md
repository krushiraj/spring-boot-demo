# Spring Boot Login and Registration System with Thymeleaf

This project demonstrates a simple login and registration system using Spring Boot, Spring Security, MongoDB, and Thymeleaf.

## Prerequisites

1. Java 1.8 installed
2. MongoDB installed and running on default port (27017)
3. Maven installed

## Project Structure

```
src/main/java/com/lab/auth/
├── AuthApplication.java          # Main application class
├── config/
│   └── SecurityConfig.java      # Spring Security configuration
├── controller/
│   └── AuthController.java      # Handles login/register endpoints
├── model/
│   └── User.java               # User entity class
├── repository/
│   └── UserRepository.java     # MongoDB repository interface
└── service/
    ├── UserService.java        # User management service
    └── CustomUserDetailsService.java # Spring Security user details service
```

## Key Features

1. User Registration with validation
2. User Login with Spring Security
3. MongoDB integration for data persistence
4. Thymeleaf templates for views
5. Basic CSS styling

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

4. Access the application at: http://localhost:8080

## Understanding the Code

### Important Components:

1. **User.java**
   - Defines the user model with validation annotations
   - Fields: username, email, password

2. **SecurityConfig.java**
   - Configures Spring Security
   - Sets up authentication and authorization rules
   - Configures password encryption

3. **AuthController.java**
   - Handles HTTP requests for login and registration
   - Maps URLs to specific views
   - Processes form submissions

4. **UserService.java**
   - Contains business logic for user registration
   - Handles password encryption
   - Validates user data

### Views:

1. **login.html**
   - Login form with username and password fields
   - Shows error messages for invalid credentials
   - Links to registration page

2. **register.html**
   - Registration form with validation
   - Shows error messages for invalid inputs
   - Links back to login page

3. **home.html**
   - Simple welcome page after successful login
   - Logout button

## Common Issues and Solutions

1. **MongoDB Connection Issues**
   - Ensure MongoDB is running on port 27017
   - Check application.properties configuration

2. **Password Encryption**
   - Passwords are encrypted using BCrypt
   - Never store plain-text passwords

3. **Form Validation**
   - Check error messages in the web interface
   - Validation rules are defined in User.java

## Lab Tasks

1. Run the application and create a new user account
2. Try logging in with the created account
3. Test validation by entering invalid data
4. Examine the MongoDB database to see stored users
5. Try accessing protected pages without logging in
6. Test the logout functionality

## Additional Challenge

1. Add password confirmation field in registration
2. Implement "Remember Me" functionality
3. Add user profile page with update capability
4. Implement password reset functionality

## Code Explanations

### User Model
```java
@Document(collection = "users")
public class User {
    @Id
    private String id;
    // Username validation ensures 3-20 characters
    @NotBlank(message = "Username is required")
    private String username;
    // Email must be valid format
    @Email(message = "Please provide a valid email")
    private String email;
    // Password must be at least 6 characters
    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;
}
```

### Security Configuration
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    // Configures which URLs are public/private
    // Sets up login form configuration
    // Configures password encryption
}
```

### Authentication Controller
```java
@Controller
public class AuthController {
    // Handles GET /login - Shows login form
    // Handles GET /register - Shows registration form
    // Handles POST /register - Processes registration
    // Handles GET /home - Shows home page after login
}
```