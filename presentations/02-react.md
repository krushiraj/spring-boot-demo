---
marp: true
theme: default
paginate: true
backgroundColor: #fff
style: |
  section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  h1 {
    color: #1a73e8;
  }
  h2 {
    color: #2d2d2d;
    border-bottom: 2px solid #1a73e8;
    padding-bottom: 0.3em;
  }
  code {
    background-color: #f5f5f5;
    padding: 2px 6px;
    border-radius: 3px;
  }
  table {
    font-size: 0.85em;
  }
---

# React.js - Unit IV

### Building Modern User Interfaces

**B.E. IV Semester - Information Technology**

Instructor: Krushi Raj Tula
GitHub: github.com/krushiraj/spring-boot-demo

<!-- Speaker notes: Welcome students. This unit covers React.js - the most popular JavaScript library for building user interfaces. By the end of this unit, you will be able to build single-page applications with React using modern tools. Ask students about their experience with JavaScript so far. -->

---

## What is React?

- A **JavaScript library** for building user interfaces
- Created by **Facebook (Meta)** in 2013
- Open-source and maintained by a large community
- Used by: Facebook, Instagram, Netflix, Airbnb, WhatsApp Web

### Key Philosophy

> "Learn once, write anywhere"

- **Declarative** - describe *what* the UI should look like
- **Component-based** - build encapsulated, reusable pieces
- **Unidirectional data flow** - data flows top-down

<!-- Speaker notes: Emphasize that React is a library, not a framework like Angular. It focuses only on the view layer. Ask students if they've used any of the websites listed - they've already been using React without knowing it! Mention that React Native extends this to mobile apps. -->

---

## Why React?

| Feature | Benefit |
|---------|---------|
| Virtual DOM | Fast UI updates without full page reload |
| Component Reusability | Write once, use everywhere |
| Large Ecosystem | Thousands of packages and tools |
| Strong Community | Easy to find help and resources |
| Job Market | Most in-demand frontend skill |
| React Native | Same skills for mobile apps |

### npm downloads: **20M+ per week**

<!-- Speaker notes: Show npmtrends.com comparing React vs Angular vs Vue to give students a sense of popularity. Emphasize job market relevance - check local job boards for React positions. Ask: "How many of you have heard of React before?" -->

---

## Virtual DOM - The Secret Sauce

```
   Real DOM (Browser)          Virtual DOM (React)
  +------------------+       +------------------+
  |     <html>       |       |   JS Object Tree  |
  |   +----------+   |       |   +----------+    |
  |   |  <body>  |   |       |   | vNode    |    |
  |   | +------+ |   |       |   | +------+ |    |
  |   | | <div>| |   |  <--  |   | | vDiv | |    |
  |   | +------+ |   |       |   | +------+ |    |
  |   +----------+   |       |   +----------+    |
  +------------------+       +------------------+

  Step 1: React creates a Virtual DOM copy
  Step 2: When state changes, a NEW Virtual DOM is created
  Step 3: React DIFFS old vs new Virtual DOM
  Step 4: Only CHANGED elements update in Real DOM
```

<!-- Speaker notes: Draw this on the whiteboard step by step. The key insight is that DOM manipulation is expensive - React batches and minimizes actual DOM updates. Use the analogy: "Imagine editing a Word document vs rewriting the whole thing every time you change a word." Do a live demo showing how many DOM nodes a simple page has using document.querySelectorAll('*').length in the console. -->

---

## How Virtual DOM Diffing Works

```
  Old Virtual DOM         New Virtual DOM
  +----------+            +----------+
  |   App    |            |   App    |
  +----+-----+            +----+-----+
       |                       |
  +----+-----+            +----+-----+
  | Header   |            | Header   |  (no change)
  +----+-----+            +----+-----+
       |                       |
  +----+-----+            +----+-----+
  | Counter  |            | Counter  |
  | count: 5 |  ------->  | count: 6 |  ** CHANGED **
  +----------+            +----------+

  React only updates the Counter text in the Real DOM!
```

- This process is called **Reconciliation**
- Makes React extremely fast even with complex UIs

<!-- Speaker notes: Explain reconciliation step by step. Mention that React uses a heuristic O(n) algorithm instead of O(n^3) for tree comparison. Don't go too deep into the algorithm - just emphasize that React is smart about what it updates. Common question: "Is Virtual DOM faster than direct DOM?" - Answer: Not always for single changes, but for complex UIs with many updates, it's much more efficient. -->

---

## SPA vs Traditional Websites

```
  Traditional Website              Single Page Application (SPA)
  ==================              ===========================

  Browser        Server            Browser           Server
    |               |                |                  |
    |--GET /home--->|                |--GET /index.html->|
    |<--Full HTML---|                |<--HTML+JS+CSS-----|
    |               |                |                  |
    |--GET /about-->|                | (Click "About")  |
    |<--Full HTML---|                | React re-renders  |
    |               |                | (No server call!) |
    | Page RELOADS  |                |                  |
    | every time!   |                |--API /data------->|
    |               |                |<--JSON only-------|
```

- **Traditional**: Server sends full HTML on every navigation
- **SPA**: Load once, React handles navigation client-side

<!-- Speaker notes: Open two tabs - one with a traditional website (e.g., a university portal) and one with Gmail or Twitter. Navigate around both and point out the page reload vs smooth transition difference. Ask: "Which feels faster?" This is a great time to show the Network tab in DevTools to see full page loads vs API calls. -->

---

## SPA Advantages and Trade-offs

### Advantages
- Faster navigation after initial load
- Better user experience (no page flicker)
- Reduced server load (only JSON data)
- Native app-like feel

### Trade-offs
- Larger initial bundle size
- SEO can be challenging (solved by Next.js)
- Requires JavaScript enabled in browser
- More complex development setup

<!-- Speaker notes: Be honest about trade-offs - this shows maturity in engineering decisions. Mention that frameworks like Next.js solve many SPA limitations with Server-Side Rendering (SSR). Ask students: "When would you NOT use an SPA?" Good answers: simple static sites, content-heavy blogs, sites that need to work without JS. -->

