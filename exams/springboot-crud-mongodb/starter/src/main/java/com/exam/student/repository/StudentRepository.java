package com.exam.student.repository;

import com.exam.student.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

// =============================================================================
// TODO: Complete this repository interface
// =============================================================================
//
// STEP 1: Make this interface extend MongoRepository<Student, String>
//         - MongoRepository provides built-in methods:
//           save(), findAll(), findById(), deleteById(), existsById()
//         - The first generic type is the entity class (Student)
//         - The second generic type is the ID type (String)
//
// STEP 2: Add a method to find students by department
//         - Spring Data automatically creates the query from the method name
//         - Method signature: List<Student> findByDepartment(String department);
//         - This will generate: db.students.find({ "department": department })
//
// STEP 3: Add a method to search students by name (case-insensitive partial match)
//         - Use the @Query annotation to write a custom MongoDB query
//         - Annotation: @Query("{ 'name': { $regex: ?0, $options: 'i' } }")
//         - ?0 refers to the first method parameter
//         - $regex does pattern matching, $options: 'i' makes it case-insensitive
//         - Method signature: List<Student> searchByName(String name);
//
// =============================================================================

public interface StudentRepository {

    // TODO: Add findByDepartment method here


    // TODO: Add searchByName method with @Query annotation here

}
