# Contact Management System with Spring Boot and MongoDB

This project demonstrates a server-side rendered CRUD application for managing contacts using Spring Boot, MongoDB, and Thymeleaf templates.

## Prerequisites

1. Java 1.8 or higher
2. MongoDB installed and running on default port (27017)
3. Maven installed
4. Modern web browser

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
├── service/
│   └── ContactService.java     # Business logic layer
└── validator/
    └── ContactValidator.java   # Custom validation rules
```

## Key Features

1. Create new contacts
2. View list of all contacts
3. Update existing contacts
4. Delete contacts
5. Input validation
6. Duplicate checking
7. Responsive UI
8. Error handling

## User Interface Pages

### 1. Contact List Page (/contacts)
- Display all contacts in a table
- Add new contact button
- Edit/Delete actions
- Sorting and filtering
- Pagination controls

### 2. Add/Edit Contact Form
- Name input field
- Email input field
- Mobile number input
- Validation messages
- Submit/Cancel buttons

### 3. Error Pages
- Not found page
- Error messages
- Return to list link

## Data Validation Rules

1. Name:
   - Required
   - 2-50 characters
   - No special characters except spaces
   - Server-side validation

2. Email:
   - Required
   - Valid email format
   - Must be unique
   - Maximum 100 characters
   - Client and server validation

3. Mobile:
   - Required
   - Exactly 10 digits
   - Must be unique
   - Numbers only
   - Pattern validation

## Lab Tasks

1. Basic CRUD:
   - Create contact list view
   - Implement add contact form
   - Add edit functionality
   - Create delete confirmation

2. Validation:
   - Add input constraints
   - Implement unique checks
   - Create error messages
   - Add client validation

3. User Interface:
   - Style contact list
   - Format input forms
   - Add responsive design
   - Create error pages

4. Error Handling:
   - Add validation messages
   - Create error pages
   - Handle exceptions
   - Show user feedback

## Testing Strategy

1. Unit Testing:
   - Service methods
   - Validation rules
   - Repository queries
   - Error handling

2. Integration Testing:
   - Controller endpoints
   - Form submission
   - Database operations
   - View rendering

3. UI Testing:
   - Form validation
   - CRUD operations
   - Responsive design
   - Error messages

## Common Issues and Solutions

1. MongoDB Connection:
   - Check MongoDB service
   - Verify connection string
   - Check database name
   - Test connection

2. Validation Issues:
   - Review constraints
   - Check error messages
   - Test edge cases
   - Verify unique rules

3. UI Problems:
   - Check templates
   - Verify CSS paths
   - Test responsiveness
   - Debug JavaScript

## Additional Challenges

1. Add contact search
2. Implement pagination
3. Add sorting options
4. Create contact groups
5. Add contact import/export
6. Implement contact sharing

## Best Practices

1. Code Organization:
   - Follow MVC pattern
   - Use service layer
   - Implement validation
   - Handle errors

2. User Experience:
   - Clear messages
   - Responsive design
   - Fast loading
   - Easy navigation

3. Data Management:
   - Validate input
   - Check duplicates
   - Secure data
   - Optimize queries

## Testing Requirements

1. Form Testing:
   - Required fields
   - Invalid formats
   - Unique constraints
   - Error messages

2. CRUD Operations:
   - Create contact
   - Read contact list
   - Update contact
   - Delete contact

3. Error Cases:
   - Invalid input
   - Duplicate data
   - Not found
   - Server errors

## Resources

1. Documentation:
   - [Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/html/)
   - [Thymeleaf](https://www.thymeleaf.org/documentation.html)
   - [MongoDB](https://docs.mongodb.com/)

2. UI Resources:
   - [Bootstrap](https://getbootstrap.com/)
   - [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
   - [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

3. Development Tools:
   - [MongoDB Compass](https://www.mongodb.com/products/compass)
   - [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.devtools)
   - [VS Code Spring Boot Extension](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-boot-dashboard)