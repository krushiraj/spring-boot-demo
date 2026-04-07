// ============================================================
// StudentCard Component
// ============================================================
// This component displays a single student's information
// in a card format with Edit and Delete buttons.
//
// Props received:
//   - student: object with { id, name, rollNumber, department, email }
//   - onDelete: function to call when delete button is clicked
//
// Required imports:
//   import { useNavigate } from 'react-router-dom'
//
// Steps:
//   1. Get the navigate function: const navigate = useNavigate()
//   2. Return JSX with className="student-card"
//   3. Display student.name in an <h3> tag
//   4. Display rollNumber, department, email in a div with className="info"
//   5. Add Edit button: onClick={() => navigate(`/edit/${student.id}`)}
//   6. Add Delete button: onClick={() => onDelete(student.id)}
//
// JSX Structure Hint:
//   <div className="student-card">
//     <h3>{student.name}</h3>
//     <div className="info">
//       <span><strong>Roll No:</strong> {student.rollNumber}</span>
//       <span><strong>Department:</strong> {student.department}</span>
//       <span><strong>Email:</strong> {student.email}</span>
//     </div>
//     <div className="card-actions">
//       <button className="btn btn-primary" onClick={...}>Edit</button>
//       <button className="btn btn-danger" onClick={...}>Delete</button>
//     </div>
//   </div>
// ============================================================

// TODO: Add import for useNavigate from 'react-router-dom'


function StudentCard({ student, onDelete }) {
  // TODO: Step 1 — Create navigate using useNavigate()


  return (
    // TODO: Step 2 — Return the card JSX as described above
    <div>
      <p>Implement StudentCard component here</p>
    </div>
  )
}

export default StudentCard
