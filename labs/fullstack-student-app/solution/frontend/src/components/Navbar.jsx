import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Student Manager</h1>
      </Link>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Students
        </Link>
        <Link to="/add" className={location.pathname === '/add' ? 'active' : ''}>
          Add Student
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
