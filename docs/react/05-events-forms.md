# Unit IV - Events and Forms

[Back to React Topics](./)

---

## Table of Contents

- [Handling Events in React](#handling-events-in-react)
- [Event Naming Conventions](#event-naming-conventions)
- [Event Handler Functions](#event-handler-functions)
- [Synthetic Events](#synthetic-events)
- [Controlled Components](#controlled-components)
- [Uncontrolled Components](#uncontrolled-components)
- [Form Handling](#form-handling)
- [Form Validation](#form-validation)
- [Complete Form Example with Validation](#complete-form-example-with-validation)
- [Key Takeaways](#key-takeaways)

---

## Handling Events in React

React handles events similarly to HTML DOM events, but with some key differences:

| Feature | HTML | React (JSX) |
|---|---|---|
| Event naming | `onclick`, `onchange` | `onClick`, `onChange` (camelCase) |
| Handler value | String: `"handleClick()"` | Function reference: `{handleClick}` |
| Prevent default | `return false;` | `event.preventDefault()` |

### HTML Way (for comparison)

```html
<button onclick="handleClick()">Click Me</button>
```

### React Way

```jsx
function App() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

> **Important:** Pass the function **reference** (`handleClick`), not the function **call** (`handleClick()`). If you write `onClick={handleClick()}`, the function will execute immediately during rendering, not when the button is clicked.

---

## Event Naming Conventions

React event names use **camelCase**:

| HTML Event | React Event | Triggered When |
|---|---|---|
| `onclick` | `onClick` | Element is clicked |
| `onchange` | `onChange` | Input value changes |
| `onsubmit` | `onSubmit` | Form is submitted |
| `onkeydown` | `onKeyDown` | Key is pressed down |
| `onkeyup` | `onKeyUp` | Key is released |
| `onmouseover` | `onMouseOver` | Mouse enters element |
| `onmouseout` | `onMouseOut` | Mouse leaves element |
| `onfocus` | `onFocus` | Element gains focus |
| `onblur` | `onBlur` | Element loses focus |

---

## Event Handler Functions

There are several ways to define and use event handlers:

### Named Function

```jsx
function App() {
  function handleClick() {
    console.log('Clicked!');
  }

  return <button onClick={handleClick}>Click</button>;
}
```

### Inline Arrow Function

```jsx
function App() {
  return (
    <button onClick={() => console.log('Clicked!')}>
      Click
    </button>
  );
}
```

### Passing Arguments to Event Handlers

```jsx
function App() {
  function handleGreet(name) {
    alert(`Hello, ${name}!`);
  }

  return (
    <div>
      {/* Wrap in an arrow function to pass arguments */}
      <button onClick={() => handleGreet('Rahul')}>Greet Rahul</button>
      <button onClick={() => handleGreet('Priya')}>Greet Priya</button>
    </div>
  );
}
```

### Accessing the Event Object

Event handler functions automatically receive the **event object** as the first parameter:

```jsx
function App() {
  function handleClick(event) {
    console.log('Event type:', event.type);     // "click"
    console.log('Target:', event.target);        // the button element
    console.log('Button text:', event.target.textContent);
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

When using an inline arrow function with arguments AND the event:

```jsx
<button onClick={(event) => handleClick('Rahul', event)}>
  Click
</button>
```

---

## Synthetic Events

React wraps the browser's native events in a **SyntheticEvent** object. This provides a consistent API across all browsers.

```jsx
function App() {
  function handleClick(event) {
    // event is a SyntheticEvent, not a native browser event
    console.log(event);               // SyntheticEvent
    console.log(event.nativeEvent);   // Native browser event (if needed)

    event.preventDefault();           // Works the same as native
    event.stopPropagation();          // Works the same as native
  }

  return <button onClick={handleClick}>Click</button>;
}
```

Key features of SyntheticEvent:
- **Cross-browser compatible** -- works the same in Chrome, Firefox, Safari, etc.
- Has the same interface as native events (`preventDefault`, `stopPropagation`, `target`, etc.)
- You can access the native event via `event.nativeEvent` if needed (rarely necessary)

### Preventing Default Behavior

```jsx
function LoginForm() {
  function handleSubmit(event) {
    event.preventDefault(); // Prevents the page from reloading
    console.log('Form submitted!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" />
      <button type="submit">Login</button>
    </form>
  );
}
```

---

## Controlled Components

A **controlled component** is a form element whose value is controlled by React state. The React state is the "single source of truth."

### How It Works

1. The form element's `value` is bound to a state variable.
2. An `onChange` handler updates the state when the user types.
3. React re-renders with the new value.

```jsx
import { useState } from 'react';

function ControlledInput() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={name}           // Value comes FROM state
        onChange={handleChange}  // Updates state on every keystroke
      />
      <p>You typed: {name}</p>
    </div>
  );
}
```

### Why Controlled Components?

- You have **full control** over the form data at all times.
- You can **validate**, **transform**, or **restrict** input in real time.
- The state is always in sync with what is displayed.

### Example: Restricting Input

```jsx
import { useState } from 'react';

function UpperCaseInput() {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value.toUpperCase()); // Force uppercase
  }

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder="Will convert to UPPERCASE"
    />
  );
}
```

---

## Uncontrolled Components

An **uncontrolled component** manages its own state internally in the DOM. You access the value using a **ref** instead of state.

```jsx
import { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert('Name: ' + inputRef.current.value); // Read value from DOM
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} defaultValue="" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Controlled vs Uncontrolled Comparison

| Feature | Controlled | Uncontrolled |
|---|---|---|
| Value managed by | React state | The DOM |
| Access value | `state` variable | `ref.current.value` |
| Set initial value | `useState('initial')` | `defaultValue="initial"` |
| Validation | On every change (real-time) | On submit only |
| Re-renders on typing | Yes | No |
| Recommended | Yes (default choice) | For simple cases, file inputs |

> **Recommendation:** Use **controlled components** for most forms. Use uncontrolled components only for simple forms or when working with file inputs (`<input type="file" />` is always uncontrolled in React).

---

## Form Handling

### Text Input

```jsx
import { useState } from 'react';

function TextInputDemo() {
  const [value, setValue] = useState('');

  return (
    <div>
      <label htmlFor="nameInput">Name: </label>
      <input
        id="nameInput"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
```

### Textarea

In HTML, textarea content goes between tags. In React, textarea uses a `value` attribute:

```jsx
import { useState } from 'react';

function TextareaDemo() {
  const [bio, setBio] = useState('');

  return (
    <div>
      <label htmlFor="bioInput">Bio: </label>
      <textarea
        id="bioInput"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        rows={4}
        cols={40}
      />
      <p>Character count: {bio.length}</p>
    </div>
  );
}
```

### Select Dropdown

In HTML, the selected option uses a `selected` attribute. In React, the `<select>` element uses a `value` attribute:

```jsx
import { useState } from 'react';

function SelectDemo() {
  const [branch, setBranch] = useState('IT');

  return (
    <div>
      <label htmlFor="branchSelect">Branch: </label>
      <select
        id="branchSelect"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      >
        <option value="IT">Information Technology</option>
        <option value="CSE">Computer Science</option>
        <option value="ECE">Electronics</option>
        <option value="EEE">Electrical</option>
      </select>
      <p>Selected: {branch}</p>
    </div>
  );
}
```

### Checkbox

```jsx
import { useState } from 'react';

function CheckboxDemo() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        {' '}I agree to the terms
      </label>
      <p>Agreed: {agreed ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

### Radio Buttons

```jsx
import { useState } from 'react';

function RadioDemo() {
  const [gender, setGender] = useState('');

  return (
    <div>
      <p>Gender:</p>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={(e) => setGender(e.target.value)}
        />
        {' '}Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={(e) => setGender(e.target.value)}
        />
        {' '}Female
      </label>
      <p>Selected: {gender || 'None'}</p>
    </div>
  );
}
```

### Handling Multiple Inputs with One Handler

When you have many form fields, you can use a single state object and a single handler:

```jsx
import { useState } from 'react';

function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: 'IT',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,   // Computed property name
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form Data:', formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <select name="branch" value={formData.branch} onChange={handleChange}>
        <option value="IT">IT</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
```

> **Key technique:** The `[name]: value` syntax uses JavaScript **computed property names** to dynamically set the property based on the input's `name` attribute.

---

## Form Validation

### Basic Validation Approach

1. Track errors in state.
2. Validate on submit (and optionally on change or blur).
3. Display error messages next to the relevant fields.

```jsx
import { useState } from 'react';

function ValidatedForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function validate(value) {
    if (!value) {
      return 'Email is required';
    }
    if (!value.includes('@')) {
      return 'Email must contain @';
    }
    return ''; // No error
  }

  function handleSubmit(event) {
    event.preventDefault();
    const errorMsg = validate(email);
    setError(errorMsg);

    if (!errorMsg) {
      console.log('Form submitted with:', email);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(''); // Clear error when user types
          }}
          placeholder="Enter email"
          style={{ borderColor: error ? 'red' : '#ccc' }}
        />
        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Complete Form Example with Validation

Here is a complete student registration form with validation for all fields:

```jsx
import { useState } from 'react';

function StudentRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    email: '',
    branch: '',
    semester: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear the error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  function validateForm() {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Roll number validation
    if (!formData.rollNo.trim()) {
      newErrors.rollNo = 'Roll number is required';
    } else if (!/^\d{10,}$/.test(formData.rollNo)) {
      newErrors.rollNo = 'Roll number must be at least 10 digits';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    // Branch validation
    if (!formData.branch) {
      newErrors.branch = 'Please select a branch';
    }

    // Semester validation
    if (!formData.semester) {
      newErrors.semester = 'Please select a semester';
    }

    // Terms validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form is valid
    setSubmitted(true);
    console.log('Registration Data:', formData);
  }

  function handleReset() {
    setFormData({
      name: '',
      rollNo: '',
      email: '',
      branch: '',
      semester: '',
      agreeToTerms: false,
    });
    setErrors({});
    setSubmitted(false);
  }

  // Show success message after submission
  if (submitted) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2 style={{ color: 'green' }}>Registration Successful!</h2>
        <p>Welcome, {formData.name}!</p>
        <p>Roll No: {formData.rollNo}</p>
        <p>Branch: {formData.branch} | Semester: {formData.semester}</p>
        <button onClick={handleReset}>Register Another Student</button>
      </div>
    );
  }

  // Styles
  const inputStyle = (field) => ({
    width: '100%',
    padding: '8px',
    border: `1px solid ${errors[field] ? 'red' : '#ccc'}`,
    borderRadius: '4px',
    fontSize: '14px',
  });

  const errorStyle = {
    color: 'red',
    fontSize: '12px',
    marginTop: '4px',
  };

  const fieldStyle = {
    marginBottom: '16px',
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div style={fieldStyle}>
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle('name')}
            placeholder="Enter your full name"
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>

        {/* Roll Number */}
        <div style={fieldStyle}>
          <label htmlFor="rollNo">Roll Number *</label>
          <input
            id="rollNo"
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            style={inputStyle('rollNo')}
            placeholder="e.g., 21071A1234"
          />
          {errors.rollNo && <p style={errorStyle}>{errors.rollNo}</p>}
        </div>

        {/* Email */}
        <div style={fieldStyle}>
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle('email')}
            placeholder="your.email@example.com"
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>

        {/* Branch */}
        <div style={fieldStyle}>
          <label htmlFor="branch">Branch *</label>
          <select
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            style={inputStyle('branch')}
          >
            <option value="">-- Select Branch --</option>
            <option value="IT">Information Technology</option>
            <option value="CSE">Computer Science & Engineering</option>
            <option value="ECE">Electronics & Communication</option>
            <option value="EEE">Electrical & Electronics</option>
            <option value="MECH">Mechanical Engineering</option>
          </select>
          {errors.branch && <p style={errorStyle}>{errors.branch}</p>}
        </div>

        {/* Semester */}
        <div style={fieldStyle}>
          <label htmlFor="semester">Semester *</label>
          <select
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            style={inputStyle('semester')}
          >
            <option value="">-- Select Semester --</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
              <option key={sem} value={sem}>Semester {sem}</option>
            ))}
          </select>
          {errors.semester && <p style={errorStyle}>{errors.semester}</p>}
        </div>

        {/* Terms */}
        <div style={fieldStyle}>
          <label>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            {' '}I agree to the terms and conditions *
          </label>
          {errors.agreeToTerms && <p style={errorStyle}>{errors.agreeToTerms}</p>}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="submit"
            style={{
              padding: '10px 24px',
              backgroundColor: '#1a73e8',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Register
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={{
              padding: '10px 24px',
              backgroundColor: '#ccc',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentRegistrationForm;
```

### How the Validation Works

1. **`handleChange`** -- Updates the form data state and clears the error for the changed field.
2. **`validateForm`** -- Checks all fields and returns an object of error messages. If a field is valid, it is not included in the errors object.
3. **`handleSubmit`** -- Prevents default form submission, runs validation. If there are errors, sets them in state (which triggers a re-render showing error messages). If no errors, processes the form.
4. **Error display** -- Each field conditionally renders an error message: `{errors.name && <p>...</p>}`.

---

## Key Takeaways

1. React events use **camelCase** naming: `onClick`, `onChange`, `onSubmit`.
2. Pass a **function reference** to event handlers, not a function call: `onClick={handleClick}` (not `onClick={handleClick()}`).
3. React uses **SyntheticEvent** -- a cross-browser wrapper around native events.
4. Use `event.preventDefault()` to prevent default browser behavior (like form submission page reload).
5. **Controlled components** bind form values to React state via `value` and `onChange`. This is the recommended approach.
6. **Uncontrolled components** let the DOM manage form values and use `ref` to read them.
7. For multiple inputs, use a **single state object** with a **single handler** using computed property names.
8. Form validation involves tracking errors in state and displaying them conditionally next to each field.

---

[Next: Lists and Conditional Rendering -->](./06-lists-conditional.md)