---

## Creating a React App with Vite

### Why Vite? (pronounced "veet" - French for "fast")
- Lightning-fast dev server with Hot Module Replacement (HMR)
- Optimized production builds
- Modern and lightweight

### Setup Commands

```bash
# Create a new React project
npm create vite@latest my-react-app -- --template react

# Navigate into the project
cd my-react-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Server starts at `http://localhost:5173`

<!-- Speaker notes: DO A LIVE DEMO HERE. Open terminal, run these commands step by step. Let students see Vite's speed - it starts in under a second. Point out the --template react flag. Show the browser with the default Vite+React page. Compare with Create React App which is now deprecated. Common question: "Why not Create React App?" - CRA is no longer maintained, Vite is the recommended approach. -->

---

## Vite + React Project Structure

```
my-react-app/
+-- node_modules/        # Dependencies (don't touch!)
+-- public/              # Static assets (favicon, images)
+-- src/
|   +-- assets/          # Images, fonts, etc.
|   +-- App.css          # App component styles
|   +-- App.jsx          # Main App component
|   +-- index.css        # Global styles
|   +-- main.jsx         # Entry point (mounts React)
+-- .gitignore           # Files to ignore in Git
+-- index.html           # Single HTML file (the "S" in SPA)
+-- package.json         # Project config & dependencies
+-- vite.config.js       # Vite configuration
```

- **main.jsx** - Where React attaches to the DOM
- **App.jsx** - Your root component
- **index.html** - Has a single `<div id="root">`

<!-- Speaker notes: Open the project in VS Code and walk through each file. Show index.html - point out the single div with id="root". Open main.jsx and explain createRoot. Open App.jsx and show the default component. Ask students: "Where is the HTML?" - Trick question, the HTML is generated by React! Mention node_modules should never be committed to git. -->

---

## The Entry Point - main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

- `createRoot` - Creates a React root in the DOM
- `render` - Renders the App component into that root
- `StrictMode` - Helps find bugs during development

<!-- Speaker notes: Walk through each line. Explain that this is the bridge between React and the browser DOM. StrictMode intentionally double-renders components in development to catch side effects - don't worry if you see console logs appearing twice. Show index.html and where the div id="root" is. This file rarely needs changes. -->

---

## JSX Introduction

**JSX** = JavaScript XML - A syntax extension for JavaScript

```jsx
// This is JSX - looks like HTML but it's JavaScript!
const element = <h1>Hello, React!</h1>;

// Babel/Vite compiles it to:
const element = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
```

### JSX is NOT HTML - it's syntactic sugar!

- JSX produces **React elements** (plain JS objects)
- Browsers don't understand JSX directly
- Vite transforms JSX to JavaScript at build time

<!-- Speaker notes: Emphasize that JSX is not a separate language - it's JavaScript with HTML-like syntax. Show the Babel REPL (babeljs.io/repl) to demonstrate how JSX compiles to React.createElement calls. This helps demystify what React is doing under the hood. Ask: "Why not just write React.createElement everywhere?" - Because JSX is much more readable! -->

---

## JSX Syntax Rules

### Must return a single root element

```jsx
// WRONG - multiple root elements
return (
  <h1>Title</h1>
  <p>Text</p>
);

// CORRECT - wrap in a parent element
return (
  <div>
    <h1>Title</h1>
    <p>Text</p>
  </div>
);

// BETTER - use Fragment (no extra DOM node)
return (
  <>
    <h1>Title</h1>
    <p>Text</p>
  </>
);
```

<!-- Speaker notes: The single root rule is because JSX compiles to a single function call. Show the error message students will see if they forget this. Introduce Fragments (<> </>) as the clean solution - they don't add extra DOM nodes. Common mistake: students will forget this rule and get confused by the error. Tip: Always start your return statement with parentheses and a single wrapper. -->

---

## JSX vs HTML Differences

| HTML | JSX | Why? |
|------|-----|------|
| `class="btn"` | `className="btn"` | `class` is reserved in JS |
| `for="email"` | `htmlFor="email"` | `for` is reserved in JS |
| `<br>` | `<br />` | All tags must be closed |
| `<img src="...">` | `<img src="..." />` | Self-closing required |
| `onclick="..."` | `onClick={...}` | camelCase events |
| `style="color:red"` | `style={{color:'red'}}` | Object, not string |
| `tabindex="1"` | `tabIndex="1"` | camelCase attributes |

```jsx
// HTML style in JSX uses objects with camelCase
<div style={{ backgroundColor: 'blue', fontSize: '16px' }}>
  Styled content
</div>
```

<!-- Speaker notes: This slide is a reference - students will come back to it often. The most common mistakes are className and self-closing tags. Explain WHY these differences exist: JSX is JavaScript, so reserved words like class and for can't be used. Show an error example if you use class instead of className. Tip: Install the ES7+ React/Redux/GraphQL/React-Native snippets VS Code extension. -->

---

## Embedding Expressions in JSX

Use **curly braces** `{}` to embed any JavaScript expression:

```jsx
function Greeting() {
  const name = "Krushi";
  const age = 25;
  const courses = ["React", "Spring Boot"];

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>Next year: {age + 1}</p>
      <p>Uppercase: {name.toUpperCase()}</p>
      <p>Courses: {courses.join(", ")}</p>
      <p>Date: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
```

**Rule**: Anything inside `{}` must be a valid JS **expression** (not a statement).

<!-- Speaker notes: Key distinction: expressions return values, statements don't. You can put 2+2, function calls, ternary operators inside {}. You CANNOT put if/else, for loops, or variable declarations. Ask students: "Can you put an if statement inside {}?" - No! Use ternary operator instead. Live demo: Create this component and change the values to show reactivity. -->

---

## Rendering Elements

