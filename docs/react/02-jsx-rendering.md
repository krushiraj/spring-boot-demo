# Unit IV - JSX and Rendering

[Back to React Topics](./)

---

## Table of Contents

- [What is JSX?](#what-is-jsx)
- [JSX Syntax Rules](#jsx-syntax-rules)
- [Embedding Expressions in JSX](#embedding-expressions-in-jsx)
- [JSX vs HTML Differences](#jsx-vs-html-differences)
- [React.createElement Under the Hood](#reactcreateelement-under-the-hood)
- [Rendering Elements with ReactDOM](#rendering-elements-with-reactdom)
- [Fragments](#fragments)
- [Key Takeaways](#key-takeaways)

---

## What is JSX?

**JSX** stands for **JavaScript XML**. It is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript files. JSX makes it easier to describe what the UI should look like.

```jsx
// This is JSX
const element = <h1>Hello, World!</h1>;
```

JSX is **not** valid JavaScript. It needs to be **compiled** (transformed) into regular JavaScript before the browser can understand it. Tools like **Vite** (which uses **esbuild** or **SWC** under the hood) automatically handle this compilation.

> **Important:** JSX is optional in React. You can write React without JSX using `React.createElement()`, but JSX is much more readable and is used by virtually all React developers.

---

## JSX Syntax Rules

### Rule 1: Return a Single Root Element

Every JSX expression must have **one** parent (root) element. You cannot return multiple sibling elements without wrapping them.

```jsx
// WRONG - multiple root elements
function App() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>
  );
}

// CORRECT - wrapped in a single parent
function App() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}
```

### Rule 2: Close All Tags

Every tag must be closed in JSX, including self-closing tags that are optional in HTML.

```jsx
// HTML allows this
<img src="photo.jpg">
<br>
<input type="text">

// JSX requires closing
<img src="photo.jpg" />
<br />
<input type="text" />
```

### Rule 3: Use camelCase for Attributes

JSX uses **camelCase** naming for attributes, not the lowercase names used in HTML.

```jsx
// HTML attributes        →  JSX attributes
// class                  →  className
// for                    →  htmlFor
// onclick                →  onClick
// tabindex               →  tabIndex
// maxlength              →  maxLength
```

### Rule 4: Use Curly Braces for JavaScript

Use `{}` curly braces to embed any JavaScript expression inside JSX.

```jsx
const name = "Vasavi";
const element = <h1>Welcome to {name} College</h1>;
```

### Rule 5: Use Parentheses for Multi-Line JSX

When JSX spans multiple lines, wrap it in parentheses `()` to avoid automatic semicolon insertion issues.

```jsx
// Single line - no parentheses needed
const element = <h1>Hello</h1>;

// Multi-line - use parentheses
const element = (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

---

## Embedding Expressions in JSX

You can put any valid **JavaScript expression** inside curly braces `{}` in JSX.

### Variables

```jsx
const studentName = "Rahul";
const semester = 4;

function StudentInfo() {
  return (
    <div>
      <h2>Name: {studentName}</h2>
      <p>Semester: {semester}</p>
    </div>
  );
}
```

### Arithmetic and String Operations

```jsx
function MathExample() {
  const a = 10;
  const b = 20;

  return (
    <div>
      <p>Sum: {a + b}</p>
      <p>Product: {a * b}</p>
      <p>Message: {"Hello " + "World"}</p>
    </div>
  );
}
```

### Function Calls

```jsx
function formatName(firstName, lastName) {
  return firstName + " " + lastName;
}

function Greeting() {
  return <h1>Hello, {formatName("Rahul", "Kumar")}!</h1>;
}
```

### Ternary Operator (Conditional Expression)

```jsx
function UserGreeting() {
  const isLoggedIn = true;

  return (
    <h1>
      {isLoggedIn ? "Welcome back!" : "Please sign in."}
    </h1>
  );
}
```

### Arrays

```jsx
function SubjectList() {
  const subjects = ["React", "Node.js", "MongoDB"];

  return (
    <ul>
      {subjects.map((subject, index) => (
        <li key={index}>{subject}</li>
      ))}
    </ul>
  );
}
```

### What You CANNOT Put in Curly Braces

- **Statements** like `if`, `for`, `while`, `switch` (use ternary or external functions instead)
- **Objects** directly (will throw an error: "Objects are not valid as a React child")

```jsx
// WRONG - if statement inside JSX
<p>{if (true) { "Hello" }}</p>

// CORRECT - use ternary
<p>{true ? "Hello" : "Bye"}</p>

// WRONG - object directly
<p>{{ name: "Rahul" }}</p>

// CORRECT - access a property
<p>{user.name}</p>
```

---

## JSX vs HTML Differences

This is a common source of bugs for beginners. Here is a complete reference:

| HTML | JSX | Reason |
|---|---|---|
| `class="container"` | `className="container"` | `class` is a reserved word in JS |
| `for="email"` | `htmlFor="email"` | `for` is a reserved word in JS |
| `onclick="handler()"` | `onClick={handler}` | camelCase + function reference |
| `style="color: red"` | `style={{ color: 'red' }}` | Style is an object in JSX |
| `<img>` | `<img />` | All tags must be closed |
| `<br>` | `<br />` | All tags must be closed |
| `<input>` | `<input />` | All tags must be closed |
| `tabindex="1"` | `tabIndex={1}` | camelCase + number type |
| `<!-- comment -->` | `{/* comment */}` | JS comment syntax in curly braces |
| `checked` (boolean) | `checked={true}` | Explicit boolean value |

### Style Attribute

In HTML, `style` is a string. In JSX, `style` is a **JavaScript object** with camelCase property names.

```jsx
// HTML
// <div style="background-color: blue; font-size: 16px;">Hello</div>

// JSX
<div style={{ backgroundColor: 'blue', fontSize: '16px' }}>Hello</div>
```

The double curly braces `{{ }}` are not special syntax -- the outer `{}` means "JavaScript expression" and the inner `{}` is a JavaScript object literal.

### Comments in JSX

```jsx
function App() {
  return (
    <div>
      {/* This is a JSX comment */}
      <h1>Hello</h1>
      {/* 
        Multi-line
        JSX comment 
      */}
    </div>
  );
}
```

---

## React.createElement Under the Hood

When your code is compiled, JSX is transformed into `React.createElement()` calls. Understanding this helps you see that JSX is just syntactic sugar.

### Simple Element

```jsx
// JSX you write:
const element = <h1 className="title">Hello, React!</h1>;

// What it compiles to:
const element = React.createElement(
  'h1',                          // type (tag name)
  { className: 'title' },       // props (attributes)
  'Hello, React!'                // children (content)
);
```

### Nested Elements

```jsx
// JSX you write:
const element = (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);

// What it compiles to:
const element = React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Title'),
  React.createElement('p', null, 'Paragraph')
);
```

### Component

```jsx
// JSX you write:
const element = <Greeting name="Rahul" />;

// What it compiles to:
const element = React.createElement(
  Greeting,      // component function (not a string!)
  { name: 'Rahul' }
);
```

> **Note:** In React 17+, a new JSX transform was introduced that does not require importing React at the top of every file. Vite uses this new transform by default, so you only need to import React when you use React-specific APIs like `useState` or `useEffect`.

### The Object React Creates

`React.createElement()` returns a plain JavaScript object called a **React element**:

```jsx
// The object looks roughly like this:
{
  type: 'h1',
  props: {
    className: 'title',
    children: 'Hello, React!'
  }
}
```

React reads these objects and uses them to construct and update the DOM.

---

## Rendering Elements with ReactDOM

React elements are rendered to the page using **ReactDOM**. In React 18, you use `createRoot()`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render an element
root.render(<h1>Hello, World!</h1>);
```

### Rendering a Component

```jsx
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <p>Welcome to React 18!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### How Rendering Works

1. You call `root.render(<App />)`.
2. React calls your `App` function to get the JSX.
3. React converts the JSX to a Virtual DOM tree.
4. React compares the Virtual DOM with the real DOM.
5. React updates only the parts that are different.

> **React elements are immutable.** Once created, you cannot change their children or attributes. An element represents the UI at a specific point in time. To update the UI, you create a new element (React handles this efficiently through state, covered later).

---

## Fragments

Sometimes you need to return multiple elements without adding an extra DOM node (like a `<div>`). React provides **Fragments** for this purpose.

### The Problem

```jsx
// This adds an unnecessary <div> to the DOM
function Columns() {
  return (
    <div>
      <td>Column 1</td>
      <td>Column 2</td>
    </div>
  );
}

// When used inside a <tr>, this creates invalid HTML:
// <tr><div><td>...</td><td>...</td></div></tr>
```

### Solution: React.Fragment

```jsx
import React from 'react';

function Columns() {
  return (
    <React.Fragment>
      <td>Column 1</td>
      <td>Column 2</td>
    </React.Fragment>
  );
}

// Renders as: <td>Column 1</td><td>Column 2</td>
// No extra DOM node!
```

### Short Syntax: Empty Tags

You can use the short syntax `<>...</>` instead of `<React.Fragment>...</React.Fragment>`:

```jsx
function Columns() {
  return (
    <>
      <td>Column 1</td>
      <td>Column 2</td>
    </>
  );
}
```

### When You Need the Full Syntax

The full `<React.Fragment>` syntax is needed when you want to use the `key` attribute (required when rendering lists):

```jsx
function GlossaryList({ items }) {
  return (
    <dl>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

> **Short syntax `<>` does not support the `key` attribute.** Use `<React.Fragment key={...}>` when mapping over lists.

---

## Key Takeaways

1. **JSX** is a syntax extension that lets you write HTML-like code in JavaScript. It compiles to `React.createElement()` calls.
2. JSX requires a **single root element**, **closed tags**, and uses **camelCase** for attributes.
3. Use **curly braces `{}`** to embed JavaScript expressions in JSX. You cannot use statements (if/for/while) directly.
4. Key HTML-to-JSX differences: `className` instead of `class`, `htmlFor` instead of `for`, `style` as an object.
5. **ReactDOM.createRoot()** is the React 18 way to render your app into the DOM.
6. JSX compiles to `React.createElement()` which returns plain JavaScript objects (React elements).
7. **Fragments** (`<>...</>` or `<React.Fragment>`) let you group elements without adding extra DOM nodes.

---

[Next: Components and Props -->](./03-components-props.md)
