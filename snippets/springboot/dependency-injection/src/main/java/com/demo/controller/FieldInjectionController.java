package com.demo.controller;

import com.demo.service.GreetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Field Injection (NOT RECOMMENDED for production)
 * - Dependencies are injected directly into the field
 * - Least verbose, but hardest to test
 * - Cannot make fields final
 * - Hides dependencies (not visible in constructor)
 */
@RestController
public class FieldInjectionController {

    @Autowired
    @Qualifier("english")
    private GreetingService greetingService;

    @GetMapping("/field")
    public String greet(@RequestParam(defaultValue = "World") String name) {
        return "[Field Injection] " + greetingService.greet(name);
    }
}
