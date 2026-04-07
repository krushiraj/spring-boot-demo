package com.lab.student.repository;

import com.lab.student.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StudentRepository extends MongoRepository<Student, String> {

    // TODO: Add a method to search students by name (case-insensitive, partial match)
    // Hint: Use Spring Data query method naming: findByNameContainingIgnoreCase(String name)

    // TODO: Add a method to find students by department
    // Hint: Use Spring Data query method naming: findByDepartment(String department)
}
