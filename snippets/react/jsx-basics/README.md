# JSX Basics

## What this demonstrates
- Embedding JavaScript expressions inside JSX using `{}`
- Conditional rendering with the ternary operator and `&&`
- Rendering lists using `Array.map()`
- Using `className` instead of `class`
- React Fragments (`<>...</>`) to avoid extra wrapper divs
- Self-closing tags (`<input />`, `<br />`, `<hr />`)

## How to run
```bash
npm install && npm run dev
```

## What to observe / try
- Change the `marks` variable and see conditional rendering update
- Add more items to the `subjects` array
- Try using `class` instead of `className` and check the browser console for a warning
- Remove the Fragment and wrap everything in a `<div>` -- notice the extra DOM node
- Try removing `key` from the list items and check the console warning

## Key concepts
- JSX is syntactic sugar for `React.createElement()`
- Expressions inside `{}` are evaluated as JavaScript
- Every list item needs a unique `key` prop
- JSX requires a single root element (or a Fragment)
- HTML attributes use camelCase in JSX (`className`, `htmlFor`, `onClick`)
