import React, { useState } from 'react';

const initialFormData = {
  name: '',
  rollNumber: '',
  email: '',
  department: '',
};

function validate(formData) {
  const errors = {};

  // Name: at least 2 characters
  if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  // Roll number: format like CS2024001 (2 uppercase letters + 7 digits)
  const rollPattern = /^[A-Z]{2}\d{7}$/;
  if (!rollPattern.test(formData.rollNumber)) {
    errors.rollNumber = 'Roll number must be 2 uppercase letters followed by 7 digits (e.g., CS2024001).';
  }

  // Email: basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(formData.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  // Department: must be selected
  if (!formData.department) {
    errors.department = 'Please select a department.';
  }

  return errors;
}

const inputStyle = {
  width: '100%',
  padding: '8px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
};

const errorStyle = {
  color: '#c62828',
  fontSize: '0.85rem',
  marginTop: '4px',
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Add student to the list
    setStudents([...students, { ...formData, id: Date.now() }]);

    // Clear form
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="name"><strong>Full Name</strong></label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Ananya Sharma"
            style={inputStyle}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>

        {/* Roll Number */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="rollNumber"><strong>Roll Number</strong></label>
          <input
            id="rollNumber"
            name="rollNumber"
            type="text"
            value={formData.rollNumber}
            onChange={handleChange}
            placeholder="e.g., CS2024001"
            style={inputStyle}
          />
          {errors.rollNumber && <p style={errorStyle}>{errors.rollNumber}</p>}
        </div>

        {/* Email */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="email"><strong>Email</strong></label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g., ananya@example.com"
            style={inputStyle}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>

        {/* Department */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="department"><strong>Department</strong></label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">-- Select Department --</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Electrical">Electrical</option>
          </select>
          {errors.department && <p style={errorStyle}>{errors.department}</p>}
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 24px',
            fontSize: '1rem',
            backgroundColor: '#1a237e',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Register Student
        </button>
      </form>

      {/* Registered Students List */}
      {students.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <h2>Registered Students ({students.length})</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#e8eaf6' }}>
                <th style={{ padding: '8px', textAlign: 'left', borderBottom: '2px solid #ccc' }}>Name</th>
                <th style={{ padding: '8px', textAlign: 'left', borderBottom: '2px solid #ccc' }}>Roll No.</th>
                <th style={{ padding: '8px', textAlign: 'left', borderBottom: '2px solid #ccc' }}>Email</th>
                <th style={{ padding: '8px', textAlign: 'left', borderBottom: '2px solid #ccc' }}>Department</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{s.name}</td>
                  <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{s.rollNumber}</td>
                  <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{s.email}</td>
                  <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{s.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
