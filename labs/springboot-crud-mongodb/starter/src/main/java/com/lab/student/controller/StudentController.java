package com.lab.student.controller;

import com.lab.student.model.Student;
import com.lab.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    /**
     * GET /api/students - Get all students
     * @return list of all students
     */
    @GetMapping
    public List<Student> getAllStudents() {
        // TODO: Return all students using the service
        return java.util.Collections.emptyList();
    }

    /**
     * GET /api/students/{id} - Get a student by ID
     * @param id the student ID
     * @return ResponseEntity with the student or 404
     */
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable String id) {
        // TODO: Find student by ID and return appropriate response
        // Hint: Use studentService.getStudentById(id)
        // Hint: Use .map(student -> ResponseEntity.ok(student))
        //       .orElse(ResponseEntity.notFound().build())
        return ResponseEntity.notFound().build();
    }

    /**
     * POST /api/students - Create a new student
     * @param student the student data from request body
     * @return the created student
     */
    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        // TODO: Create and return the student using the service
        return null;
    }

    /**
     * PUT /api/students/{id} - Update an existing student
     * @param id the student ID to update
     * @param studentDetails the new student data
     * @return ResponseEntity with updated student or error
     */
    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable String id, @RequestBody Student studentDetails) {
        // TODO: Update the student and return appropriate response
        // Hint: Use try-catch around studentService.updateStudent(id, studentDetails)
        // Hint: Return ResponseEntity.ok() on success, ResponseEntity.notFound() on failure
        return ResponseEntity.notFound().build();
    }

    /**
     * DELETE /api/students/{id} - Delete a student
     * @param id the student ID to delete
     * @return ResponseEntity with no content
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable String id) {
        // TODO: Delete the student and return 204 No Content
        // Hint: Use studentService.deleteStudent(id)
        // Hint: Return ResponseEntity.noContent().build()
        return ResponseEntity.noContent().build();
    }

    /**
     * GET /api/students/search?name=xxx - Search students by name
     * @param name the name to search for
     * @return list of matching students
     */
    @GetMapping("/search")
    public List<Student> searchByName(@RequestParam String name) {
        // TODO: Search and return students by name
        return java.util.Collections.emptyList();
    }

    /**
     * GET /api/students/department/{department} - Filter by department
     * @param department the department to filter by
     * @return list of students in the department
     */
    @GetMapping("/department/{department}")
    public List<Student> filterByDepartment(@PathVariable String department) {
        // TODO: Filter and return students by department
        return java.util.Collections.emptyList();
    }
}
