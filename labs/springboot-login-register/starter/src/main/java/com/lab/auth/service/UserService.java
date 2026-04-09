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
    // TODO: User registerUser(User user) — check existsByUsername/existsByEmail (throw RuntimeException),
    //       encode password, set role to "USER", save and return
}
