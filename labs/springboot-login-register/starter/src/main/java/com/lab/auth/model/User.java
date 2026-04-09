package com.lab.auth.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private String role;
    public User() {}
    // TODO: Add constructor with (username, email, password, role) and assign each field
    // TODO: Add getters and setters for all 5 fields (id, username, email, password, role)
}
