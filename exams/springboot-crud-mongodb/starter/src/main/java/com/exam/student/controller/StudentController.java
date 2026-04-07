package com.exam.student.controller;

import com.exam.student.model.Student;
import com.exam.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

// =============================================================================
// TODO: Complete this REST controller
// =============================================================================
//
// STEP 1: Add the following annotations to this class:
//         @RestController — marks this class as a REST controller (returns JSON, not views)
//         @RequestMapping("/api/students") — sets the base URL path for all endpoints
//
// STEP 2: The StudentService is already injected with @Autowired below.
//
// STEP 3: Implement each endpoint method below.
//         Each method has hints showing:
//         - Which annotation to use (@GetMapping, @PostMapping, etc.)
//         - What parameters to accept (@RequestBody, @PathVariable, @RequestParam)
//         - How to build the ResponseEntity with the correct HTTP status code
//
// ResponseEntity Quick Reference:
//   - ResponseEntity.ok(body)                          → 200 OK with body
//   - ResponseEntity.status(HttpStatus.CREATED).body(obj) → 201 Created with body
//   - ResponseEntity.noContent().build()               → 204 No Content (no body)
//   - ResponseEntity.notFound().build()                → 404 Not Found (no body)
//
// =============================================================================

public class StudentController {

    @Autowired
    private StudentService studentService;

    // =========================================================================
    // ENDPOINT 1: Create a new student
    // =========================================================================
    // HTTP Method: POST
    // URL: /api/students
    // Request: JSON body with student data
    // Response: 201 Created with the saved student object
    //
    // TODO:
    //   1. Add @PostMapping annotation (no path needed, uses class-level base path)
    //   2. Add @RequestBody annotation to the student parameter
    //      - @RequestBody tells Spring to parse the JSON request body into a Student object
    //   3. Call studentService.createStudent(student)
    //   4. Return ResponseEntity with status 201 CREATED and the saved student as body
    //      - Use: return ResponseEntity.status(HttpStatus.CREATED).body(savedStudent);
    // =========================================================================
    public ResponseEntity<Student> createStudent(Student student) {
        // TODO: implement this method
        return null;
    }

    // =========================================================================
    // ENDPOINT 2: Get all students
    // =========================================================================
    // HTTP Method: GET
    // URL: /api/students
    // Request: none
    // Response: 200 OK with list of all students
    //
    // TODO:
    //   1. Add @GetMapping annotation (no path needed)
    //   2. Call studentService.getAllStudents()
    //   3. Return ResponseEntity with status 200 OK and the list as body
    //      - Use: return ResponseEntity.ok(students);
    // =========================================================================
    public ResponseEntity<List<Student>> getAllStudents() {
        // TODO: implement this method
        return null;
    }

    // =========================================================================
    // ENDPOINT 3: Get a student by ID
    // =========================================================================
    // HTTP Method: GET
    // URL: /api/students/{id}
    // Request: id as path variable
    // Response: 200 OK with student, or 404 Not Found
    //
    // TODO:
    //   1. Add @GetMapping("/{id}") annotation
    //      - The {id} in the path becomes a variable
    //   2. Add @PathVariable annotation to the id parameter
    //      - @PathVariable extracts the value from the URL path
    //   3. Call studentService.getStudentById(id) — returns Optional<Student>
    //   4. If student is present (use .isPresent()), return 200 OK with student (.get())
    //      - Use: return ResponseEntity.ok(optionalStudent.get());
    //   5. If not present, return 404 Not Found
    //      - Use: return ResponseEntity.notFound().build();
    // =========================================================================
    public ResponseEntity<Student> getStudentById(String id) {
        // TODO: implement this method
        return null;
    }

    // =========================================================================
    // ENDPOINT 4: Update a student
    // =========================================================================
    // HTTP Method: PUT
    // URL: /api/students/{id}
    // Request: id as path variable, JSON body with updated student data
    // Response: 200 OK with updated student, or 404 Not Found
    //
    // TODO:
    //   1. Add @PutMapping("/{id}") annotation
    //   2. Add @PathVariable to the id parameter
    //   3. Add @RequestBody to the student parameter
    //   4. Call studentService.updateStudent(id, student)
    //   5. If the returned student is not null, return 200 OK with the updated student
    //      - Use: return ResponseEntity.ok(updatedStudent);
    //   6. If null (student not found), return 404 Not Found
    //      - Use: return ResponseEntity.notFound().build();
    // =========================================================================
    public ResponseEntity<Student> updateStudent(String id, Student student) {
        // TODO: implement this method
        return null;
    }

    // =========================================================================
    // ENDPOINT 5: Delete a student
    // =========================================================================
    // HTTP Method: DELETE
    // URL: /api/students/{id}
    // Request: id as path variable
    // Response: 204 No Content
    //
    // TODO:
    //   1. Add @DeleteMapping("/{id}") annotation
    //   2. Add @PathVariable to the id parameter
    //   3. Call studentService.deleteStudent(id)
    //   4. Return 204 No Content (no response body)
    //      - Use: return ResponseEntity.noContent().build();
    // =========================================================================
    public ResponseEntity<Void> deleteStudent(String id) {
        // TODO: implement this method
        return null;
    }

    // =========================================================================
    // ENDPOINT 6: Search students by name
    // =========================================================================
    // HTTP Method: GET
    // URL: /api/students/search?name=xxx
    // Request: name as query parameter
    // Response: 200 OK with list of matching students
    //
    // TODO:
    //   1. Add @GetMapping("/search") annotation
    //   2. Add @RequestParam annotation to the name parameter
    //      - @RequestParam extracts the value from the query string (?name=xxx)
    //   3. Call studentService.searchByName(name)
    //   4. Return 200 OK with the list
    //      - Use: return ResponseEntity.ok(students);
    // =========================================================================
    public ResponseEntity<List<Student>> searchByName(String name) {
        // TODO: implement this method
        return null;
    }

    // =========================================================================
    // ENDPOINT 7: Get students by department
    // =========================================================================
    // HTTP Method: GET
    // URL: /api/students/department/{dept}
    // Request: dept as path variable
    // Response: 200 OK with list of students in that department
    //
    // TODO:
    //   1. Add @GetMapping("/department/{dept}") annotation
    //   2. Add @PathVariable annotation to the dept parameter
    //   3. Call studentService.getByDepartment(dept)
    //   4. Return 200 OK with the list
    //      - Use: return ResponseEntity.ok(students);
    // =========================================================================
    public ResponseEntity<List<Student>> getByDepartment(String dept) {
        // TODO: implement this method
        return null;
    }
}
