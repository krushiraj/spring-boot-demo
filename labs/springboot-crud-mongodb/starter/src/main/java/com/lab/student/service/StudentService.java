package com.lab.student.service;

import com.lab.student.model.Student;
import com.lab.student.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository repo;
    // TODO: List<Student> getAllStudents() — return repo.findAll()
    // TODO: Optional<Student> getStudentById(String id) — return repo.findById(id)
    // TODO: Student createStudent(Student student) — return repo.save(student)
    // TODO: Student updateStudent(String id, Student s) — findById, update fields with setters, save
    // TODO: void deleteStudent(String id) — repo.deleteById(id)
    // TODO: List<Student> searchByName(String name) — return repo.findByNameContainingIgnoreCase(name)
    // TODO: List<Student> filterByDepartment(String dept) — return repo.findByDepartment(dept)
}
