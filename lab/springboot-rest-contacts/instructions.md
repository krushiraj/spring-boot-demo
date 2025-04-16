# Spring Boot REST Contacts API

This project demonstrates a RESTful API for contact management using Spring Boot and MongoDB.

## Prerequisites

1. Java 1.8 installed
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
└── service/
    └── ContactService.java     # Business logic layer
```

## Key Features

1. Create new contacts
2. Retrieve all contacts
3. Get contact by ID
4. Update existing contacts
5. Delete contacts
6. Input validation
7. Duplicate email/mobile check
8. CORS configuration for frontend access

## REST API Endpoints

### 1. Get All Contacts
- **URL**: GET /api/contacts
- **Response**: List of contacts
  ```json
  [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com",
      "mobile": "1234567890"
    }
  ]
  ```

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
- **Response**: Created contact with ID

### 3. Get Contact by ID
- **URL**: GET /api/contacts/{id}
- **Response**: Contact details or 404 if not found

### 4. Update Contact
- **URL**: PUT /api/contacts/{id}
- **Body**: Same as create contact
- **Response**: Updated contact details

### 5. Delete Contact
- **URL**: DELETE /api/contacts/{id}
- **Response**: 200 OK if deleted, 400 if not found

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

4. Test the endpoints using Postman

## Understanding the Code

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
    
    @Pattern(regexp = "^\\d{10}$")
    private String mobile;
}
```

### Data Validation Rules

1. Name:
   - Cannot be empty

2. Email:
   - Must be valid email format
   - Must be unique

3. Mobile:
   - Must be exactly 10 digits
   - Must be unique

## Lab Tasks

1. Test GET all contacts:
   - Initially empty list
   - Add contacts and verify list grows

2. Test creating contacts:
   - Create with valid data
   - Try invalid data formats
   - Try duplicate email/mobile

3. Test updating contacts:
   - Update existing contact
   - Try updating non-existent contact
   - Try updating with duplicate data

4. Test deleting contacts:
   - Delete existing contact
   - Try deleting non-existent contact

## Testing with Postman

1. **Get All Contacts**
   - Create GET request to http://localhost:8080/api/contacts
   - No request body needed
   - Verify response format

2. **Create Contact**
   - Create POST request to http://localhost:8080/api/contacts
   - Set Content-Type: application/json
   - Add contact data in request body
   - Verify validation errors

3. **Update Contact**
   - Create PUT request to http://localhost:8080/api/contacts/{id}
   - Add complete contact data in body
   - Try partial updates
   - Verify error handling

4. **Delete Contact**
   - Create DELETE request to http://localhost:8080/api/contacts/{id}
   - No request body needed
   - Verify response codes

## Common Issues and Solutions

1. **MongoDB Connection Issues**
   - Check if MongoDB is running
   - Verify connection settings in application.properties
   - Check database name

2. **Validation Errors**
   - Check error response format
   - Verify input data format
   - Check unique constraints

3. **CORS Issues**
   - Verify @CrossOrigin annotation
   - Check allowed origins
   - Test with frontend application

## Troubleshooting Tips

1. **Contact Not Found**
   - Verify ID format
   - Check if contact exists
   - Monitor debug logs

2. **Duplicate Entry**
   - Check email uniqueness
   - Check mobile uniqueness
   - Verify error messages

3. **Invalid Data Format**
   - Check email format
   - Verify mobile number format
   - Review validation messages

## Additional Challenges

1. Add search by name or email
2. Implement pagination
3. Add sorting options
4. Implement bulk operations
5. Add contact categories

## Testing Strategy

1. **Unit Testing**:
   - Test validation rules
   - Test service layer logic
   - Test duplicate checking

2. **Integration Testing**:
   - Test MongoDB operations
   - Test REST endpoints
   - Test error scenarios

3. **API Testing**:
   - Use Postman collections
   - Test all CRUD operations
   - Verify error handling