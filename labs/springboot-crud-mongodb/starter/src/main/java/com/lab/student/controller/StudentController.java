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
    // TODO: @GetMapping List<Student> getAll() — return service.getAllStudents()
    // TODO: @GetMapping("/{id}") ResponseEntity<Student> getById(@PathVariable String id) — use .map(ResponseEntity::ok).orElse(notFound)
    // TODO: @PostMapping Student create(@RequestBody Student student) — return service.createStudent(student)
    // TODO: @PutMapping("/{id}") Student update(@PathVariable String id, @RequestBody Student student) — return service.updateStudent(id, student)
    // TODO: @DeleteMapping("/{id}") ResponseEntity<Void> delete(@PathVariable String id) — deleteStudent, return noContent
    // TODO: @GetMapping("/search") List<Student> searchByName(@RequestParam String name) — return service.searchByName(name)
    // TODO: @GetMapping("/department/{department}") List<Student> filterByDept(@PathVariable String department)
}
