import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Username"
          required
          autoComplete="off"
          value={credentials.username}
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          required
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        />
        <button className="btn" type="submit">Login</button>
      </form>
      <Link to="/register">Create an account</Link>
    </div>
  );
};

export default Login;
