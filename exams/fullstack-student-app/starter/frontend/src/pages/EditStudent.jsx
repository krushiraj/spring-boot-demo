// ============================================================
// EditStudent Page (Bonus)
// ============================================================
// This page is similar to AddStudent but loads existing data
// and updates instead of creating.
//
// Required imports:
//   import { useState, useEffect } from 'react'
//   import { useNavigate, useParams } from 'react-router-dom'
//   import { getStudentById, updateStudent } from '../services/studentService'
//
// Steps:
//   1. Get the student ID from URL: const { id } = useParams()
//      // useParams() reads the :id from the route /edit/:id
//
//   2. Get navigate function: const navigate = useNavigate()
//
//   3. Create form state (same as AddStudent):
//      const [formData, setFormData] = useState({
//        name: '',
//        rollNumber: '',
//        department: '',
//        email: ''
//      })
//
//   4. Create loading state: const [loading, setLoading] = useState(true)
//
//   5. useEffect to load existing student data:
//      useEffect(() => {
//        const loadStudent = async () => {
//          const data = await getStudentById(id)
//          setFormData({
//            name: data.name,
//            rollNumber: data.rollNumber,
//            department: data.department,
//            email: data.email
//          })
//          setLoading(false)
//        }
//        loadStudent()
//      }, [id])
//      // [id] means "re-run if id changes"
//
//   6. handleChange (same as AddStudent):
//      const handleChange = (e) => {
//        setFormData({
//          ...formData,
//          [e.target.name]: e.target.value
//        })
//      }
//
//   7. handleSubmit (uses updateStudent instead of createStudent):
//      const handleSubmit = async (e) => {
//        e.preventDefault()
//        await updateStudent(id, formData)
//        navigate('/')
//      }
//
//   8. Return same form as AddStudent but with title "Edit Student"
//      - Show "Loading..." if loading is true
//      - Button text: "Update Student" instead of "Add Student"
//
// JSX Structure Hint:
//   if (loading) {
//     return <div className="loading">Loading student data...</div>
//   }
//
//   return (
//     <div className="form-container">
//       <h2>Edit Student</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Same form fields as AddStudent */}
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Roll Number</label>
//           <input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Department</label>
//           <select name="department" value={formData.department} onChange={handleChange} required>
//             <option value="">Select Department</option>
//             <option value="CSE">CSE</option>
//             <option value="ECE">ECE</option>
//             <option value="MECH">MECH</option>
//             <option value="CIVIL">CIVIL</option>
//             <option value="EEE">EEE</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </div>
//         <button type="submit" className="btn btn-primary">Update Student</button>
//       </form>
//     </div>
//   )
// ============================================================

// TODO: Add import for useState, useEffect from 'react'
// TODO: Add import for useNavigate, useParams from 'react-router-dom'
// TODO: Add import for getStudentById, updateStudent from '../services/studentService'


function EditStudent() {
  // TODO: Step 1 — Get id from URL using useParams()

  // TODO: Step 2 — Get navigate function using useNavigate()

  // TODO: Step 3 — Create formData state with useState({...})

  // TODO: Step 4 — Create loading state with useState(true)

  // TODO: Step 5 — useEffect to load existing student data

  // TODO: Step 6 — Create handleChange function

  // TODO: Step 7 — Create handleSubmit async function

  // TODO: Step 8 — Return the form JSX (show loading if loading is true)
  return (
    <div>
      <h2>Edit Student</h2>
      <p>Implement this form</p>
    </div>
  )
}

export default EditStudent
