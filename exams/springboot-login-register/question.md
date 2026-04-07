# Full Stack Development Lab - Semester End Examination

**Course Code:** U24PC431IT | **Duration:** 2 Hours | **Max Marks:** 50

---

## Instructions

- The project folder is on your Desktop at `exam/starter/`
- Open it in your IDE (VS Code / Windsurf / IntelliJ)
- All required dependencies are pre-installed — do NOT try to download anything
- MongoDB is running on `localhost:27017`
- Implement the TODO sections in the files listed below
- Test your application at [http://localhost:8080](http://localhost:8080)
- Run with: `mvn spring-boot:run` (from the project folder terminal)

> **WARNING:** Do NOT modify `pom.xml`, `User.java`, `UserRepository.java`, or any of the template/CSS files. Only edit the files specified in the tasks below.

---

## Question

Build a **User Registration and Login System** using Spring Boot, Spring Security, Thymeleaf, and MongoDB.

The application should allow users to register with their name, email, and password. Registered users should be able to log in using their email and password. After successful login, users are redirected to a home page that displays a welcome message and a logout button.

---

### What is already provided

| File | Description |
|------|-------------|
| `pom.xml` | Project configuration with all dependencies |
| `AuthApplication.java` | Spring Boot main class |
| `User.java` | User model with fields: id, name, email, password |
| `UserRepository.java` | MongoDB repository with `findByEmail()` method |
| `login.html` | Thymeleaf login page template |
| `register.html` | Thymeleaf registration page template |
| `home.html` | Thymeleaf home page template |
| `styles.css` | CSS styling for all pages |
| `application.properties` | MongoDB and Spring configuration |

---

### What you need to implement

---

#### Part A: UserService.java (10 marks)

**File:** `src/main/java/com/exam/auth/service/UserService.java`

Implement a service class that handles user registration logic.

**Requirements:**
1. Annotate the class with `@Service` so Spring can detect it (2 marks)
2. Inject `UserRepository` and `PasswordEncoder` using constructor injection or `@Autowired` (2 marks)
3. Implement the method `registerUser(String name, String email, String password)` that:
   - Checks if a user with the given email already exists using the repository (2 marks)
   - If email exists, throw a `RuntimeException` with message `"Email already registered"` (1 mark)
   - Encode the password using the password encoder before saving (2 marks)
   - Create a new `User` object, set its fields, and save it to the database (1 mark)

---

#### Part B: SecurityConfig.java (15 marks)

**File:** `src/main/java/com/exam/auth/config/SecurityConfig.java`

Implement the Spring Security configuration class.

**Requirements:**
1. Annotate the class with `@Configuration` and `@EnableWebSecurity` (2 marks)
2. Create a `@Bean` method `passwordEncoder()` that returns a new `BCryptPasswordEncoder` (3 marks)
3. Create a `@Bean` method `securityFilterChain(HttpSecurity http)` that configures: (10 marks)
   - **URL authorization** using `http.authorizeRequests()`:
     - Permit all access to `/register`, `/css/**`, and `/login` (3 marks)
     - Require authentication for all other requests (2 marks)
   - **Form login** using `.formLogin()`:
     - Set login page to `/login` (1 mark)
     - Set default success URL to `/home` (1 mark)
     - Permit all access to login (1 mark)
   - **Logout** using `.logout()`:
     - Set logout success URL to `/login?logout` (1 mark)
     - Permit all access to logout (1 mark)
   - Return `http.build()` at the end

---

#### Part C: AuthController.java (15 marks)

**File:** `src/main/java/com/exam/auth/controller/AuthController.java`

Implement the controller that handles all web requests.

**Requirements:**
1. Annotate the class with `@Controller` (1 mark)
2. Inject `UserService` using `@Autowired` or constructor injection (2 marks)
3. Implement the following handler methods:

| Method | Mapping | Parameters | Action | Marks |
|--------|---------|------------|--------|-------|
| `loginPage()` | `GET /login` | None | Return view name `"login"` | 2 |
| `registerPage()` | `GET /register` | None | Return view name `"register"` | 2 |
| `registerUser()` | `POST /register` | `@RequestParam String name, email, password` and `Model model` | Call `userService.registerUser(...)`. On success, redirect to `/login?registered`. On exception, add error message to model and return `"register"` | 5 |
| `homePage()` | `GET /home` | None | Return view name `"home"` | 3 |

**For the POST /register method:**
- Wrap the service call in a try-catch block
- On success: `return "redirect:/login?registered";`
- On failure: `model.addAttribute("error", e.getMessage());` and `return "register";`

---

#### Part D: CustomUserDetailsService.java (10 marks)

**File:** `src/main/java/com/exam/auth/service/CustomUserDetailsService.java`

Implement a custom UserDetailsService so Spring Security can authenticate users against MongoDB.

**Requirements:**
1. Annotate the class with `@Service` (1 mark)
2. Implement the `UserDetailsService` interface from Spring Security (2 marks)
3. Inject `UserRepository` using `@Autowired` or constructor injection (2 marks)
4. Implement `loadUserByUsername(String email)` method that: (5 marks)
   - Finds the user by email using the repository (1 mark)
   - If user not found, throw `UsernameNotFoundException` with message `"User not found"` (2 marks)
   - Return a new `org.springframework.security.core.userdetails.User` object with:
     - The user's email as username
     - The user's password
     - An empty list of authorities: `java.util.Collections.emptyList()` (2 marks)

---

### Evaluation Criteria

| Part | Component | Marks |
|------|-----------|-------|
| A | UserService.java | 10 |
| B | SecurityConfig.java | 15 |
| C | AuthController.java | 15 |
| D | CustomUserDetailsService.java | 10 |
| **Total** | | **50** |

---

### How to Test

Follow these steps after implementing all four files:

1. **Start the application:**
   ```
   mvn spring-boot:run
   ```
   The application should start without errors on port 8080.

2. **Test Registration:**
   - Open [http://localhost:8080/register](http://localhost:8080/register)
   - Fill in Name, Email, and Password
   - Click "Register"
   - You should be redirected to the login page with a success message

3. **Test Duplicate Registration:**
   - Try registering with the same email again
   - You should see an error message: "Email already registered"

4. **Test Login:**
   - Go to [http://localhost:8080/login](http://localhost:8080/login)
   - Enter the email and password you registered with
   - Click "Login"
   - You should be redirected to the home page with a welcome message

5. **Test Protected Routes:**
   - Try accessing [http://localhost:8080/home](http://localhost:8080/home) without logging in
   - You should be redirected to the login page

6. **Test Logout:**
   - Click the "Logout" button on the home page
   - You should be redirected to the login page

---

**End of Question Paper**