```jsx
// A React element is a plain JavaScript object
const element = <h1>Hello, World!</h1>;

// React DOM renders it to the actual DOM
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(element);
```

### Key Points

- React elements are **immutable** - once created, you can't change them
- To update the UI, create a **new element** and re-render
- In practice, React re-renders automatically when **state changes**
- React only updates what's **necessary** (thanks to Virtual DOM diffing)

<!-- Speaker notes: This is mostly theoretical - in practice, you rarely call root.render() directly. Components handle re-rendering through state. The key takeaway is that React elements are lightweight objects, not actual DOM nodes. They're cheap to create. Show that you can render simple elements first, then transition to components in the next slides. -->

---

## Function Components

The building blocks of a React application:

```jsx
// Simple function component
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

// Arrow function component (also valid)
const Welcome = () => {
  return <h1>Welcome to React!</h1>;
};

// Using the component
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}
```

### Rules:
- Component names **must start with a capital letter**
- Must return **JSX** (or null)

<!-- Speaker notes: Explain that components are like custom HTML tags. Capital letter is required so React can distinguish between HTML elements (lowercase) and components (uppercase). Show what happens if you use a lowercase name - React treats it as an HTML tag. Live demo: Create a simple component and render it multiple times. Mention that class components exist but function components with hooks are the modern standard. -->

---

## Props - Passing Data to Components

Props = **Properties** passed from parent to child:

```jsx
// Parent passes data via attributes
function App() {
  return (
    <div>
      <StudentCard name="Alice" grade="A" />
      <StudentCard name="Bob" grade="B+" />
    </div>
  );
}

// Child receives data via props object
function StudentCard(props) {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>Grade: {props.grade}</p>
    </div>
  );
}
```

- Props are **read-only** - a child cannot modify its props
- Props flow **one-way**: parent -> child

<!-- Speaker notes: Use the analogy: "Props are like function arguments - you pass data in, the function uses it but doesn't change the original." This is the start of the Student Management example we'll build on. Live demo: Create these components and show how changing the props in the parent changes the child. Ask: "Why can't a child modify its props?" - Because it would break the predictable data flow. -->

---

## Props Destructuring

Cleaner syntax to access props:

```jsx
// Without destructuring
function StudentCard(props) {
  return <h3>{props.name} - {props.grade}</h3>;
}

// With destructuring (preferred)
function StudentCard({ name, grade }) {
  return <h3>{name} - {grade}</h3>;
}

// With default values
function StudentCard({ name, grade = "N/A" }) {
  return <h3>{name} - {grade}</h3>;
}

// Passing all properties of an object
const student = { name: "Alice", grade: "A" };
<StudentCard {...student} />
// Same as: <StudentCard name="Alice" grade="A" />
```

<!-- Speaker notes: Destructuring is standard JavaScript (ES6), not React-specific. Show both syntaxes side by side - destructuring is cleaner and more common in real codebases. Default values are useful for optional props. The spread operator (...) is very common when passing objects as props. Ask: "What JavaScript concept is destructuring from?" - Object destructuring from ES6. -->

---

## Component Composition

Building complex UIs from simple components:

```
         +------------------+
         |       App        |
         +--------+---------+
                  |
     +------------+------------+
     |                         |
+----+-----+           +------+------+
|  Header  |           | StudentList |
+----+-----+           +------+------+
     |                        |
+----+-----+         +-------+-------+
| NavBar   |         |               |
+----------+   +-----+----+  +------+-----+
               |StudentCard|  |StudentCard  |
               +-----------+  +------------+
```

> "Think in components" - Break UI into small, reusable pieces

<!-- Speaker notes: Draw this on the whiteboard for a Student Management System. Start with the full UI and break it down. Ask students: "If we have a student list page, what components do you see?" Guide them to identify Header, StudentList, StudentCard, SearchBar, etc. This is the React mental model - everything is a component tree. Mention that React DevTools shows this tree in the browser. -->

---

## Composition Example - Student Manager

```jsx
function Header({ title }) {
  return <h1>{title}</h1>;
}

function StudentCard({ name, id }) {
  return (
    <div className="card">
      <p><strong>{name}</strong> (ID: {id})</p>
    </div>
  );
}

function StudentList({ students }) {
  return (
    <div>
      {students.map(s => (
        <StudentCard key={s.id} name={s.name} id={s.id} />
      ))}
    </div>
  );
}

function App() {
  const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  return (
    <>
      <Header title="Student Manager" />
      <StudentList students={students} />
    </>
  );
}
```

<!-- Speaker notes: Live demo: Build this step by step. Start with App, then extract Header, then StudentCard, then StudentList. Show how data flows from App down through props. Point out the key prop on StudentCard - we'll explain why later. This is the Student Management example we'll keep building throughout the slides. -->

---

## useState Hook

Adding **state** (dynamic data) to components:

```jsx
import { useState } from 'react';

function Counter() {
  // Declare a state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
```

- `useState` returns `[currentValue, setterFunction]`
- Calling the setter **re-renders** the component

<!-- Speaker notes: LIVE DEMO - this is a critical concept. Build the counter step by step. First without state (hardcoded), then add useState. Show that clicking the button re-renders the component with the new value. Explain array destructuring: const [count, setCount] = useState(0). Ask: "What happens if we just do count = count + 1 instead of setCount?" - Nothing! React doesn't know to re-render. The setter function is what triggers the update. -->

---

## State vs Props

| Feature | Props | State |
|---------|-------|-------|
| **Ownership** | Passed from parent | Owned by component |
| **Mutability** | Read-only | Can be updated with setter |
| **Purpose** | Configure child component | Track changing data |
| **Updates** | When parent re-renders | When setter is called |
| **Direction** | Parent -> Child | Internal to component |

```jsx
function App() {
  const [score, setScore] = useState(0);  // state in App
  return <Display value={score} />;       // prop to Display
}

function Display({ value }) {  // receives prop
  return <p>Score: {value}</p>;
  // Cannot change 'value' here!
}
```

> State in a parent becomes props in a child.

