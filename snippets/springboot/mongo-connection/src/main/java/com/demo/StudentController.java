package com.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // GET /api/students - get all students
    @GetMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // GET /api/students/{id} - get by id
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable String id) {
        return studentRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // GET /api/students/department/CSE - find by department
    @GetMapping("/department/{department}")
    public List<Student> getByDepartment(@PathVariable String department) {
        return studentRepository.findByDepartment(department);
    }

    // GET /api/students/search?name=john - search by name
    @GetMapping("/search")
    public List<Student> searchByName(@RequestParam String name) {
        return studentRepository.findByNameContainingIgnoreCase(name);
    }

    // POST /api/students - create a student
    @PostMapping
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Student saved = studentRepository.save(student);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // PUT /api/students/{id} - update a student
    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable String id, @RequestBody Student updated) {
        return studentRepository.findById(id)
                .map(existing -> {
                    existing.setName(updated.getName());
                    existing.setRollNumber(updated.getRollNumber());
                    existing.setDepartment(updated.getDepartment());
                    existing.setEmail(updated.getEmail());
                    return ResponseEntity.ok(studentRepository.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // DELETE /api/students/{id} - delete a student
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable String id) {
        if (studentRepository.existsById(id)) {
            studentRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
