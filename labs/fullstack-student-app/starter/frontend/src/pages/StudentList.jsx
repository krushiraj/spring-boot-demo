import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAll, remove, searchByName, filterByDept } from '../services/studentService';

/**
 * TODO: Build the StudentList component
 *
 * State needed:
 *   const [students, setStudents] = useState([]);
 *   const [search, setSearch] = useState('');
 *   const [dept, setDept] = useState('');
 *
 * Departments array: ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Electrical']
 *
 * Functions to implement:
 *   1. loadStudents() - call getAll(), then setStudents(data)
 *   2. useEffect to call loadStudents() on mount
 *   3. handleSearch(name) - setSearch(name), setDept(''), then call searchByName or getAll
 *   4. handleDept(d) - setDept(d), setSearch(''), then call filterByDept or getAll
 *   5. handleDelete(id) - call remove(id), then loadStudents()
 *
 * JSX structure:
 *   - <h2>Students</h2>
 *   - Search input + department <select> in a div.search-bar
 *   - <table> with thead (Name, Roll No, Department, Email, Actions)
 *   - tbody: students.map() -> <tr> with <td>s and Edit link + Delete button
 */
function StudentList() {
  // TODO: Add state variables

  // TODO: Add useEffect and handler functions

  return (
    <div>
      <h2>Students</h2>
      {/* TODO: Add search input and department select */}
      {/* TODO: Add table with student rows */}
    </div>
  );
}

export default StudentList;
