# State and Events

## What this demonstrates
- Using `useState` hook to manage component state
- Event handling with `onClick`, `onChange`, and `onKeyDown`
- Updating state immutably (spreading arrays)
- Controlled inputs (value bound to state)
- Conditional rendering based on state

## How to run
```bash
npm install && npm run dev
```

## What to observe / try
- **Counter**: Click buttons to see state updates trigger re-renders
- **Toggle**: Notice how React adds/removes DOM elements based on state
- **TextInput**: Type and see the state update in real-time (controlled input)
- **Todo List**: Add items and notice how the array state grows; try pressing Enter
- Try setting the initial `useState` values to something different
- Open React DevTools to watch state changes live

## Key concepts
- `useState` returns `[currentValue, setterFunction]`
- Never mutate state directly -- always use the setter
- For arrays/objects, create a new copy (spread operator) when updating
- Event handlers receive a synthetic event object
- Controlled inputs: the input's `value` is driven by React state
- Each component manages its own independent state
