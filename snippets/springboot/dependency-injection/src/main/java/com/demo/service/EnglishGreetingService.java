package com.demo.service;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
@Qualifier("english")
public class EnglishGreetingService implements GreetingService {

    @Override
    public String greet(String name) {
        return "Hello, " + name + "! Welcome!";
    }
}
