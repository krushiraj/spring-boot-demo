# Dependency Injection - All 3 Types

## What this demonstrates
- **Constructor Injection** (recommended) - dependencies passed via constructor, fields can be `final`
- **Setter Injection** - dependencies set via setter methods with `@Autowired`
- **Field Injection** (not recommended) - dependencies injected directly into fields with `@Autowired`
- `@Qualifier` to choose between multiple implementations of the same interface
- `@Service` to register implementations as Spring beans

## How to run
```bash
cd dependency-injection
mvn spring-boot:run
```
The application starts on port 8080.

## Endpoints to test

```bash
# Constructor Injection (uses EnglishGreetingService)
curl http://localhost:8080/constructor?name=Krushi
# Expected: [Constructor Injection] Hello, Krushi! Welcome!

# Setter Injection (uses TeluguGreetingService)
curl http://localhost:8080/setter?name=Krushi
# Expected: [Setter Injection] Namaskaram, Krushi! Swaagatam!

# Field Injection (uses EnglishGreetingService)
curl http://localhost:8080/field?name=Krushi
# Expected: [Field Injection] Hello, Krushi! Welcome!

# Default name
curl http://localhost:8080/constructor
# Expected: [Constructor Injection] Hello, World! Welcome!
```

## Key takeaway
Constructor injection is the recommended approach because:
1. Dependencies can be `final` (immutable)
2. Easy to unit test (pass mocks via constructor)
3. Makes required dependencies explicit
