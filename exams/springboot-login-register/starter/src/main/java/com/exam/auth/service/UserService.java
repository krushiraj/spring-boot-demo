package com.exam.auth.service;

// These imports are needed for this file:
import com.exam.auth.model.User;
import com.exam.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * TODO: Implement the UserService class (10 marks)
 *
 * This service handles user registration logic.
 *
 * Step 1: Add the @Service annotation to this class (2 marks)
 *         Hint: @Service goes directly above the class declaration.
 *         This tells Spring to register this class as a bean.
 *
 * Step 2: Inject the required dependencies (2 marks)
 *         You need two dependencies:
 *           - UserRepository userRepository
 *           - PasswordEncoder passwordEncoder
 *         Hint: Use @Autowired on each field, like this:
 *           @Autowired
 *           private UserRepository userRepository;
 *
 * Step 3: Implement the registerUser method below (6 marks)
 */

// TODO: Add @Service annotation here
public class UserService {

    // TODO: Inject UserRepository using @Autowired
    // @Autowired
    // private UserRepository userRepository;

    // TODO: Inject PasswordEncoder using @Autowired
    // @Autowired
    // private PasswordEncoder passwordEncoder;

    /**
     * TODO: Implement this method to register a new user (6 marks)
     *
     * Steps:
     *   1. Check if a user with the given email already exists (2 marks)
     *      Hint: Use userRepository.findByEmail(email).isPresent()
     *      If it returns true, throw a RuntimeException:
     *        throw new RuntimeException("Email already registered");
     *
     *   2. Encode the password before saving (2 marks)
     *      Hint: String encodedPassword = passwordEncoder.encode(password);
     *
     *   3. Create a new User object, set its fields, and save it (2 marks)
     *      Hint:
     *        User user = new User();
     *        user.setName(name);
     *        user.setEmail(email);
     *        user.setPassword(encodedPassword);
     *        userRepository.save(user);
     */
    public void registerUser(String name, String email, String password) {
        // TODO: Implement the three steps described above
    }
}
