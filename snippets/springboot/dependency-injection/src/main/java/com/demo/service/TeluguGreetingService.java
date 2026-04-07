package com.demo.service;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
@Qualifier("telugu")
public class TeluguGreetingService implements GreetingService {

    @Override
    public String greet(String name) {
        return "Namaskaram, " + name + "! Swaagatam!";
    }
}
