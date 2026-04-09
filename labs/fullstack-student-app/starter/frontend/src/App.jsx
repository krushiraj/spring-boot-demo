import { Routes, Route, Link } from 'react-router-dom';
import StudentList from './pages/StudentList';
import StudentForm from './pages/StudentForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/">Student Manager</Link>
        <div>
          <Link to="/">Students</Link> | <Link to="/add">Add Student</Link>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<StudentForm />} />
          <Route path="/edit/:id" element={<StudentForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
