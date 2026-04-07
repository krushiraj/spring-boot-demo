import React from 'react';
import { Link } from 'react-router-dom';

/**
 * StudentCard component - displays a single student's information.
 *
 * Props:
 *   - student (object): { id, name, rollNumber, department, email }
 *   - onDelete (function): called with student.id when delete button is clicked
 */
function StudentCard({ student, onDelete }) {
  // TODO: Render a student card with:
  // 1. Student name as <h3>
  // 2. Roll Number, Department, and Email as <p> tags
  //    Example: <p><span>Roll Number:</span> {student.rollNumber}</p>
  // 3. Action buttons in a <div className="card-actions">:
  //    - An Edit button: <Link to={`/edit/${student.id}`} className="btn btn-primary">Edit</Link>
  //    - A Delete button: <button onClick={() => onDelete(student.id)} className="btn btn-danger">Delete</button>
  // Hint: Wrap everything in <div className="student-card">

  return (
    <div className="student-card">
      {/* TODO: Display student info and action buttons here */}
    </div>
  );
}

export default StudentCard;
