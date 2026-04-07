package com.demo.controller;

import com.demo.service.GreetingService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Constructor Injection (RECOMMENDED)
 * - Dependencies are provided through the constructor
 * - Fields can be marked final (immutable)
 * - Easy to test (just pass mocks to constructor)
 * - Spring auto-detects single constructor (no @Autowired needed)
 */
@RestController
public class ConstructorInjectionController {

    private final GreetingService greetingService;

    // @Autowired is optional when there is only one constructor
    public ConstructorInjectionController(@Qualifier("english") GreetingService greetingService) {
        this.greetingService = greetingService;
    }

    @GetMapping("/constructor")
    public String greet(@RequestParam(defaultValue = "World") String name) {
        return "[Constructor Injection] " + greetingService.greet(name);
    }
}