<!-- Speaker notes: This is one of the most important concepts. Draw a diagram showing data flowing down as props and state being internal. The quote at the bottom is key: "State in a parent becomes props in a child." Use the analogy: Props are like arguments to a function. State is like local variables inside a function. Common question: "When do I use state vs props?" - If the data changes over time and this component owns it, use state. If it's passed from above, use props. -->

---

## State Immutability

**Never modify state directly** - always create new values:

```jsx
function StudentManager() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice" }
  ]);

  // WRONG - mutating state directly
  const addWrong = () => {
    students.push({ id: 2, name: "Bob" });
    setStudents(students); // Same reference!
  };

  // CORRECT - create a new array
  const addCorrect = () => {
    setStudents([
      ...students,
      { id: 2, name: "Bob" }
    ]);
  };

  // CORRECT - remove a student
  const removeStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };
}
```

<!-- Speaker notes: This is a very common source of bugs. Explain WHY immutability matters: React compares references to detect changes. If you mutate the existing array and pass it to setState, React sees the same reference and may skip re-rendering. Spread operator (...) creates a shallow copy. For objects, use {...obj, key: newValue}. For arrays: add with [...arr, item], remove with filter(), update with map(). Live demo showing the bug with direct mutation. -->

---

## useEffect Hook

Perform **side effects** in components:

```jsx
import { useState, useEffect } from 'react';

function StudentDashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Runs after component renders
    fetch('/api/students')
      .then(res => res.json())
      .then(data => {
        setStudents(data);
        setLoading(false);
      });
  }, []); // Empty array = run only once on mount

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {students.map(s => <li key={s.id}>{s.name}</li>)}
    </ul>
  );
}
```

<!-- Speaker notes: Side effects = anything outside of rendering: API calls, timers, DOM manipulation, subscriptions. The dependency array is crucial - explain the three cases on the next slide. Live demo: Fetch data from a public API like jsonplaceholder.typicode.com/users. Show the loading state appearing briefly. Common mistake: Forgetting the dependency array causes infinite loops! Demonstrate this carefully (then fix it). -->

---

## useEffect Dependency Array

```jsx
// 1. No dependency array - runs after EVERY render
useEffect(() => {
  console.log("Runs on every render");
});

// 2. Empty array - runs ONCE after first render
useEffect(() => {
  console.log("Runs once on mount");
}, []);

// 3. With dependencies - runs when values change
useEffect(() => {
  console.log(`Search: ${query}`);
  fetchResults(query);
}, [query]); // Runs when 'query' changes

// 4. Cleanup function - runs on unmount
useEffect(() => {
  const timer = setInterval(() => tick(), 1000);
  return () => clearInterval(timer); // Cleanup!
}, []);
```

<!-- Speaker notes: Draw a timeline on the board showing when each version fires. The dependency array tells React: "Only re-run this effect if these values changed." The cleanup function is important for preventing memory leaks - timers, subscriptions, event listeners should be cleaned up. Common question: "What goes in the dependency array?" - Any value from props or state that the effect uses. React will warn you with ESLint if you miss a dependency. -->

---

## Component Lifecycle with Hooks

```
  Class Component             Function Component + Hooks
  Lifecycle                   Equivalent
  ===============             ==========================

  constructor()          -->  useState()

  componentDidMount()    -->  useEffect(() => {}, [])

  componentDidUpdate()   -->  useEffect(() => {}, [deps])

  componentWillUnmount() -->  useEffect(() => {
                                return () => { /* cleanup */ }
                              }, [])

  Timeline:
  ========
  Mount:    [useState init] -> [render] -> [useEffect[]]
  Update:   [render] -> [useEffect[deps]]
  Unmount:  [cleanup functions run]
```

- Hooks replaced class lifecycle methods
- Simpler mental model: **effects run after render**

<!-- Speaker notes: If students have seen class components in tutorials, this mapping helps. If not, focus on the bottom half - the timeline. The key mental model: useState initializes, render produces JSX, useEffect runs after the render is committed to the DOM. Cleanup runs before the next effect or on unmount. Draw the timeline on the whiteboard with arrows. -->

---

## Event Handling

React uses **camelCase** event handlers:

```jsx
function StudentForm() {
  const [name, setName] = useState('');

  const handleClick = () => {
    alert(`Adding student: ${name}`);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload!
    console.log("Submitted:", name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Student name"
      />
      <button type="submit">Add</button>
    </form>
  );
}
```

<!-- Speaker notes: Live demo: Build this form step by step. Key points: (1) Events are camelCase (onClick not onclick), (2) Pass function references, not calls (onClick={handleClick} not onClick={handleClick()}), (3) e.preventDefault() prevents the default browser behavior. Common mistake: onClick={handleClick()} - this calls the function immediately instead of passing a reference! Show this bug and fix it. -->

---

## Synthetic Events

React wraps browser events in **SyntheticEvent** objects:

```jsx
function EventDemo() {
  const handleClick = (event) => {
    // SyntheticEvent properties:
    console.log(event.type);        // "click"
    console.log(event.target);      // DOM element
    console.log(event.currentTarget);
    event.preventDefault();
    event.stopPropagation();
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Common Events in React

| Event | Use Case |
|-------|----------|
| `onClick` | Button clicks |
| `onChange` | Input/select changes |
| `onSubmit` | Form submission |
| `onKeyDown` | Keyboard input |
| `onFocus` / `onBlur` | Focus management |
| `onMouseEnter` / `onMouseLeave` | Hover effects |

<!-- Speaker notes: Synthetic events normalize browser differences - your code works the same across Chrome, Firefox, Safari, etc. The event object looks the same as native DOM events but is a React wrapper. Most of the time, you'll use onClick and onChange. Don't spend too long here - just make students aware that React handles cross-browser compatibility for events. -->

---

## Controlled Components

React **controls** the form input value via state:

```jsx
function NameInput() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}           // React controls value
        onChange={(e) => setName(e.target.value)}
      />
      <p>You typed: {name}</p>
    </div>
  );
}
```

```
  User types "A"
      |
      v
  onChange fires --> setName("A") --> Re-render
      |                                   |
      v                                   v
  Input shows "A" <-- value={name} = "A"
