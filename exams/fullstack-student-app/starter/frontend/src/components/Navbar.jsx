import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Student Management System</h1>
      <div className="navbar-links">
        <Link to="/">All Students</Link>
        <Link to="/add">Add Student</Link>
      </div>
    </nav>
  )
}

export default Navbar
