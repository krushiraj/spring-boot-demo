# Spring Boot REST Contacts API

This project implements a RESTful API for contact management using Spring Boot and MongoDB, demonstrating CRUD operations, data validation, and proper error handling.

## Prerequisites

1. Java 1.8 or higher
2. MongoDB installed and running on default port (27017)
3. Maven installed
4. Postman or similar tool for testing REST APIs

## Project Structure

```
src/main/java/com/lab/contacts/
├── ContactsApplication.java      # Main application class
├── controller/
│   └── ContactController.java   # REST endpoints
├── model/
│   └── Contact.java            # Contact entity
├── repository/
│   └── ContactRepository.java  # MongoDB repository
├── service/
│   └── ContactService.java     # Business logic layer
└── exception/
    ├── GlobalExceptionHandler.java  # Error handling
    └── ContactException.java        # Custom exceptions
```

## Key Features

1. Complete CRUD operations for contacts
2. Input validation with custom messages
3. Unique email/mobile validation
4. Global exception handling
5. MongoDB integration
6. CORS configuration for frontend
7. Pagination and sorting
8. Search functionality

## REST API Endpoints

### 1. Get All Contacts
- **URL**: GET /api/contacts
- **Query Parameters**:
  - page (optional): Page number
  - size (optional): Items per page
  - sort (optional): Sort field
- **Success Response**: List of contacts
- **Error Response**: 500 Internal Server Error

### 2. Create Contact
- **URL**: POST /api/contacts
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "mobile": "1234567890"
  }
  ```
- **Success Response**: Created contact with ID
- **Error Response**: 400 Bad Request if validation fails

### 3. Get Contact by ID
- **URL**: GET /api/contacts/{id}
- **Success Response**: Contact details
- **Error Response**: 404 Not Found if contact doesn't exist

### 4. Update Contact
- **URL**: PUT /api/contacts/{id}
- **Body**: Same as create contact
- **Success Response**: Updated contact
- **Error Response**: 404 Not Found or 400 Bad Request

### 5. Delete Contact
- **URL**: DELETE /api/contacts/{id}
- **Success Response**: 200 OK
- **Error Response**: 404 Not Found

### 6. Search Contacts
- **URL**: GET /api/contacts/search
- **Query Parameters**:
  - query: Search term for name or email
- **Success Response**: List of matching contacts
- **Error Response**: 500 Internal Server Error

## Data Validation Rules

1. Name:
   - Required
   - 2-50 characters
   - No special characters except spaces

2. Email:
   - Required
   - Valid email format
   - Must be unique
   - Maximum 100 characters

3. Mobile:
   - Required
   - Exactly 10 digits
   - Must be unique
   - Numbers only

## Lab Tasks

1. CRUD Operations:
   - Implement basic CRUD endpoints
   - Add proper response status codes
   - Handle not found scenarios
   - Test all operations

2. Data Validation:
   - Add validation annotations
   - Implement custom validators
   - Create meaningful error messages
   - Test validation rules

3. Error Handling:
   - Create global exception handler
   - Add custom exceptions
   - Handle MongoDB exceptions
   - Test error scenarios

4. Advanced Features:
   - Implement pagination
   - Add sorting capability
   - Create search functionality
   - Add bulk operations

## Testing Strategy

1. Unit Testing:
   - Service layer methods
   - Validation logic
   - Custom exceptions
   - Repository queries

2. Integration Testing:
   - API endpoints
   - Database operations
   - Validation flow
   - Error handling

3. Performance Testing:
   - Large data sets
   - Concurrent requests
   - Database queries
   - Response times

## Common Issues and Solutions

1. MongoDB Connection:
   - Check MongoDB service status
   - Verify connection string
   - Check database name
   - Monitor connection pool

2. Validation Issues:
   - Review validation rules
   - Check error messages
   - Test edge cases
   - Verify unique constraints

3. Performance Problems:
   - Add proper indexes
   - Implement pagination
   - Optimize queries
   - Monitor response times

## Additional Challenges

1. Add contact categories/groups
2. Implement batch operations
3. Add contact notes/comments
4. Create contact import/export
5. Add contact sharing
6. Implement audit logging

## Troubleshooting Tips

1. Data Access Issues:
   - Check MongoDB logs
   - Verify indexes
   - Test queries manually
   - Check connection pool

2. Validation Problems:
   - Review request payload
   - Check validation rules
   - Test with edge cases
   - Verify error responses

3. Performance Issues:
   - Monitor query times
   - Check database load
   - Review indexes
   - Analyze request patterns

## Resources

1. Documentation:
   - [Spring Data MongoDB](https://docs.spring.io/spring-data/mongodb/docs/current/reference/html/)
   - [Spring REST](https://docs.spring.io/spring-framework/reference/web/webmvc-rest.html)
   - [MongoDB](https://docs.mongodb.com/)

2. Testing Tools:
   - [Postman](https://www.postman.com/)
   - [JMeter](https://jmeter.apache.org/)

3. Development Tools:
   - [MongoDB Compass](https://www.mongodb.com/products/compass)
   - [VS Code REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)