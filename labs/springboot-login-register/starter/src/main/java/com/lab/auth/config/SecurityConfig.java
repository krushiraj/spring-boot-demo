package com.lab.auth.config;

import com.lab.auth.service.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private CustomUserDetailsService userDetailsService;

    /**
     * Define the password encoder bean.
     * Use BCryptPasswordEncoder for hashing passwords.
     *
     * @return PasswordEncoder instance
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        // TODO: Return a BCryptPasswordEncoder instance
        return null;
    }

    /**
     * Configure the security filter chain.
     * - Permit access to: "/register", "/login", "/css/**"
     * - All other requests require authentication
     * - Configure form login with loginPage("/login"), defaultSuccessUrl("/home"), permitAll
     * - Configure logout with logoutSuccessUrl("/login?logout"), permitAll
     *
     * @param http the HttpSecurity object
     * @return SecurityFilterChain
     * @throws Exception if configuration fails
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // TODO: Configure HTTP security
        // Hint: Use http.csrf().disable() for simplicity (not recommended for production)
        // Hint: Use http.authorizeRequests() to define access rules
        // Hint: Use .formLogin() to configure the login page
        // Hint: Use .logout() to configure logout behavior
        // Hint: Return http.build()
        return http.build();
    }

    /**
     * Configure authentication manager to use custom UserDetailsService and password encoder.
     */
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        // TODO: Configure auth to use userDetailsService and passwordEncoder
        // Hint: auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder())
    }
}
