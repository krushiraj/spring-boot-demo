import React from 'react';
import Header from './components/Header';
import StudentList from './components/StudentList';

const students = [
  { id: 1, name: 'Aarav Patel', rollNumber: 'CS2024001', department: 'Computer Science', marks: 88 },
  { id: 2, name: 'Priya Krishnan', rollNumber: 'EC2024015', department: 'Electronics', marks: 95 },
  { id: 3, name: 'Rohan Mehta', rollNumber: 'ME2024042', department: 'Mechanical', marks: 72 },
  { id: 4, name: 'Sneha Iyer', rollNumber: 'CS2024009', department: 'Computer Science', marks: 91 },
  { id: 5, name: 'Vikram Reddy', rollNumber: 'CE2024023', department: 'Civil', marks: 65 },
];

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Header>
        <h1>Student Directory</h1>
        <p>Demonstrating components and props in React</p>
      </Header>

      <StudentList students={students} />
    </div>
  );
}

export default App;
