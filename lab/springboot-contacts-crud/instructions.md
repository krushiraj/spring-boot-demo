# Contact Management System with Spring Boot and MongoDB

This project demonstrates a simple CRUD (Create, Read, Update, Delete) application for managing contacts using Spring Boot, MongoDB, and Thymeleaf.

## Prerequisites

1. Java 1.8 installed
2. MongoDB installed and running on default port (27017)
3. Maven installed

## Project Structure

```
src/main/java/com/lab/contacts/
├── ContactsApplication.java      # Main application class
├── controller/
│   └── ContactController.java   # Handles HTTP requests
├── model/
│   └── Contact.java            # Contact entity class
├── repository/
│   └── ContactRepository.java  # MongoDB repository interface
└── service/
    └── ContactService.java     # Business logic layer
```

## Features

1. Create new contacts with name, email, and mobile number
2. View list of all contacts
3. Update existing contacts
4. Delete contacts
5. Input validation
6. Duplicate email/mobile check

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

4. Access the application at: http://localhost:8080/contacts

## Understanding the Code

### Important Components:

1. **Contact.java**
   - Defines the contact model with validation annotations
   - Uses @Document for MongoDB mapping
   - Implements validation for email and mobile number format

2. **ContactController.java**
   - Handles all CRUD operations
   - Maps URLs to specific actions
   - Manages form submission and validation

3. **ContactService.java**
   - Contains business logic
   - Handles duplicate checking
   - Manages CRUD operations with repository

### Data Validation Rules:

1. Name: Cannot be empty
2. Email: Must be valid email format
3. Mobile: Must be exactly 10 digits
4. Email and Mobile must be unique

## Lab Tasks

1. Run the application
2. Create a new contact with valid data
3. Try creating a contact with invalid data to test validation
4. Edit an existing contact
5. Delete a contact
6. Try creating a contact with duplicate email/mobile

## Common Issues and Solutions

1. **MongoDB Connection Issues**
   - Ensure MongoDB is running on port 27017
   - Check application.properties configuration
   - Verify database name in configuration

2. **Validation Errors**
   - Check error messages in the web interface
   - Make sure mobile number is exactly 10 digits
   - Ensure email format is valid

3. **Form Submission Issues**
   - Check for validation error messages
   - Ensure all required fields are filled
   - Verify unique email/mobile constraints

## Code Explanations

### Contact Model
```java
@Document(collection = "contacts")
public class Contact {
    @Id
    private String id;
    
    @NotBlank(message = "Name is required")
    private String name;
    
    @Email(message = "Please provide a valid email")
    private String email;
    
    @Pattern(regexp = "^\\d{10}$", message = "Mobile number must be 10 digits")
    private String mobile;
}
```

### Controller Methods
```java
@Controller
@RequestMapping("/contacts")
public class ContactController {
    // GET /contacts - List all contacts
    // POST /contacts - Create new contact
    // GET /contacts/edit/{id} - Show edit form
    // POST /contacts/update/{id} - Update contact
    // GET /contacts/delete/{id} - Delete contact
}
```

### Additional Challenges

1. Add search functionality by name or email
2. Implement pagination for the contacts list
3. Add sorting functionality
4. Implement bulk delete feature
5. Add contact categories or groups

## Testing the Application

1. Unit Testing:
   - Test validation rules
   - Test service layer logic
   - Test duplicate checking

2. Integration Testing:
   - Test MongoDB operations
   - Test controller endpoints
   - Test form submission

3. Manual Testing Checklist:
   - Create contact with valid data
   - Create contact with invalid data
   - Edit existing contact
   - Delete contact
   - Verify validation messages
   - Check duplicate entry handling