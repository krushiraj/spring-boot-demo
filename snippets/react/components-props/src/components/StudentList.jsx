import React from 'react';
import StudentCard from './StudentCard';

function StudentList({ students }) {
  if (students.length === 0) {
    return <p>No students found.</p>;
  }

  return (
    <div>
      <h2>All Students ({students.length})</h2>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          rollNumber={student.rollNumber}
          department={student.department}
          marks={student.marks}
        />
      ))}
    </div>
  );
}

export default StudentList;
