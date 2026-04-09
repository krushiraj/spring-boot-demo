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
    private StudentRepository repo;
    @Override
    public void run(String... args) {
        if (repo.count() == 0) {
            repo.saveAll(Arrays.asList(
                new Student("Alice", "CS001", "Computer Science", "alice@example.com"),
                new Student("Bob", "EC002", "Electronics", "bob@example.com"),
                new Student("Carol", "CS003", "Computer Science", "carol@example.com")
            ));
        }
    }
}
