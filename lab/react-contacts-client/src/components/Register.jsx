import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      if (response.ok) {
        navigate('/login')
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Registration failed')
      }
    } catch (error) {
      setError('Registration failed')
    }
  }

  return (
    <div className="container">
      <h2>Register</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-input"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            required
            minLength="3"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-input"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-input"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            required
            minLength="6"
          />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
      <div className="links">
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  )
}

export default Register