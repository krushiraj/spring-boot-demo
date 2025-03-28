import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {errors.username && <div className="error">{errors.username}</div>}
        <input
          className="form-input"
          type="text"
          placeholder="Username"
          required
          minLength="3"
          value={user.username}
          onChange={(e) => setUser({...user, username: e.target.value})}
        />
        
        {errors.email && <div className="error">{errors.email}</div>}
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          required
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}
        />
        
        {errors.password && <div className="error">{errors.password}</div>}
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          required
          minLength="6"
          value={user.password}
          onChange={(e) => setUser({...user, password: e.target.value})}
        />
        
        <button className="btn" type="submit">Register</button>
      </form>
      <Link to="/login">Back to Login</Link>
    </div>
  );
};

export default Register;
