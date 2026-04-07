import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createStudent } from '../services/studentService';

function AddStudent() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      var studentData = {
        name: name,
        rollNumber: rollNumber,
        department: department,
        email: email
      };
      await createStudent(studentData);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="form-container">
      <h2>Add Student</h2>

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
          <button type="submit" className="btn btn-primary">Add Student</button>
          <button type="button" className="btn btn-secondary" onClick={function () { navigate('/'); }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
