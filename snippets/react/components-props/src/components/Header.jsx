import React from 'react';

function Header({ children }) {
  return (
    <header
      style={{
        backgroundColor: '#1a237e',
        color: '#fff',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        textAlign: 'center',
      }}
    >
      {children}
    </header>
  );
}

export default Header;
