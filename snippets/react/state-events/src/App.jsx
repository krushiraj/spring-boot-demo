import React, { useState } from 'react';

// --- Counter Component ---
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section style={{ marginBottom: '30px' }}>
      <h2>Counter</h2>
      <p style={{ fontSize: '2rem' }}>{count}</p>
      <button onClick={() => setCount(count - 1)}>- Decrement</button>{' '}
      <button onClick={() => setCount(0)}>Reset</button>{' '}
      <button onClick={() => setCount(count + 1)}>+ Increment</button>
    </section>
  );
}

// --- Toggle Component ---
function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section style={{ marginBottom: '30px' }}>
      <h2>Toggle Content</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Details
      </button>
      {isVisible && (
        <div
          style={{
            marginTop: '10px',
            padding: '15px',
            backgroundColor: '#e3f2fd',
            borderRadius: '8px',
          }}
        >
          <p>This content is conditionally rendered based on state.</p>
          <p>Click the button again to hide it.</p>
        </div>
      )}
    </section>
  );
}

// --- TextInput Component (Controlled Input) ---
function TextInput() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <section style={{ marginBottom: '30px' }}>
      <h2>Controlled Input</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
        style={{ padding: '8px', fontSize: '1rem', width: '300px' }}
      />
      <p>You typed: <strong>{text}</strong></p>
      <p>Character count: {text.length}</p>
    </section>
  );
}

// --- Simple Todo List ---
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    const trimmed = input.trim();
    if (trimmed === '') return;
    setTodos([...todos, trimmed]);
    setInput('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <section style={{ marginBottom: '30px' }}>
      <h2>Simple Todo List</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a todo..."
          style={{ padding: '8px', fontSize: '1rem', width: '250px' }}
        />
        {' '}
        <button onClick={addTodo}>Add</button>
      </div>
      {todos.length === 0 ? (
        <p style={{ color: '#999' }}>No todos yet. Add one above!</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      )}
      <p>Total items: {todos.length}</p>
    </section>
  );
}

// --- App ---
function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>State and Events Demo</h1>
      <Counter />
      <Toggle />
      <TextInput />
      <TodoList />
    </div>
  );
}

export default App;
