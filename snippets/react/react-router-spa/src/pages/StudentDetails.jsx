import React from 'react';
import { useParams, Link } from 'react-router-dom';

const studentsData = {
  1: {
    name: 'Aarav Patel',
    rollNumber: 'CS2024001',
    department: 'Computer Science',
    email: 'aarav.patel@university.edu',
    marks: 88,
    semester: 4,
  },
  2: {
    name: 'Priya Krishnan',
    rollNumber: 'EC2024015',
    department: 'Electronics',
    email: 'priya.krishnan@university.edu',
    marks: 95,
    semester: 6,
  },
  3: {
    name: 'Rohan Mehta',
    rollNumber: 'ME2024042',
    department: 'Mechanical',
    email: 'rohan.mehta@university.edu',
    marks: 72,
    semester: 3,
  },
  4: {
    name: 'Sneha Iyer',
    rollNumber: 'CS2024009',
    department: 'Computer Science',
    email: 'sneha.iyer@university.edu',
    marks: 91,
    semester: 5,
  },
};

function StudentDetails() {
  const { studentId } = useParams();
  const student = studentsData[studentId];

  if (!student) {
    return (
      <div>
        <h2>Student Not Found</h2>
        <p>No student exists with ID: {studentId}</p>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{student.name}</h1>
      <table className="details-table">
        <tbody>
          <tr>
            <th>Roll Number</th>
            <td>{student.rollNumber}</td>
          </tr>
          <tr>
            <th>Department</th>
            <td>{student.department}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{student.email}</td>
          </tr>
          <tr>
            <th>Semester</th>
            <td>{student.semester}</td>
          </tr>
          <tr>
            <th>Marks</th>
            <td>{student.marks}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/" className="btn" style={{ marginTop: '16px', display: 'inline-block' }}>
        Back to Home
      </Link>
    </div>
  );
}

export default StudentDetails;
