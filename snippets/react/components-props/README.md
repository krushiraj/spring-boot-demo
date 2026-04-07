# Components and Props

## What this demonstrates
- Creating reusable function components
- Passing data to child components via props
- Destructuring props in function parameters
- Using the `children` prop for composition
- Mapping over arrays to render a list of components
- Using `key` prop when rendering lists

## How to run
```bash
npm install && npm run dev
```

## What to observe / try
- Look at how `App` passes the `students` array down to `StudentList`
- Notice how `StudentList` maps each student to a `StudentCard`
- `Header` uses the `children` prop -- try changing the content between `<Header>` tags
- Try adding a new student to the array and watch it appear
- Try passing an empty array to see the "No students found" fallback
- Remove the `key` prop from StudentCard and check the console warning

## Key concepts
- Components are reusable, isolated pieces of UI
- Props flow one way: parent to child (unidirectional data flow)
- `children` is a special prop for wrapping nested content
- Each item in a list needs a unique `key` for efficient re-rendering
- Props are read-only -- a child cannot modify its own props
