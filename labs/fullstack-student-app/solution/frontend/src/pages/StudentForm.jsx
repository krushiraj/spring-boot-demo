import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getById, create, update } from '../services/studentService';

function StudentForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', rollNumber: '', department: '', email: '' });

  useEffect(function () {
    if (id) {
      getById(id).then(function (data) { setForm(data); });
    }
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (id) {
      await update(id, form);
    } else {
      await create(form);
    }
    navigate('/');
  }

  return (
    <div className="form-container">
      <h2>{id ? 'Edit' : 'Add'} Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Roll Number</label>
          <input name="rollNumber" value={form.rollNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Department</label>
          <input name="department" value={form.department} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Add'} Student</button>
          <button type="button" className="btn btn-secondary" onClick={function () { navigate('/'); }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
