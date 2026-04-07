package com.lab.student.repository;

import com.lab.student.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StudentRepository extends MongoRepository<Student, String> {

    List<Student> findByNameContainingIgnoreCase(String name);

    List<Student> findByDepartment(String department);
}
