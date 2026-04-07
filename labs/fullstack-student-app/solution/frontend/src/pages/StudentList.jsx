import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudentCard from '../components/StudentCard';
import SearchBar from '../components/SearchBar';
import { getAllStudents, deleteStudent, searchByName, filterByDepartment } from '../services/studentService';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [department, setDepartment] = useState('');
  const [loading, setLoading] = useState(true);

  const departments = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Electrical'];

  useEffect(function () {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch (err) {
      console.error('Failed to fetch students:', err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearchChange(name) {
    setSearchTerm(name);
    setDepartment('');
    if (name.trim() !== '') {
      try {
        const data = await searchByName(name);
        setStudents(data);
      } catch (err) {
        console.error('Search failed:', err);
      }
    } else {
      fetchStudents();
    }
  }

  async function handleDepartmentChange(dept) {
    setDepartment(dept);
    setSearchTerm('');
    if (dept !== '') {
      try {
        const data = await filterByDepartment(dept);
        setStudents(data);
      } catch (err) {
        console.error('Filter failed:', err);
      }
    } else {
      fetchStudents();
    }
  }

  async function handleDelete(id) {
    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (err) {
      console.error('Delete failed:', err);
    }
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
          {students.map(function (student) {
            return <StudentCard key={student.id} student={student} onDelete={handleDelete} />;
          })}
        </div>
      )}
    </div>
  );
}

export default StudentList;
