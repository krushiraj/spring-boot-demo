import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Student Portal
      </Link>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/students/1"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Student 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/students/2"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Student 2
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
