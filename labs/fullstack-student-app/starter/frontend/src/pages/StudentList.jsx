import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudentCard from '../components/StudentCard';
import SearchBar from '../components/SearchBar';
import { getAllStudents, deleteStudent, searchByName, filterByDepartment } from '../services/studentService';

/**
 * StudentList page - displays all students with search and filter.
 *
 * State:
 *   - students: array of student objects
 *   - searchTerm: current search input
 *   - department: currently selected department filter
 *   - loading: boolean for loading state
 *
 * Behavior:
 *   - On mount, fetch all students
 *   - When searchTerm changes, search by name (or fetch all if empty)
 *   - When department changes, filter by department (or fetch all if empty)
 *   - On delete, remove the student and refresh the list
 */
function StudentList() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [department, setDepartment] = useState('');
  const [loading, setLoading] = useState(true);

  const departments = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Electrical'];

  // TODO: Implement useEffect to fetch students on component mount
  // Hint: Call fetchStudents() inside useEffect with [] dependency array
  useEffect(function () {
    // TODO: Call a function to load all students
    // Hint: fetchStudents();
    setLoading(false);
  }, []);

  // TODO: Implement fetchStudents function
  // Hint: async function that calls getAllStudents(), then setStudents() and setLoading(false)
  async function fetchStudents() {
    // TODO: Implement this function
  }

  // TODO: Implement handleSearchChange function
  // Hint: Update searchTerm, clear department filter
  // If name is not empty, call searchByName(name) and update students
  // If name is empty, call fetchStudents()
  async function handleSearchChange(name) {
    // TODO: Implement search logic
  }

  // TODO: Implement handleDepartmentChange function
  // Hint: Update department, clear searchTerm
  // If dept is not empty, call filterByDepartment(dept) and update students
  // If dept is empty, call fetchStudents()
  async function handleDepartmentChange(dept) {
    // TODO: Implement department filter logic
  }

  // TODO: Implement handleDelete function
  // Hint: Call deleteStudent(id), then call fetchStudents() to refresh the list
  async function handleDelete(id) {
    // TODO: Implement delete logic
  }

  if (loading) {
    return <div className="loading">Loading students...</div>;
  }

  return (
    <div>
      <div className="page-header">
        <h2>Students</h2>
        <Link to="/add" className="btn btn-primary">Add Student</Link>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        department={department}
        onDepartmentChange={handleDepartmentChange}
        departments={departments}
      />

      {students.length === 0 ? (
        <div className="empty-message">No students found.</div>
      ) : (
        <div className="student-grid">
          {/* TODO: Map over students array and render a StudentCard for each */}
          {/* Hint: students.map(function(student) { return <StudentCard key={student.id} student={student} onDelete={handleDelete} />; }) */}
        </div>
      )}
    </div>
  );
}

export default StudentList;
