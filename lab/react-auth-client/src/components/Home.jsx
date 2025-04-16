import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logout } from '../services/authService'

const Home = () => {
  const navigate = useNavigate()
  const user = getCurrentUser()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  if (!user) {
    return null
  }

  return (
    <div className="container">
      <div className="header">
        <h2>Welcome!</h2>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
      <div className="content">
        <p>You are logged in as: {user.username}</p>
      </div>
    </div>
  )
}

export default Home