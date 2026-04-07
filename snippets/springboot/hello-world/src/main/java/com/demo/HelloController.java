package com.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    // GET /hello → returns a simple string
    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }

    // GET /hello/John → uses @PathVariable
    @GetMapping("/hello/{name}")
    public String helloName(@PathVariable String name) {
        return "Hello, " + name + "!";
    }

    // GET /greet?name=John → uses @RequestParam
    @GetMapping("/greet")
    public String greet(@RequestParam(defaultValue = "World") String name) {
        return "Greetings, " + name + "! Welcome to Spring Boot.";
    }
}
