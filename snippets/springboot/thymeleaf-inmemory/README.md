# Thymeleaf In-Memory Demo

A Spring Boot web application that manages students using Thymeleaf for server-side rendering and an in-memory `ArrayList` for storage.

This project demonstrates the MVC pattern with Spring Boot **before** introducing a database.

## Requirements

- Java 8+
- Maven 3.6+

## How to Run

```bash
cd snippets/springboot/thymeleaf-inmemory
mvn spring-boot:run
```

Open your browser at: [http://localhost:8080/students](http://localhost:8080/students)

## Features

- List all students
- Add a new student (name, roll number, department, email)
- Edit an existing student
- Delete a student

## The "Data Disappearing" Demo

This project intentionally uses an in-memory `ArrayList` to store students. Try this:

1. Run the app with `mvn spring-boot:run`
2. Go to `http://localhost:8080/students`
3. Add 2-3 students using the form
4. Verify they appear in the list
5. Stop the server (`Ctrl+C` in terminal)
6. Start it again with `mvn spring-boot:run`
7. Go back to `http://localhost:8080/students`

**The students are gone.** All data was lost when the server stopped because `ArrayList` lives only in memory (RAM).

This is why real applications need a **database** for persistent storage. See the `05-database-connectivity.md` doc for the next step.

## Project Structure

```
src/main/java/com/demo/
  ThymeleafDemoApplication.java   -- Spring Boot entry point
  Student.java                    -- Plain POJO (no database annotations)
  StudentController.java          -- @Controller with in-memory ArrayList

src/main/resources/
  templates/
    students.html                 -- Student list page
    add-student.html              -- Add student form
    edit-student.html             -- Edit student form
  static/css/
    styles.css                    -- Page styling
  application.properties          -- Server config
```
