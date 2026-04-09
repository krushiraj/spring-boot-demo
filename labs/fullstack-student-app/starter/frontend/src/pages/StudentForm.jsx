import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getById, create, update } from '../services/studentService';

/**
 * TODO: Build the StudentForm component (handles both Add and Edit)
 *
 * Hooks needed:
 *   const navigate = useNavigate();
 *   const { id } = useParams();    // undefined for /add, has value for /edit/:id
 *   const [form, setForm] = useState({ name: '', rollNumber: '', department: '', email: '' });
 *
 * Functions to implement:
 *   1. useEffect: if (id) { getById(id).then(data => setForm(data)); }
 *   2. handleChange(e): setForm({ ...form, [e.target.name]: e.target.value })
 *   3. handleSubmit(e): e.preventDefault(), call update(id, form) or create(form), then navigate('/')
 *
 * JSX structure:
 *   - <h2>{id ? 'Edit' : 'Add'} Student</h2>
 *   - <form> with 4 inputs (name, rollNumber, department, email)
 *   - Each input: name={fieldName} value={form.fieldName} onChange={handleChange}
 *   - Submit button + Cancel button
 */
function StudentForm() {
  // TODO: Add hooks and state

  // TODO: Add useEffect, handleChange, handleSubmit

  return (
    <div className="form-container">
      <h2>Add/Edit Student</h2>
      {/* TODO: Add form with 4 inputs and buttons */}
    </div>
  );
}

export default StudentForm;
