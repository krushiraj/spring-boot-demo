package com.exam.studentcrud.service;

import com.exam.studentcrud.model.Student;
import com.exam.studentcrud.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<Student> getStudentById(String id) {
        return studentRepository.findById(id);
    }

    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student updateStudent(String id, Student studentDetails) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));

        student.setName(studentDetails.getName());
        student.setRollNumber(studentDetails.getRollNumber());
        student.setDepartment(studentDetails.getDepartment());
        student.setEmail(studentDetails.getEmail());

        return studentRepository.save(student);
    }

    public void deleteStudent(String id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
        studentRepository.delete(student);
    }

    public List<Student> searchByName(String name) {
        return studentRepository.searchByName(name);
    }

    public List<Student> getByDepartment(String department) {
        return studentRepository.findByDepartment(department);
    }
}
