import React from 'react';

function StudentCard({ name, rollNumber, department, marks }) {
  const gradeColor = marks >= 90 ? '#2e7d32' : marks >= 75 ? '#f57f17' : '#c62828';

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '12px',
        backgroundColor: '#fafafa',
      }}
    >
      <h3 style={{ margin: '0 0 8px 0' }}>{name}</h3>
      <p style={{ margin: '4px 0' }}>
        <strong>Roll Number:</strong> {rollNumber}
      </p>
      <p style={{ margin: '4px 0' }}>
        <strong>Department:</strong> {department}
      </p>
      <p style={{ margin: '4px 0' }}>
        <strong>Marks:</strong>{' '}
        <span style={{ color: gradeColor, fontWeight: 'bold' }}>{marks}</span>
      </p>
    </div>
  );
}

export default StudentCard;
