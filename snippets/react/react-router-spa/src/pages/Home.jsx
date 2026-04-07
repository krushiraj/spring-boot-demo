import React from 'react';
import { Link } from 'react-router-dom';

const students = [
  { id: 1, name: 'Aarav Patel', department: 'Computer Science' },
  { id: 2, name: 'Priya Krishnan', department: 'Electronics' },
  { id: 3, name: 'Rohan Mehta', department: 'Mechanical' },
  { id: 4, name: 'Sneha Iyer', department: 'Computer Science' },
];

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Student Portal. Click on a student to view their details.</p>
      <div className="student-grid">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <h3>{student.name}</h3>
            <p>{student.department}</p>
            <Link to={`/students/${student.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
