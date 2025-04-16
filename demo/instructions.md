# Spring Boot Demo Project

This is a basic Spring Boot application that serves as a starting point for learning Spring Boot development.

## Prerequisites

1. Java 1.8 or higher
2. MongoDB installed and running on default port (27017)
3. Maven installed
4. Basic understanding of Spring Boot concepts

## Project Structure

```
demo/
├── src/
│   ├── main/
│   │   ├── java/           # Java source files
│   │   └── resources/      # Configuration files
│   └── test/
│       └── java/           # Test files
├── pom.xml                 # Maven configuration
└── README.md              # Project documentation
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   mvn install
   ```
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```
4. Access the application at http://localhost:8080

## Learning Objectives

1. Understanding Spring Boot basics
2. Working with MongoDB in Spring Boot
3. Creating RESTful endpoints
4. Implementing basic CRUD operations
5. Writing unit tests

## Development Tasks

1. Basic Setup:
   - Configure MongoDB connection
   - Set up basic project structure
   - Create initial endpoints

2. Feature Implementation:
   - Add model classes
   - Create repositories
   - Implement services
   - Add controllers

3. Testing:
   - Write unit tests
   - Create integration tests
   - Test database operations

## Resources

1. Spring Boot Documentation:
   - [Official Docs](https://docs.spring.io/spring-boot/docs/current/reference/html/)
   - [Guides](https://spring.io/guides)

2. MongoDB Resources:
   - [Spring Data MongoDB](https://docs.spring.io/spring-data/mongodb/docs/current/reference/html/)
   - [MongoDB Manual](https://docs.mongodb.com/manual/)