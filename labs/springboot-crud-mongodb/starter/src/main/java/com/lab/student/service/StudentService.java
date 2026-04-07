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
    private StudentRepository studentRepository;

    /**
     * Get all students from the database.
     * @return list of all students
     */
    public List<Student> getAllStudents() {
        // TODO: Return all students from the repository
        // Hint: Use studentRepository.findAll()
        return java.util.Collections.emptyList();
    }

    /**
     * Get a student by their ID.
     * @param id the student ID
     * @return Optional containing the student if found
     */
    public Optional<Student> getStudentById(String id) {
        // TODO: Find and return a student by ID
        // Hint: Use studentRepository.findById(id)
        return Optional.empty();
    }

    /**
     * Create a new student.
     * @param student the student to create
     * @return the saved student
     */
    public Student createStudent(Student student) {
        // TODO: Save the student to the database
        // Hint: Use studentRepository.save(student)
        return null;
    }

    /**
     * Update an existing student.
     * - Find the student by ID
     * - Update name, rollNumber, department, and email
     * - Save and return the updated student
     *
     * @param id the student ID to update
     * @param studentDetails the new student data
     * @return the updated student
     * @throws RuntimeException if student not found
     */
    public Student updateStudent(String id, Student studentDetails) {
        // TODO: Implement update logic
        // Hint: Find the student by ID using findById(), throw RuntimeException if not found
        // Hint: Use setter methods to update fields
        // Hint: Save and return the updated student
        return null;
    }

    /**
     * Delete a student by ID.
     * @param id the student ID to delete
     */
    public void deleteStudent(String id) {
        // TODO: Delete the student from the database
        // Hint: Use studentRepository.deleteById(id)
    }

    /**
     * Search students by name (case-insensitive, partial match).
     * @param name the name to search for
     * @return list of matching students
     */
    public List<Student> searchByName(String name) {
        // TODO: Search students by name
        // Hint: Use the custom repository method you defined
        return java.util.Collections.emptyList();
    }

    /**
     * Filter students by department.
     * @param department the department to filter by
     * @return list of students in the department
     */
    public List<Student> filterByDepartment(String department) {
        // TODO: Filter students by department
        // Hint: Use the custom repository method you defined
        return java.util.Collections.emptyList();
    }
}
