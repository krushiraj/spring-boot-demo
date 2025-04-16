# Spring Boot and React Lab Guide

## Overview
This lab consists of multiple interconnected projects demonstrating a full-stack application with authentication and contact management features.

## Project Structure
1. Backend Projects:
   - `springboot-rest-auth`: JWT-based authentication API
   - `springboot-rest-contacts`: Contact management REST API
   - `springboot-login-register`: Server-side rendered auth system
   - `springboot-contacts-crud`: Server-side rendered contacts system

2. Frontend Projects:
   - `react-auth-client`: Authentication frontend
   - `react-contacts-client`: Contacts management frontend

## For Instructors

### Exam Setup
1. Pre-exam preparation:
   - Ensure MongoDB is installed and running on port 27017
   - Verify all dependencies in pom.xml files
   - Test all backend services independently
   - Verify React development environment

2. What to provide to students:
   - Base project structure with MongoDB configuration
   - Basic model classes without validation
   - Empty controller templates
   - Frontend UI components without implementation
   - Test cases templates

3. What students should implement:
   - Data validation in models
   - Controller logic for CRUD operations
   - JWT authentication implementation
   - React components state management
   - API integration in frontend
   - Error handling and validation

### Grading Guidelines
1. Backend (50%):
   - Proper validation implementation (10%)
   - Secure authentication flow (15%)
   - CRUD operations functionality (15%)
   - Error handling (10%)

2. Frontend (50%):
   - UI implementation (15%)
   - State management (10%)
   - API integration (15%)
   - Error handling & validation (10%)

## For Students

### Prerequisites
1. Required Software:
   - Java 1.8 or higher
   - MongoDB (running on port 27017)
   - Node.js and npm
   - Maven
   - VS Code or preferred IDE

2. Knowledge Requirements:
   - Basic Java and Spring Boot
   - React fundamentals
   - REST API concepts
   - MongoDB basics

### Lab Tasks Breakdown

1. Authentication System (40%):
   - Implement user registration with validation
   - Create secure login system
   - Add JWT token generation and validation
   - Integrate frontend with auth API

2. Contact Management (40%):
   - Implement CRUD operations for contacts
   - Add input validation
   - Create frontend components
   - Integrate with backend API

3. Additional Features (20%):
   - Add search functionality
   - Implement pagination
   - Add sorting capabilities
   - Create bulk operations

### Testing Requirements
1. Backend Testing:
   - Unit tests for services
   - Integration tests for controllers
   - Validation test cases
   - Security test scenarios

2. Frontend Testing:
   - Component rendering tests
   - User interaction tests
   - API integration tests
   - Error handling tests

## Common Issues and Solutions
1. MongoDB Connection:
   - Verify MongoDB is running
   - Check connection string
   - Ensure correct database name

2. JWT Authentication:
   - Token expiration issues
   - CORS configuration
   - Authorization header format

3. React Development:
   - Node modules installation
   - Development server configuration
   - API endpoint configuration

## Additional Resources
1. Documentation:
   - Spring Boot: https://docs.spring.io/spring-boot/docs/current/reference/html/
   - React: https://react.dev/
   - MongoDB: https://docs.mongodb.com/

2. Testing Tools:
   - Postman for API testing
   - Jest for React testing
   - JUnit for Java testing