```

- **Single source of truth**: State is the source, input reflects it

<!-- Speaker notes: This is a critical pattern. In vanilla HTML, the DOM owns the input value. In React, STATE owns the value and the input just displays it. This gives you complete control: you can validate, transform, or restrict input as it happens. Show a live demo where you type and see the text reflected below. Then show a practical use: forcing uppercase with setName(e.target.value.toUpperCase()). Common question: "What are uncontrolled components?" - When you let the DOM handle the value (using refs). Controlled is the recommended approach. -->

---

## Form Handling with Validation

```jsx
function AddStudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.includes("@"))
      errs.email = "Valid email required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    onAdd({ name, email });
    setName(''); setEmail(''); setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name" />
      {errors.name && <span>{errors.name}</span>}
      <input value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email" />
      {errors.email && <span>{errors.email}</span>}
      <button type="submit">Add Student</button>
    </form>
  );
}
```

<!-- Speaker notes: Walk through this step by step. This combines controlled components, state management, validation, and the onAdd callback pattern. Point out: (1) Multiple state variables for each input, (2) Validation function returns an error object, (3) Errors displayed conditionally with &&, (4) Form resets after successful submission, (5) onAdd is a callback prop - data flows UP to the parent. This is a real-world pattern they'll use in labs. Live demo: Build this and show validation errors appearing. -->

---

## Conditional Rendering

Show or hide UI elements based on conditions:

```jsx
function StudentStatus({ isEnrolled, name }) {
  // Method 1: Ternary operator
  return (
    <div>
      <h3>{name}</h3>
      {isEnrolled
        ? <span className="badge green">Active</span>
        : <span className="badge red">Inactive</span>
      }
    </div>
  );
}

// Method 2: Logical AND (&&)
function Notification({ messages }) {
  return (
    <div>
      {messages.length > 0 && (
        <p>You have {messages.length} new messages</p>
      )}
    </div>
  );
}

