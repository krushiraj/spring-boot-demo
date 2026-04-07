package com.lab.student.config;

import com.lab.student.model.Student;
import com.lab.student.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public void run(String... args) throws Exception {
        if (studentRepository.count() == 0) {
            studentRepository.saveAll(Arrays.asList(
                new Student("Alice Johnson", "CS2021001", "Computer Science", "alice@example.com"),
                new Student("Bob Smith", "EC2021002", "Electronics", "bob@example.com"),
                new Student("Carol Williams", "CS2021003", "Computer Science", "carol@example.com"),
                new Student("David Brown", "ME2021004", "Mechanical", "david@example.com"),
                new Student("Eve Davis", "EC2021005", "Electronics", "eve@example.com")
            ));
            System.out.println("Sample student data initialized.");
        }
    }
}
