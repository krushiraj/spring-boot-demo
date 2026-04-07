import React from 'react';
import { Link } from 'react-router-dom';

function StudentCard({ student, onDelete }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p><span>Roll Number:</span> {student.rollNumber}</p>
      <p><span>Department:</span> {student.department}</p>
      <p><span>Email:</span> {student.email}</p>
      <div className="card-actions">
        <Link to={'/edit/' + student.id} className="btn btn-primary">Edit</Link>
        <button onClick={function () { onDelete(student.id); }} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default StudentCard;
