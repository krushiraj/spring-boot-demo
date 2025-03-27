package com.example.demo.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.Indexed;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Data
@Document(collection = "contacts")
public class Contact {
    @Id
    private String id;

    @NotBlank(message = "Name is required")
    private String name;

    @Indexed
    @NotBlank(message = "Mobile number is required")
    @Pattern(regexp = "^\\+?[1-9]\\d{1,14}$", message = "Invalid mobile number")
    private String mobile;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;
}