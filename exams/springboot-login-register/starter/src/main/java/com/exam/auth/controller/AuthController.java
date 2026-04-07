package com.exam.auth.controller;

// These imports are needed for this file:
import com.exam.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * TODO: Implement the AuthController class (15 marks)
 *
 * This controller handles all web page requests for login, register, and home.
 *
 * Step 1: Add the @Controller annotation to this class (1 mark)
 *         Hint: @Controller goes directly above the class declaration.
 *
 * Step 2: Inject UserService using @Autowired (2 marks)
 *         Hint:
 *           @Autowired
 *           private UserService userService;
 *
 * Step 3: Implement the four handler methods described below (12 marks)
 */

// TODO: Add @Controller annotation here
public class AuthController {

    // TODO: Inject UserService using @Autowired
    // @Autowired
    // private UserService userService;

    /**
     * TODO: Show the login page (2 marks)
     *
     * Hint:
     *   @GetMapping("/login")
     *   public String loginPage() {
     *       return "login";
     *   }
     */
    // TODO: Implement loginPage() method here

    /**
     * TODO: Show the registration page (2 marks)
     *
     * Hint:
     *   @GetMapping("/register")
     *   public String registerPage() {
     *       return "register";
     *   }
     */
    // TODO: Implement registerPage() method here

    /**
     * TODO: Handle registration form submission (5 marks)
     *
     * This method receives the form data from register.html and calls UserService.
     *
     * Hint: The method signature is:
     *   @PostMapping("/register")
     *   public String registerUser(@RequestParam String name,
     *                              @RequestParam String email,
     *                              @RequestParam String password,
     *                              Model model)
     *
     * Inside the method:
     *   1. Wrap the service call in a try-catch block (1 mark)
     *   2. In the try block: (2 marks)
     *        userService.registerUser(name, email, password);
     *        return "redirect:/login?registered";
     *   3. In the catch block (catch Exception e): (2 marks)
     *        model.addAttribute("error", e.getMessage());
     *        return "register";
     */
    // TODO: Implement registerUser() method here

    /**
     * TODO: Show the home page (3 marks)
     *
     * This page is only accessible after login (Spring Security handles that).
     *
     * Hint:
     *   @GetMapping("/home")
     *   public String homePage() {
     *       return "home";
     *   }
     */
    // TODO: Implement homePage() method here
}
