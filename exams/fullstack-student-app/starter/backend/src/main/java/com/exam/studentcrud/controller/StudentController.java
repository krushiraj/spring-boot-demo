package com.exam.studentcrud.controller;

import com.exam.studentcrud.model.Student;
import com.exam.studentcrud.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    // GET /api/students — Get all students
    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }

    // GET /api/students/{id} — Get student by ID
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable String id) {
        return studentService.getStudentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST /api/students — Create a new student
    @PostMapping
    public ResponseEntity<Student> createStudent(@Valid @RequestBody Student student) {
        Student createdStudent = studentService.createStudent(student);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdStudent);
    }

    // PUT /api/students/{id} — Update a student
    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable String id,
                                                  @Valid @RequestBody Student student) {
        Student updatedStudent = studentService.updateStudent(id, student);
        return ResponseEntity.ok(updatedStudent);
    }

    // DELETE /api/students/{id} — Delete a student
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable String id) {
        studentService.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }

    // GET /api/students/search?name={name} — Search students by name
    @GetMapping("/search")
    public ResponseEntity<List<Student>> searchStudents(@RequestParam String name) {
        List<Student> students = studentService.searchByName(name);
        return ResponseEntity.ok(students);
    }

    // GET /api/students/department/{department} — Filter by department
    @GetMapping("/department/{department}")
    public ResponseEntity<List<Student>> getByDepartment(@PathVariable String department) {
        List<Student> students = studentService.getByDepartment(department);
        return ResponseEntity.ok(students);
    }
}
