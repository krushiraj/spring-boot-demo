import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudentById, updateStudent } from '../services/studentService';

/**
 * EditStudent page - form to edit an existing student.
 *
 * State:
 *   - name, rollNumber, department, email: form field values
 *   - error: error message string
 *   - loading: boolean for loading state
 *
 * Behavior:
 *   - On mount, fetch the student by ID from the URL params
 *   - Populate the form fields with fetched data
 *   - On form submit, call updateStudent with the updated data
 *   - On success, navigate to "/"
 */
function EditStudent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // TODO: Implement useEffect to fetch student data on mount
  // Hint: Call getStudentById(id), then set form fields with the result
  // Hint: Set loading to false after data is fetched
  useEffect(function () {
    // TODO: Fetch student by ID and populate form fields
    // Hint: async function fetchStudent() { ... }
    // Hint: Call fetchStudent() here
    setLoading(false);
  }, [id]);

  // TODO: Implement handleSubmit function
  // Hint: Prevent default, create updated student object, call updateStudent(id, data)
  // Hint: Navigate to '/' on success, set error on failure
  async function handleSubmit(e) {
    e.preventDefault();
    // TODO: Implement update logic
  }

  if (loading) {
    return <div className="loading">Loading student...</div>;
  }

  return (
    <div className="form-container">
      <h2>Edit Student</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={function (e) { setName(e.target.value); }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rollNumber">Roll Number</label>
          <input
            type="text"
            id="rollNumber"
            value={rollNumber}
            onChange={function (e) { setRollNumber(e.target.value); }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={function (e) { setDepartment(e.target.value); }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={function (e) { setEmail(e.target.value); }}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Update Student</button>
          <button type="button" className="btn btn-secondary" onClick={function () { navigate('/'); }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditStudent;
