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
    // TODO: @Bean PasswordEncoder passwordEncoder() — return new BCryptPasswordEncoder()
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // TODO: csrf().disable(), authorizeRequests: permit "/register","/login","/css/**", authenticate rest
        // TODO: formLogin: loginPage("/login"), defaultSuccessUrl("/home", true), permitAll
        // TODO: logout: logoutSuccessUrl("/login?logout"), permitAll
        return http.build();
    }
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        // TODO: auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder())
    }
}
