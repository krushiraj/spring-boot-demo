import React from 'react';

function App() {
  // --- Embedding expressions in JSX ---
  const studentName = 'Ananya Sharma';
  const marks = 92;
  const today = new Date().toLocaleDateString();

  // --- Data for rendering lists ---
  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'];

  // --- Conditional rendering ---
  const isPass = marks >= 40;

  return (
    <>
      {/* Fragment: no extra wrapper div in the DOM */}
      <h1>JSX Basics Demo</h1>

      {/* Embedding expressions */}
      <section>
        <h2>Embedding Expressions</h2>
        <p>Student: {studentName}</p>
        <p>Marks: {marks}</p>
        <p>Today's Date: {today}</p>
        <p>Marks doubled: {marks * 2}</p>
      </section>

      {/* Conditional rendering with ternary */}
      <section>
        <h2>Conditional Rendering</h2>
        <p>
          Result:{' '}
          <span style={{ color: isPass ? 'green' : 'red', fontWeight: 'bold' }}>
            {isPass ? 'PASS' : 'FAIL'}
          </span>
        </p>
        {marks >= 90 && <p>Distinction achieved!</p>}
      </section>

      {/* Rendering lists with map */}
      <section>
        <h2>Rendering Lists</h2>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </section>

      {/* className instead of class */}
      <section>
        <h2>className vs class</h2>
        <p className="highlight">
          In JSX, use <code>className</code> instead of <code>class</code>.
        </p>
      </section>

      {/* Self-closing tags */}
      <section>
        <h2>Self-Closing Tags</h2>
        <p>Images and inputs must self-close in JSX:</p>
        <input type="text" placeholder="Type something..." />
        <br />
        <hr />
      </section>
    </>
  );
}

export default App;
