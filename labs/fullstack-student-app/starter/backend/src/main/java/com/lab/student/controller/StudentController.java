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
    private StudentService service;
    @GetMapping
    public List<Student> getAll() { return service.getAllStudents(); }
    @GetMapping("/{id}")
    public ResponseEntity<Student> getById(@PathVariable String id) {
        return service.getStudentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @PostMapping
    public Student create(@RequestBody Student student) { return service.createStudent(student); }
    @PutMapping("/{id}")
    public Student update(@PathVariable String id, @RequestBody Student student) {
        return service.updateStudent(id, student);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        service.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/search")
    public List<Student> searchByName(@RequestParam String name) { return service.searchByName(name); }
    @GetMapping("/department/{department}")
    public List<Student> filterByDept(@PathVariable String department) { return service.filterByDepartment(department); }
}