// Method 3: Early return
function ProtectedContent({ isLoggedIn }) {
  if (!isLoggedIn) return <p>Please log in</p>;
  return <div>Secret student data...</div>;
}
```

<!-- Speaker notes: Three patterns to know: (1) Ternary for either/or, (2) && for show/hide, (3) Early return for guard clauses. The && pattern works because: true && <JSX> returns <JSX>, false && <JSX> returns false (React ignores false). GOTCHA: 0 && <JSX> renders "0" on screen! Use messages.length > 0 not just messages.length. Live demo: Toggle isEnrolled between true and false to show the ternary. Ask: "When would you use each pattern?" -->

---

## Lists with map() and Keys

Rendering arrays of data:

```jsx
function StudentList() {
  const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B+" },
    { id: 3, name: "Charlie", grade: "A-" },
  ];

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Rules for Keys:
- Must be **unique** among siblings
- Must be **stable** (don't change between renders)
- Use **database IDs** - never use array index as key!

<!-- Speaker notes: map() is the most common way to render lists in React. It transforms each array element into JSX. The key prop is REQUIRED - React uses it to efficiently update the list. Live demo: Start without keys and show the console warning. Then add keys. Ask: "Why not use the array index as a key?" - See next slide! Common question: "Where does the key go?" - On the outermost element returned from map(). -->

---

## Why Keys Matter

```
  Without proper keys (using index):
  ==================================
  Before:               After removing "Bob":
  [0] Alice             [0] Alice
  [1] Bob    <-- del    [1] Charlie  (React thinks Bob
  [2] Charlie                        became Charlie!)

  With proper keys (using id):
  ============================
  Before:               After removing "Bob":
  [id:1] Alice          [id:1] Alice
  [id:2] Bob  <-- del   [id:3] Charlie  (React knows
  [id:3] Charlie                         Bob was removed!)
```

- Without keys, React re-renders ALL items unnecessarily
- With keys, React knows exactly which item changed
- **Performance**: Correct keys = minimal DOM updates

```jsx
// BAD: index can change when items reorder
{items.map((item, index) => <li key={index}>{item}</li>)}

// GOOD: stable, unique identifier
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

<!-- Speaker notes: This is one of the most common React mistakes. Draw the diagram on the whiteboard. When using index as key and you delete the second item, React sees: key 0 stayed the same (correct), key 1 changed from Bob to Charlie (WRONG - it's not an update, it's a different item), key 2 disappeared (WRONG - Charlie didn't disappear, Bob did). With proper IDs, React correctly identifies that id:2 was removed. Show a demo with a sortable or deletable list to illustrate the bug. -->

---

## React Router - Setup

Install React Router for client-side navigation:

```bash
npm install react-router-dom
```

### Basic Setup in main.jsx

```jsx
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### Key Components

| Component | Purpose |
|-----------|---------|
| `BrowserRouter` | Provides routing context |
| `Routes` | Container for Route definitions |
| `Route` | Maps a URL path to a component |
| `Link` | Navigation without page reload |
| `NavLink` | Link with active styling |

<!-- Speaker notes: React Router is the standard routing library for React SPAs. Wrap the entire app in BrowserRouter - this enables routing throughout your component tree. We're using React Router v6 which has a different API from v5 (many tutorials online use v5 - watch out!). Live demo: Install react-router-dom and set up the BrowserRouter wrapper. -->

---

## Defining Routes

```jsx
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Student Management System</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />}/>
        <Route path="/students/:id"
               element={<StudentDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
```

- `path="*"` catches all unmatched routes (404 page)
- `:id` is a **URL parameter** (dynamic route)

<!-- Speaker notes: Walk through each route. The order doesn't matter in v6 (React Router picks the most specific match). The path="*" is a catch-all for 404 pages. Dynamic routes with :id are used for detail pages. Live demo: Set up these routes and navigate between them. Show that the URL changes but the page doesn't reload - that's the SPA behavior! Point out that only the content inside <Routes> changes - the nav stays the same. -->

---

## Link, NavLink, useNavigate

```jsx
import { Link, NavLink, useNavigate }
  from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Programmatic navigation
    navigate('/login');
  };

  return (
    <nav>
      {/* Link - basic navigation */}
      <Link to="/">Home</Link>

      {/* NavLink - adds "active" class automatically */}
      <NavLink
        to="/students"
        className={({ isActive }) =>
          isActive ? "nav-active" : ""
        }
      >
        Students
      </NavLink>

      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
```

<!-- Speaker notes: Three ways to navigate: (1) Link - simple navigation, like an <a> tag but without page reload, (2) NavLink - same as Link but knows if it's the active route (great for highlighting current page in nav), (3) useNavigate - programmatic navigation in event handlers (after form submission, login, etc.). Show the difference between Link and a regular <a> tag in DevTools - Link prevents the default browser navigation. -->

---

## useParams - Reading URL Parameters

```jsx
import { useParams } from 'react-router-dom';

function StudentDetail() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`/api/students/${id}`)
      .then(res => res.json())
      .then(data => setStudent(data));
  }, [id]);

  if (!student) return <p>Loading...</p>;

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Grade: {student.grade}</p>
      <Link to="/students">Back to List</Link>
    </div>
  );
}

// Route definition:
// <Route path="/students/:id" element={<StudentDetail />} />
```

<!-- Speaker notes: useParams extracts the dynamic segments from the URL. If the route is /students/:id and the URL is /students/42, then id = "42" (always a string!). Notice the useEffect depends on [id] - if the user navigates from /students/1 to /students/2, the effect runs again to fetch the new student. Live demo: Create this component and navigate to different student IDs. Show how the URL parameter changes the displayed data. -->

---

## Building a Complete SPA

```
  URL                    Component         Data Flow
  ===                    =========         =========

  /                      Home              Static

  /students              StudentList       GET /api/students
                          |
                          +-- StudentCard   Props from list
                          |
                          +-- AddStudent    POST /api/students
                               Form

  /students/:id          StudentDetail     GET /api/students/:id

  /about                 About             Static

  /*                     NotFound          Static
```

### SPA Architecture:
1. **React Router** handles URL changes
2. **Components** render the right view
3. **useState/useEffect** manage data
4. **Props** pass data down the tree

<!-- Speaker notes: This ties everything together. Draw this architecture on the whiteboard. Each page is a component, each component manages its own state and effects. The router decides which component to show based on the URL. In the lab, students will build this exact application connected to the Spring Boot backend from Unit III. Ask: "What Spring Boot endpoints would we need for this?" - GET /api/students, GET /api/students/{id}, POST /api/students, etc. -->

---

## SPA Example - Putting It All Together

```jsx
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/students">Students</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  );
}

function Students() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(r => r.json())
      .then(setStudents);
  }, []);
  return (
    <ul>
      {students.map(s => (
        <li key={s.id}>{s.name} - {s.email}</li>
      ))}
    </ul>
  );
}
```

<!-- Speaker notes: Live demo: Build this from scratch in 10 minutes. Use jsonplaceholder as the API since we don't need a backend. Walk through each concept as you code: components, state, effects, routing, lists, keys. This is the culmination of everything we've learned. Let students follow along on their machines if possible. If time allows, add a search filter using controlled input and array.filter(). -->

---

## useState with Objects

Managing complex state:

```jsx
function StudentForm() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    grade: 'A'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({
      ...prev,          // Keep existing fields
      [name]: value     // Update only changed field
    }));
  };

  return (
    <form>
      <input name="name" value={student.name}
             onChange={handleChange} />
      <input name="email" value={student.email}
             onChange={handleChange} />
      <select name="grade" value={student.grade}
              onChange={handleChange}>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
    </form>
  );
}
```

<!-- Speaker notes: This pattern uses a single state object instead of multiple useState calls. The handleChange function uses computed property names [name] to update the right field. The spread operator ...prev ensures we don't lose other fields. The prev callback form of setState ensures we always work with the latest state. Ask: "When would you use one useState with an object vs multiple useState calls?" - Object for related fields (like a form), separate for independent values. -->

---

## Multiple useState vs Object State

```jsx
// Approach 1: Multiple useState (simpler, independent)
function StudentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('A');
  // Good when fields are independent
}

// Approach 2: Single object state (grouped, related)
function StudentForm() {
  const [student, setStudent] = useState({
    name: '', email: '', grade: 'A'
  });
  // Good when fields are related
  // Easy to reset: setStudent({ name:'', email:'', grade:'A' })
}

// Approach 3: useReducer (complex state logic)
// For when you have many state transitions
// We'll cover this in advanced topics
```

### Rule of thumb:
- **Few independent values** -> Multiple useState
- **Related fields (forms)** -> Single object useState
- **Complex logic** -> useReducer (advanced)

<!-- Speaker notes: There's no single right answer - it depends on the use case. Multiple useState is simpler and more explicit. Object state is cleaner for forms with many fields. useReducer is for complex state machines (mention it exists but don't go deep). Ask students which approach they'd use for a student registration form with 10 fields. Object state is clearly better there - you wouldn't want 10 separate useState calls! -->

---

## Lifting State Up

When siblings need to share data, lift state to their parent:

```jsx
function App() {
  // State lives in the parent
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, {
      ...student, id: Date.now()
    }]);
  };

  return (
    <div>
      {/* Both children access the same data */}
      <AddStudentForm onAdd={addStudent} />
      <StudentList students={students} />
      <p>Total: {students.length}</p>
    </div>
  );
}
```

```
        App (owns students state)
       /    \
  AddForm    StudentList
  (onAdd)    (students)
```

