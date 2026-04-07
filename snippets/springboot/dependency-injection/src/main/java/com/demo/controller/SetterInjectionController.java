package com.demo.controller;

import com.demo.service.GreetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Setter Injection
 * - Dependencies are provided through setter methods
 * - Allows optional dependencies
 * - Can be reconfigured after construction
 * - Requires @Autowired on the setter
 */
@RestController
public class SetterInjectionController {

    private GreetingService greetingService;

    @Autowired
    @Qualifier("telugu")
    public void setGreetingService(GreetingService greetingService) {
        this.greetingService = greetingService;
    }

    @GetMapping("/setter")
    public String greet(@RequestParam(defaultValue = "World") String name) {
        return "[Setter Injection] " + greetingService.greet(name);
    }
}
