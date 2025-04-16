# Spring Boot Login and Registration System with Thymeleaf

This project demonstrates a server-side rendered authentication system using Spring Boot, Spring Security, Thymeleaf, and MongoDB.

## Prerequisites

1. Java 1.8 or higher
2. MongoDB installed and running on default port (27017)
3. Maven installed
4. Modern web browser

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
├── service/
│   ├── UserService.java        # User management service
│   └── CustomUserDetailsService.java # Security user details
└── validator/
    └── UserValidator.java      # Custom validation rules
```

## Key Features

1. User Registration with validation
2. Secure Login with Spring Security
3. Remember-me functionality
4. Password encryption
5. MongoDB persistence
6. Custom error pages
7. Responsive UI with Thymeleaf
8. Session management

## User Interface Pages

### 1. Login Page (/login)
- Username/email input
- Password input
- Remember me checkbox
- Registration link
- Error message display
- CSRF protection

### 2. Registration Page (/register)
- Username input
- Email input
- Password input
- Validation messages
- Login page link
- Success/error alerts

### 3. Home Page (/home)
- Welcome message
- User information
- Logout button
- Protected access

## Data Validation Rules

1. Username:
   - Required
   - 3-20 characters
   - Alphanumeric only
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
   - Maximum 100 characters

## Security Implementation

1. Authentication:
   - Form-based login
   - Remember-me cookies
   - Session management
   - Password encryption

2. Authorization:
   - URL-based security
   - Role-based access
   - Session timeout
   - CSRF protection

3. Password Security:
   - BCrypt hashing
   - Salt generation
   - No plain text storage

## Lab Tasks

1. User Interface:
   - Style login form
   - Create registration form
   - Add validation messages
   - Implement responsive design

2. Authentication:
   - Configure security
   - Implement login logic
   - Add remember-me
   - Handle session management

3. Registration:
   - Implement validation
   - Add duplicate checking
   - Create success messages
   - Handle error cases

4. Error Handling:
   - Create error pages
   - Add validation messages
   - Handle exceptions
   - Display user feedback

## Testing Requirements

1. Form Validation:
   - Empty fields
   - Invalid formats
   - Duplicate entries
   - Password strength

2. Authentication:
   - Valid credentials
   - Invalid credentials
   - Remember-me function
   - Session timeout

3. Security:
   - URL protection
   - CSRF tokens
   - Password encryption
   - Session handling

## Common Issues and Solutions

1. Authentication Problems:
   - Check credentials
   - Verify password encoding
   - Check user status
   - Review security config

2. Registration Issues:
   - Validate input data
   - Check unique constraints
   - Verify email format
   - Test password rules

3. Session Problems:
   - Check timeout settings
   - Verify cookie config
   - Test remember-me
   - Monitor session state

## Additional Challenges

1. Add password reset
2. Implement email verification
3. Create admin dashboard
4. Add user profiles
5. Implement account lockout
6. Add social login

## Best Practices

1. Security:
   - Use HTTPS
   - Implement CSRF
   - Encode passwords
   - Validate input

2. User Experience:
   - Clear error messages
   - Responsive design
   - Loading indicators
   - Success feedback

3. Code Quality:
   - Follow conventions
   - Add comments
   - Write tests
   - Handle errors

## Resources

1. Documentation:
   - [Spring Security](https://docs.spring.io/spring-security/reference/index.html)
   - [Thymeleaf](https://www.thymeleaf.org/documentation.html)
   - [MongoDB](https://docs.mongodb.com/)

2. UI Resources:
   - [Bootstrap](https://getbootstrap.com/)
   - [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
   - [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

3. Security Guidelines:
   - [OWASP Top 10](https://owasp.org/www-project-top-ten/)
   - [Password Storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
   - [Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)