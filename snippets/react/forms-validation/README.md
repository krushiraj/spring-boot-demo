# Forms and Validation

## What this demonstrates
- Controlled form inputs (text, email, select)
- Form validation with custom logic
- Displaying error messages conditionally
- Handling form submission with `onSubmit` and `preventDefault()`
- Clearing form state after successful submission
- Rendering a dynamic table of submitted data

## How to run
```bash
npm install && npm run dev
```

## What to observe / try
- Submit the form empty to see all validation errors at once
- Fix one field at a time and notice errors clear as you type
- Submit a valid form and see it appear in the table below
- Try invalid roll numbers (e.g., `cs2024001` lowercase, or wrong length)
- Inspect how `noValidate` on the form disables browser-native validation so React handles it
- Notice `htmlFor` on labels (JSX equivalent of HTML's `for` attribute)

## Key concepts
- Controlled inputs: React state is the "single source of truth"
- `e.preventDefault()` stops the browser's default form submission (page reload)
- Validation is just a function that returns an errors object
- Errors are stored in state and conditionally rendered
- Use `name` attribute on inputs + computed property names (`[name]: value`) for clean handlers
- `noValidate` disables HTML5 validation so custom validation takes over
