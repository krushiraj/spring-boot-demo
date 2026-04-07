// ============================================================
// StudentList Page
// ============================================================
// This page displays all students and integrates search/filter.
//
// Required imports:
//   import { useState, useEffect } from 'react'
//   import StudentCard from '../components/StudentCard'
//   import SearchBar from '../components/SearchBar'
//   import { getAllStudents, deleteStudent, searchStudents, getByDepartment } from '../services/studentService'
//
// Steps:
//   1. Create state: const [students, setStudents] = useState([])
//   2. Create state: const [loading, setLoading] = useState(true)
//
//   3. Create loadStudents function:
//      const loadStudents = async () => {
//        setLoading(true)
//        const data = await getAllStudents()
//        setStudents(data)
//        setLoading(false)
//      }
//
//   4. useEffect to call loadStudents on mount:
//      useEffect(() => {
//        loadStudents()
//      }, [])
//      // The empty array [] means "run once when component mounts"
//
//   5. handleDelete function:
//      const handleDelete = async (id) => {
//        if (window.confirm('Are you sure you want to delete this student?')) {
//          await deleteStudent(id)
//          loadStudents()  // Reload the list after deleting
//        }
//      }
//
//   6. handleSearch function:
//      const handleSearch = async (name) => {
//        if (name.trim()) {
//          const data = await searchStudents(name)
//          setStudents(data)
//        }
//      }
//
//   7. handleFilter function:
//      const handleFilter = async (department) => {
//        if (department) {
//          const data = await getByDepartment(department)
//          setStudents(data)
//        }
//      }
//
//   8. handleClear function:
//      const handleClear = () => {
//        loadStudents()  // Reload all students
//      }
//
//   9. Return JSX:
//      - Show "Loading students..." if loading is true
//      - Render <SearchBar onSearch={handleSearch} onFilter={handleFilter} onClear={handleClear} />
//      - If students.length === 0, show "No students found."
//      - Otherwise, map over students and render <StudentCard /> for each
//
// JSX Structure Hint:
//   <div>
//     <div className="page-header">
//       <h2>All Students</h2>
//       <p>Manage your student records</p>
//     </div>
//
//     <SearchBar onSearch={handleSearch} onFilter={handleFilter} onClear={handleClear} />
//
//     {loading ? (
//       <div className="loading">Loading students...</div>
//     ) : students.length === 0 ? (
//       <div className="empty-state">No students found.</div>
//     ) : (
//       <div className="student-grid">
//         {students.map((student) => (
//           <StudentCard key={student.id} student={student} onDelete={handleDelete} />
//         ))}
//       </div>
//     )}
//   </div>
// ============================================================

// TODO: Add imports for useState, useEffect from 'react'
// TODO: Add imports for StudentCard, SearchBar components
// TODO: Add imports for service functions


function StudentList() {
  // TODO: Step 1 — Create students state (empty array)
  // TODO: Step 2 — Create loading state (true)

  // TODO: Step 3 — Create loadStudents async function

  // TODO: Step 4 — useEffect to call loadStudents on mount

  // TODO: Step 5 — Create handleDelete async function

  // TODO: Step 6 — Create handleSearch async function

  // TODO: Step 7 — Create handleFilter async function

  // TODO: Step 8 — Create handleClear function

  return (
    // TODO: Step 9 — Return the page JSX as described above
    <div>
      <h2>Student List</h2>
      <p>Implement this page</p>
    </div>
  )
}

export default StudentList
