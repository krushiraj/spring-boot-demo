package com.lab.student.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "students")
public class Student {
    @Id
    private String id;
    private String name;
    private String rollNumber;
    private String department;
    private String email;
    // TODO: Add a constructor with (name, rollNumber, department, email) and assign each field
    // TODO: Add getters and setters for all 5 fields (id, name, rollNumber, department, email)
}
