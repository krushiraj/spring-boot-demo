package com.exam.auth.config;

// These imports are needed for this file:
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/**
 * TODO: Implement the SecurityConfig class (15 marks)
 *
 * This class configures Spring Security for the application.
 *
 * Step 1: Add @Configuration and @EnableWebSecurity annotations (2 marks)
 *         Hint: Both annotations go above the class declaration:
 *           @Configuration
 *           @EnableWebSecurity
 *           public class SecurityConfig { ... }
 *
 * Step 2: Create the passwordEncoder bean method (3 marks)
 *
 * Step 3: Create the securityFilterChain bean method (10 marks)
 */

// TODO: Add @Configuration annotation here
// TODO: Add @EnableWebSecurity annotation here
public class SecurityConfig {

    /**
     * TODO: Create a PasswordEncoder bean (3 marks)
     *
     * This method creates a BCryptPasswordEncoder that Spring Security
     * will use to encode and verify passwords.
     *
     * Hint: The complete method looks like this:
     *   @Bean
     *   public PasswordEncoder passwordEncoder() {
     *       return new BCryptPasswordEncoder();
     *   }
     */
    // TODO: Implement passwordEncoder() method here

    /**
     * TODO: Create a SecurityFilterChain bean (10 marks)
     *
     * This method configures which URLs are public, which require login,
     * and how login/logout works.
     *
     * Hint: The method signature is:
     *   @Bean
     *   public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
     *       // configuration goes here
     *       return http.build();
     *   }
     *
     * Inside the method, use method chaining:
     *
     *   http
     *       .authorizeRequests()                          // Start URL authorization
     *           .antMatchers("/register", "/css/**").permitAll()  // Allow public access (3 marks)
     *           .anyRequest().authenticated()              // Everything else needs login (2 marks)
     *       .and()
     *       .formLogin()                                   // Configure login form
     *           .loginPage("/login")                       // Custom login page URL (1 mark)
     *           .defaultSuccessUrl("/home", true)          // Redirect after login (1 mark)
     *           .permitAll()                               // Allow everyone to see login page (1 mark)
     *       .and()
     *       .logout()                                      // Configure logout
     *           .logoutSuccessUrl("/login?logout")         // Redirect after logout (1 mark)
     *           .permitAll();                              // Allow everyone to logout (1 mark)
     *
     *   return http.build();
     */
    // TODO: Implement securityFilterChain(HttpSecurity http) method here
}
