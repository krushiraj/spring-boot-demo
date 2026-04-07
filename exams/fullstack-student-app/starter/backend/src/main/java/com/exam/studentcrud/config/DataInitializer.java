package com.exam.studentcrud.config;

import com.exam.studentcrud.model.Student;
import com.exam.studentcrud.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public void run(String... args) {
        // Only seed data if the collection is empty
        if (studentRepository.count() == 0) {
            System.out.println("Seeding sample student data...");

            studentRepository.save(new Student(
                    "Arun Kumar", "21CS001", "CSE", "arun.kumar@college.edu"));

            studentRepository.save(new Student(
                    "Priya Sharma", "21EC045", "ECE", "priya.sharma@college.edu"));

            studentRepository.save(new Student(
                    "Rahul Reddy", "21ME032", "MECH", "rahul.reddy@college.edu"));

            studentRepository.save(new Student(
                    "Sneha Patel", "21CS078", "CSE", "sneha.patel@college.edu"));

            studentRepository.save(new Student(
                    "Vikram Singh", "21EE015", "EEE", "vikram.singh@college.edu"));

            System.out.println("Sample data seeded: 5 students created.");
        } else {
            System.out.println("Data already exists. Skipping seed.");
        }
    }
}
