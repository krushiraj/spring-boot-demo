import React from 'react';

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        This is a demo Single Page Application built with <strong>React Router</strong>.
      </p>
      <h2>What is a SPA?</h2>
      <ul>
        <li>The browser loads a single HTML page</li>
        <li>Navigation swaps components without a full page reload</li>
        <li>The URL updates via the History API</li>
        <li>Faster transitions and a smoother user experience</li>
      </ul>
      <h2>React Router Concepts Used</h2>
      <ul>
        <li><code>BrowserRouter</code> -- wraps the app to enable routing</li>
        <li><code>Routes</code> and <code>Route</code> -- define URL-to-component mappings</li>
        <li><code>Link</code> -- navigation without page reload</li>
        <li><code>NavLink</code> -- Link with active styling support</li>
        <li><code>useParams</code> -- read dynamic URL parameters</li>
      </ul>
    </div>
  );
}

export default About;
