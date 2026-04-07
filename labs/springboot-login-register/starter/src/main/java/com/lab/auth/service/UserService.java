package com.lab.auth.service;

import com.lab.auth.model.User;
import com.lab.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * Register a new user.
     * - Check if username already exists (throw RuntimeException if so)
     * - Check if email already exists (throw RuntimeException if so)
     * - Encode the password using passwordEncoder
     * - Set the role to "USER"
     * - Save the user to the database
     *
     * @param user the user to register
     * @return the saved user
     */
    public User registerUser(User user) {
        // TODO: Implement user registration
        // Hint: Use userRepository.existsByUsername() and existsByEmail() to check duplicates
        // Hint: Use passwordEncoder.encode() to hash the password before saving
        // Hint: Set the default role to "USER"
        // Hint: Use userRepository.save() to persist the user
        return null;
    }

    /**
     * Check if a username already exists in the database.
     *
     * @param username the username to check
     * @return true if the username exists
     */
    public boolean existsByUsername(String username) {
        // TODO: Check if username exists in the repository
        return false;
    }

    /**
     * Check if an email already exists in the database.
     *
     * @param email the email to check
     * @return true if the email exists
     */
    public boolean existsByEmail(String email) {
        // TODO: Check if email exists in the repository
        return false;
    }
}
