import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudentById, updateStudent } from '../services/studentService';

function EditStudent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function fetchStudent() {
      try {
        var student = await getStudentById(id);
        setName(student.name);
        setRollNumber(student.rollNumber);
        setDepartment(student.department);
        setEmail(student.email);
      } catch (err) {
        setError('Failed to load student data.');
      } finally {
        setLoading(false);
      }
    }
    fetchStudent();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      var studentData = {
        name: name,
        rollNumber: rollNumber,
        department: department,
        email: email
      };
      await updateStudent(id, studentData);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
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