<!-- Speaker notes: This is a crucial React pattern. When two components need the same data, move the state to their closest common parent. The parent owns the state and passes it down as props. The child can "send data up" by calling a callback function (onAdd) passed as a prop. Draw the diagram on the whiteboard. Ask: "What if deeply nested components need the same data?" - That's where Context API comes in (advanced topic). -->

---

## Practical Example: Full Student Manager

```jsx
function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');

  const addStudent = (name) => {
    setStudents(prev => [
      ...prev,
      { id: Date.now(), name }
    ]);
  };

  const removeStudent = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Student Manager</h1>
      <input placeholder="Search..." value={search}
             onChange={e => setSearch(e.target.value)} />
      <AddForm onAdd={addStudent} />
      <ul>
        {filtered.map(s => (
          <li key={s.id}>
            {s.name}
            <button onClick={() => removeStudent(s.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

<!-- Speaker notes: LIVE DEMO: Build this from scratch. This combines everything: state, controlled inputs, lists, keys, callbacks, filtering. Walk through each feature: (1) Adding students with the form, (2) Removing students with filter, (3) Searching with controlled input and filter. Let students try to build it themselves first, then reveal the solution. This is great prep for the lab assignment. -->

---

## Common React Patterns - Quick Reference

```jsx
// 1. Loading state pattern
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

// 2. Toggle pattern
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(prev => !prev);

// 3. Previous state pattern
setCount(prev => prev + 1); // Always use prev!

// 4. Computed values (no need for state)
const fullName = `${firstName} ${lastName}`;
const total = items.reduce((sum, i) => sum + i.price, 0);

// 5. Callback pattern (child to parent)
<Child onAction={(data) => handleAction(data)} />
```

### Anti-patterns to avoid:
- Storing **derived/computed** values in state
- Copying **props** into state unnecessarily
- Using **index as key** in dynamic lists

<!-- Speaker notes: This is a reference slide - students can come back to it. Emphasize pattern 3: always use the functional form of setState (prev => prev + 1) when the new state depends on the old state. Pattern 4 is important: if you can compute it from existing state/props, don't add a new state variable. Mention the anti-patterns - especially "don't copy props into state" which is a very common beginner mistake. -->

---

## Debugging React Apps

### React Developer Tools (Browser Extension)

```
  Install: Chrome Web Store -> "React Developer Tools"

  Two new tabs in DevTools:
  +-- Components: View component tree, props, state
  +-- Profiler: Measure render performance

  Components Tab:
  +-App
    +-Header
    +-StudentList
      +-StudentCard  props: {name: "Alice", id: 1}
      +-StudentCard  props: {name: "Bob", id: 2}
```

### Common Debugging Tips

| Problem | Solution |
|---------|----------|
| Component not rendering | Check spelling, capitalization |
| State not updating | Are you using the setter? |
| Infinite loop | Check useEffect dependencies |
| Stale state in callbacks | Use functional setState |
| Console warning about keys | Add unique key to list items |

<!-- Speaker notes: LIVE DEMO: Install React DevTools and show the Components tab. Click on a component and show its props and state in real time. This is the most valuable debugging tool for React. Walk through each common problem and show how to identify it. The infinite loop from useEffect is the most dramatic - show it carefully (it will freeze the page). Teach students to read error messages - React has excellent error messages. -->

---

## React 18 Features (Brief Overview)

### What's New in React 18.3.x

- **Automatic Batching**: Multiple setState calls batched into one render
- **Concurrent Features**: UI stays responsive during heavy updates
- **Strict Mode** (dev only): Double-renders to catch side effects
- **createRoot API**: New way to mount React apps

```jsx
// React 18 - createRoot (new)
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);

// Automatic batching example
function handleClick() {
  setCount(c => c + 1);  // Does NOT re-render yet
  setFlag(f => !f);       // Does NOT re-render yet
  // React re-renders ONCE here (batched!)
}
```

<!-- Speaker notes: Keep this brief - students don't need to deeply understand concurrent features. The key takeaway is automatic batching: React 18 batches state updates even inside promises and setTimeout (React 17 only batched inside event handlers). Strict Mode double-rendering confuses beginners - explain that it only happens in development and helps find bugs. createRoot is already in our main.jsx - point back to that slide. -->

---

## Project Best Practices

### File Organization

```
src/
+-- components/
|   +-- Header/
|   |   +-- Header.jsx
|   |   +-- Header.css
|   +-- StudentCard/
|   |   +-- StudentCard.jsx
|   |   +-- StudentCard.css
+-- pages/
|   +-- Home.jsx
|   +-- StudentList.jsx
|   +-- StudentDetail.jsx
+-- hooks/         (custom hooks)
+-- utils/         (helper functions)
+-- App.jsx
+-- main.jsx
```

### Naming Conventions
- Components: **PascalCase** (StudentCard.jsx)
- Functions/variables: **camelCase** (handleSubmit)
- CSS files: Match component name (StudentCard.css)

<!-- Speaker notes: Good project structure makes code maintainable. The component folder pattern (component + its CSS together) is very common. Pages are components too, but they represent full views mapped to routes. As the project grows, you might add: services/ for API calls, context/ for React Context, and constants/ for shared values. Ask: "Why separate pages from components?" - Pages are route-level, components are reusable building blocks. -->

---

## Common Mistakes to Avoid

```jsx
// 1. Forgetting to return JSX
function Bad() {
  <h1>I forgot return!</h1>  // Returns undefined!
}

// 2. Mutating state directly
students.push(newStudent);    // WRONG
setStudents([...students, newStudent]); // CORRECT

// 3. Calling function instead of passing reference
<button onClick={handleClick()}>  // WRONG (calls immediately)
<button onClick={handleClick}>    // CORRECT

// 4. Missing dependency in useEffect
useEffect(() => {
  fetchData(userId);  // Uses userId but not in deps!
}, []);               // Should be [userId]

