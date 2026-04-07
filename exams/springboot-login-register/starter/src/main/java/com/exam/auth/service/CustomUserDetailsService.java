package com.exam.auth.service;

// These imports are needed for this file:
import com.exam.auth.model.User;
import com.exam.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

/**
 * TODO: Implement the CustomUserDetailsService class (10 marks)
 *
 * This service tells Spring Security how to load user data from MongoDB
 * when someone tries to log in.
 *
 * Step 1: Add the @Service annotation to this class (1 mark)
 *
 * Step 2: Make this class implement the UserDetailsService interface (2 marks)
 *         Hint: Change the class declaration to:
 *           public class CustomUserDetailsService implements UserDetailsService
 *
 * Step 3: Inject UserRepository using @Autowired (2 marks)
 *         Hint:
 *           @Autowired
 *           private UserRepository userRepository;
 *
 * Step 4: Implement the loadUserByUsername method below (5 marks)
 */

// TODO: Add @Service annotation here
// TODO: Add "implements UserDetailsService" to this class
public class CustomUserDetailsService {

    // TODO: Inject UserRepository using @Autowired
    // @Autowired
    // private UserRepository userRepository;

    /**
     * TODO: Implement this method (5 marks)
     *
     * This method is called by Spring Security during login.
     * The "username" parameter will contain the email entered in the login form.
     *
     * Steps:
     *   1. Find the user by email using the repository (1 mark)
     *      Hint: User user = userRepository.findByEmail(email)
     *              .orElseThrow(() -> new UsernameNotFoundException("User not found"));
     *
     *   2. Return a Spring Security UserDetails object (4 marks)
     *      Hint: return new org.springframework.security.core.userdetails.User(
     *              user.getEmail(),
     *              user.getPassword(),
     *              Collections.emptyList()
     *      );
     *
     * Note: The method must be named loadUserByUsername and must have the
     *       @Override annotation. The parameter is called "email" here because
     *       we use email as the username in our system.
     */
    // TODO: Uncomment and implement this method:
    // @Override
    // public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    //     // Find user by email and return UserDetails
    // }
}
