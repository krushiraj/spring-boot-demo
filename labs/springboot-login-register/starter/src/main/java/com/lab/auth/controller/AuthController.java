package com.lab.auth.controller;

import com.lab.auth.model.User;
import com.lab.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class AuthController {
    @Autowired
    private UserService userService;
    // TODO: @GetMapping("/login") String loginPage() — return "login"
    // TODO: @GetMapping("/register") String registerPage(Model model) — addAttribute("user", new User()), return "register"
    // TODO: @PostMapping("/register") String registerUser(@ModelAttribute User user, Model model)
    //       — try: registerUser, return "redirect:/login?registered"
    //       — catch: addAttribute("error", e.getMessage()), return "register"
    // TODO: @GetMapping("/home") String homePage() — return "home"
    // TODO: @GetMapping("/") String redirectToHome() — return "redirect:/home"
}
