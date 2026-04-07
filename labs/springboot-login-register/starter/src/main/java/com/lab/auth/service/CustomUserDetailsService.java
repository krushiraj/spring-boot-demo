package com.lab.auth.service;

import com.lab.auth.model.User;
import com.lab.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    /**
     * Load user by username for Spring Security authentication.
     * - Find the user by username from the repository
     * - If not found, throw UsernameNotFoundException
     * - Return a Spring Security User object with username, password, and authorities
     *
     * @param username the username to look up
     * @return UserDetails object for Spring Security
     * @throws UsernameNotFoundException if user is not found
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // TODO: Implement this method
        // Hint: Use userRepository.findByUsername() to find the user
        // Hint: Throw new UsernameNotFoundException("User not found") if not present
        // Hint: Return new org.springframework.security.core.userdetails.User(
        //          user.getUsername(),
        //          user.getPassword(),
        //          Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + user.getRole()))
        //       )
        throw new UsernameNotFoundException("User not found: " + username);
    }
}
