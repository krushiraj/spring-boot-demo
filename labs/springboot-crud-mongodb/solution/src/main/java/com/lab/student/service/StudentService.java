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
    public List<Student> getAllStudents() { return repo.findAll(); }
    public Optional<Student> getStudentById(String id) { return repo.findById(id); }
    public Student createStudent(Student student) { return repo.save(student); }
    public Student updateStudent(String id, Student s) {
        Student existing = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));
        existing.setName(s.getName());
        existing.setRollNumber(s.getRollNumber());
        existing.setDepartment(s.getDepartment());
        existing.setEmail(s.getEmail());
        return repo.save(existing);
    }
    public void deleteStudent(String id) { repo.deleteById(id); }
    public List<Student> searchByName(String name) { return repo.findByNameContainingIgnoreCase(name); }
    public List<Student> filterByDepartment(String dept) { return repo.findByDepartment(dept); }
}
