package com.demo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends MongoRepository<Student, String> {

    // Spring Data auto-generates query from method name
    List<Student> findByDepartment(String department);

    // Find by name (case-insensitive contains)
    List<Student> findByNameContainingIgnoreCase(String name);

    // Find by roll number
    Student findByRollNumber(String rollNumber);
}