// 5. Using state for derived values
const [fullName, setFullName] = useState(
  first + " " + last  // WRONG - just compute it!
);
const fullName = `${first} ${last}`; // CORRECT
```

<!-- Speaker notes: Go through each mistake and ask students: "What's wrong here?" These are the top 5 mistakes I see from beginners. The most common is #3 - passing handleClick() instead of handleClick. The most confusing is #4 - the ESLint exhaustive-deps rule helps catch this. Save this slide reference - students will encounter every one of these mistakes in their labs. Encourage them to come back to this slide when debugging. -->

---

## Summary Table

| Concept | Purpose | Example |
|---------|---------|---------|
| JSX | HTML-like syntax in JS | `<h1>{name}</h1>` |
| Component | Reusable UI piece | `function Card() {}` |
| Props | Pass data to children | `<Card name="X" />` |
| useState | Manage local state | `const [x, setX] = useState(0)` |
| useEffect | Side effects | `useEffect(() => {}, [])` |
| Events | Handle user actions | `onClick={handler}` |
| Controlled | React-managed forms | `value={state}` |
| Conditional | Show/hide UI | `{flag && <X />}` |
| Lists | Render arrays | `arr.map(i => <X key={i.id} />)` |
| Router | Client-side navigation | `<Route path="/" />` |

<!-- Speaker notes: Use this as a recap slide. Point to each row and ask a student to explain the concept in their own words. This is a good exercise to check understanding before moving to the lab. If time allows, ask: "Which concept was the hardest to understand?" and revisit that topic briefly. -->

---

## Key Takeaways

1. **React is declarative** - describe WHAT, not HOW
2. **Components are functions** that return JSX
3. **Props flow down**, callbacks flow up
4. **useState** for local data, **useEffect** for side effects
5. **Virtual DOM** makes updates efficient
6. **Keys** help React identify list items
7. **Controlled components** for form inputs
8. **React Router** for SPA navigation

### The React Mental Model

```
  UI = f(state)

  Your UI is a function of your state.
  When state changes, the UI automatically updates.
```

<!-- Speaker notes: This is the most important slide conceptually. UI = f(state) is the core insight of React. Everything else is just implementation details. If students understand this formula, they understand React. The UI is always a reflection of the current state - no manual DOM updates needed. Ask: "In vanilla JavaScript, how would you update a counter on screen?" vs "How do you do it in React?" The React way is simpler and more predictable. -->

---

## What's Next - Labs & Practice

### Lab Exercises (Upcoming)
1. **Lab 1**: Set up Vite + React, create first components
2. **Lab 2**: Build Student Manager with useState
3. **Lab 3**: Add API calls with useEffect (connect to Spring Boot)
4. **Lab 4**: Full SPA with React Router

### Practice Resources
- [React Official Docs](https://react.dev) - Interactive tutorials
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router Docs](https://reactrouter.com/)

### Recommended VS Code Extensions
- ES7+ React/Redux/GraphQL snippets
- Prettier - Code formatter
- ESLint

<!-- Speaker notes: Point students to react.dev - the new official docs are excellent with interactive examples. The labs will progressively build on each other, ending with a full-stack app using Spring Boot backend from Unit III + React frontend. Encourage students to practice between classes - React requires hands-on experience, not just lecture slides. Suggest building a small personal project alongside the labs (todo app, expense tracker, etc.). -->

---

## Recommended Study Path

```
  Week 1: Fundamentals
  +-- Components, JSX, Props
  +-- Lab 1: Hello React

  Week 2: State & Effects
  +-- useState, useEffect, Events
  +-- Lab 2: Student Manager

  Week 3: Forms & Data
  +-- Controlled Components, API Calls
  +-- Lab 3: Connect to Spring Boot API

  Week 4: Routing & SPA
  +-- React Router, Full SPA
  +-- Lab 4: Complete Student Management App

  Beyond: Advanced Topics
  +-- Context API, useReducer, Custom Hooks
  +-- Performance Optimization
  +-- Next.js (Server-Side Rendering)
```

<!-- Speaker notes: This gives students a clear roadmap. Each week builds on the previous one. By Week 4, they should be able to build a complete CRUD application with React frontend and Spring Boot backend. Mention that the exam will focus on Weeks 1-4 content. Advanced topics are for those who want to go further. Encourage students to start Week 1 topics immediately and not wait for lectures. -->

---

## Quick Reference Card

```
  CREATE APP:    npm create vite@latest app -- --template react
  DEV SERVER:    npm run dev
  BUILD:         npm run build
  INSTALL PKG:   npm install package-name

  COMPONENT:     function Name() { return <jsx /> }
  PROPS:         function Name({ prop1, prop2 }) { ... }
  STATE:         const [val, setVal] = useState(initial)
  EFFECT:        useEffect(() => { ... }, [deps])
  EVENT:         onClick={() => handler()}
  LIST:          arr.map(i => <X key={i.id} />)
  CONDITIONAL:   {condition && <X />}
                 {cond ? <A /> : <B />}
  NAVIGATE:      <Link to="/path">Text</Link>
  URL PARAM:     const { id } = useParams()
  REDIRECT:      const navigate = useNavigate()
```

<!-- Speaker notes: Students love cheat sheets. Suggest they print this or keep it open in a tab while coding. This covers the 90% of React they'll use in daily development. As they get more comfortable, they'll memorize these patterns naturally. Mention that VS Code snippets (rafce, useState) can speed up their coding. -->

---

## Thank You!

### React.js - Unit IV

**Build something amazing with React!**

---

Course Repository:
**github.com/krushiraj/spring-boot-demo**

Lab instructions, code examples, and starter projects
are available in the repository.

---

Questions? Reach out during office hours or open
an issue on the GitHub repository.

<!-- Speaker notes: Thank students for their attention. Remind them to star the GitHub repository for easy access. Encourage them to start the first lab immediately while the concepts are fresh. Open the floor for questions - common ones include: "Do we need to memorize all the hooks?", "Will React be on the exam?", "Can we use TypeScript instead?". Remind them of office hours and that the repo issues are monitored. Wish them good luck with their React journey! -->
