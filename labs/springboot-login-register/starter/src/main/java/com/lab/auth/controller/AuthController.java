package com.lab.auth.controller;

import com.lab.auth.model.User;
import com.lab.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class AuthController {

    @Autowired
    private UserService userService;

    /**
     * Show the login page.
     * @return the login view name
     */
    @GetMapping("/login")
    public String loginPage() {
        // TODO: Return the "login" view name
        return "";
    }

    /**
     * Show the registration page.
     * Add an empty User object to the model for form binding.
     *
     * @param model the Spring MVC model
     * @return the register view name
     */
    @GetMapping("/register")
    public String registerPage(Model model) {
        // TODO: Add a new User object to the model with attribute name "user"
        // Hint: model.addAttribute("user", new User())
        // TODO: Return the "register" view name
        return "";
    }

    /**
     * Handle user registration form submission.
     * - Try to register the user using UserService
     * - If successful, redirect to login with success message
     * - If failed (duplicate username/email), return to register page with error
     *
     * @param user the user from the form
     * @param model the Spring MVC model
     * @return redirect URL or view name
     */
    @PostMapping("/register")
    public String registerUser(@ModelAttribute User user, Model model) {
        // TODO: Implement registration logic
        // Hint: Use try-catch around userService.registerUser(user)
        // Hint: On success, return "redirect:/login?registered"
        // Hint: On failure, add "error" attribute to model and return "register"
        return "";
    }

    /**
     * Show the home page (authenticated users only).
     * @return the home view name
     */
    @GetMapping("/home")
    public String homePage() {
        // TODO: Return the "home" view name
        return "";
    }

    /**
     * Redirect root URL to home.
     * @return redirect to /home
     */
    @GetMapping("/")
    public String redirectToHome() {
        // TODO: Return "redirect:/home"
        return "";
    }
}
