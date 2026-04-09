import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAll, remove, searchByName, filterByDept } from '../services/studentService';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [dept, setDept] = useState('');
  const departments = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Electrical'];

  useEffect(function () { loadStudents(); }, []);

  async function loadStudents() {
    var data = await getAll();
    setStudents(data);
  }

  async function handleSearch(name) {
    setSearch(name);
    setDept('');
    setStudents(name ? await searchByName(name) : await getAll());
  }

  async function handleDept(d) {
    setDept(d);
    setSearch('');
    setStudents(d ? await filterByDept(d) : await getAll());
  }

  async function handleDelete(id) {
    await remove(id);
    loadStudents();
  }

  return (
    <div>
      <h2>Students</h2>
      <div className="search-bar">
        <input placeholder="Search by name..." value={search}
          onChange={function (e) { handleSearch(e.target.value); }} />
        <select value={dept} onChange={function (e) { handleDept(e.target.value); }}>
          <option value="">All Departments</option>
          {departments.map(function (d) { return <option key={d} value={d}>{d}</option>; })}
        </select>
      </div>
      <table>
        <thead><tr><th>Name</th><th>Roll No</th><th>Department</th><th>Email</th><th>Actions</th></tr></thead>
        <tbody>
          {students.map(function (s) {
            return (
              <tr key={s.id}>
                <td>{s.name}</td><td>{s.rollNumber}</td><td>{s.department}</td><td>{s.email}</td>
                <td>
                  <Link to={'/edit/' + s.id} className="btn btn-primary">Edit</Link>{' '}
                  <button className="btn btn-danger" onClick={function () { handleDelete(s.id); }}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
