package com.exam.student.service;

import com.exam.student.model.Student;
import com.exam.student.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

// =============================================================================
// TODO: Complete this service class
// =============================================================================
//
// STEP 1: Add the @Service annotation to this class
//         - This tells Spring to register this class as a Spring bean
//         - The annotation is: @Service  (from org.springframework.stereotype.Service)
//
// STEP 2: The StudentRepository is already injected with @Autowired below.
//         Make sure your repository interface extends MongoRepository first!
//
// STEP 3: Implement all the methods below using the repository.
//         Each method has hints showing which repository method to call.
//
// =============================================================================

public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    // -------------------------------------------------------------------------
    // TODO: Create a new student
    // Hint: Use studentRepository.save(student)
    // The save() method is provided by MongoRepository
    // It inserts a new document if no ID exists, or updates if ID exists
    // -------------------------------------------------------------------------
    public Student createStudent(Student student) {
        // TODO: save the student and return the saved object
        return null;
    }

    // -------------------------------------------------------------------------
    // TODO: Get all students
    // Hint: Use studentRepository.findAll()
    // The findAll() method is provided by MongoRepository
    // It returns a List<Student> containing all documents in the collection
    // -------------------------------------------------------------------------
    public List<Student> getAllStudents() {
        // TODO: return all students
        return null;
    }

    // -------------------------------------------------------------------------
    // TODO: Get a student by ID
    // Hint: Use studentRepository.findById(id)
    // The findById() method returns Optional<Student>, not Student directly
    // Optional may or may not contain a value — use .orElse(null) or check .isPresent()
    // -------------------------------------------------------------------------
    public Optional<Student> getStudentById(String id) {
        // TODO: find and return the student by ID
        return Optional.empty();
    }

    // -------------------------------------------------------------------------
    // TODO: Update a student by ID
    // Hint:
    //   1. First, find the existing student using studentRepository.findById(id)
    //   2. If found (use .isPresent()), get it with .get()
    //   3. Update its fields using setter methods:
    //      existingStudent.setName(student.getName());
    //      existingStudent.setRollNumber(student.getRollNumber());
    //      existingStudent.setDepartment(student.getDepartment());
    //      existingStudent.setEmail(student.getEmail());
    //   4. Save the updated student using studentRepository.save(existingStudent)
    //   5. Return the saved student
    //   6. If not found, return null
    // -------------------------------------------------------------------------
    public Student updateStudent(String id, Student student) {
        // TODO: find existing student, update fields, save, and return
        return null;
    }

    // -------------------------------------------------------------------------
    // TODO: Delete a student by ID
    // Hint: Use studentRepository.deleteById(id)
    // The deleteById() method is provided by MongoRepository
    // It removes the document with the given ID from the collection
    // -------------------------------------------------------------------------
    public void deleteStudent(String id) {
        // TODO: delete the student by ID
    }

    // -------------------------------------------------------------------------
    // TODO: Search students by name (partial, case-insensitive)
    // Hint: Use studentRepository.searchByName(name)
    // This calls the custom @Query method you defined in the repository
    // -------------------------------------------------------------------------
    public List<Student> searchByName(String name) {
        // TODO: call the repository search method and return results
        return null;
    }

    // -------------------------------------------------------------------------
    // TODO: Get students by department
    // Hint: Use studentRepository.findByDepartment(department)
    // This calls the derived query method you defined in the repository
    // -------------------------------------------------------------------------
    public List<Student> getByDepartment(String department) {
        // TODO: call the repository method and return results
        return null;
    }
}
