package com.exam.studentcrud.repository;

import com.exam.studentcrud.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends MongoRepository<Student, String> {

    List<Student> findByDepartment(String department);

    @Query("{ 'name': { $regex: ?0, $options: 'i' } }")
    List<Student> searchByName(String name);

    boolean existsByRollNumber(String rollNumber);

    boolean existsByEmail(String email);
}
