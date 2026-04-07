// ============================================================
// AddStudent Page
// ============================================================
// This page provides a form to create a new student.
//
// Required imports:
//   import { useState } from 'react'
//   import { useNavigate } from 'react-router-dom'
//   import { createStudent } from '../services/studentService'
//
// Steps:
//   1. Get navigate function: const navigate = useNavigate()
//
//   2. Create form state:
//      const [formData, setFormData] = useState({
//        name: '',
//        rollNumber: '',
//        department: '',
//        email: ''
//      })
//
//   3. Create handleChange function:
//      const handleChange = (e) => {
//        setFormData({
//          ...formData,
//          [e.target.name]: e.target.value
//        })
//      }
//      // Explanation:
//      // ...formData copies all existing fields
//      // [e.target.name] dynamically picks which field to update
//      // e.target.value is the new value typed by the user
//
//   4. Create handleSubmit function:
//      const handleSubmit = async (e) => {
//        e.preventDefault()          // Prevent page reload
//        await createStudent(formData) // Call API to create student
//        navigate('/')                // Redirect to student list
//      }
//
//   5. Return a form with:
//      - <form onSubmit={handleSubmit}>
//      - Input for name (type="text", name="name", value={formData.name}, onChange={handleChange})
//      - Input for rollNumber
//      - Select dropdown for department with options: CSE, ECE, MECH, CIVIL, EEE
//      - Input for email (type="email")
//      - Submit button
//
// JSX Structure Hint:
//   <div className="form-container">
//     <h2>Add New Student</h2>
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter student name"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Roll Number</label>
//         <input
//           type="text"
//           name="rollNumber"
//           value={formData.rollNumber}
//           onChange={handleChange}
//           placeholder="e.g., 21CS001"
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Department</label>
//         <select name="department" value={formData.department} onChange={handleChange} required>
//           <option value="">Select Department</option>
//           <option value="CSE">CSE</option>
//           <option value="ECE">ECE</option>
//           <option value="MECH">MECH</option>
//           <option value="CIVIL">CIVIL</option>
//           <option value="EEE">EEE</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="student@college.edu"
//           required
//         />
//       </div>
//       <button type="submit" className="btn btn-success">Add Student</button>
//     </form>
//   </div>
// ============================================================

// TODO: Add import for useState from 'react'
// TODO: Add import for useNavigate from 'react-router-dom'
// TODO: Add import for createStudent from '../services/studentService'


function AddStudent() {
  // TODO: Step 1 — Get navigate function using useNavigate()

  // TODO: Step 2 — Create formData state with useState({...})

  // TODO: Step 3 — Create handleChange function using spread operator

  // TODO: Step 4 — Create handleSubmit async function

  return (
    // TODO: Step 5 — Return the form JSX as described above
    <div>
      <h2>Add Student</h2>
      <p>Implement this form</p>
    </div>
  )
}

export default AddStudent
