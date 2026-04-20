import React from 'react';

const Button = ({ label, backgroundColor, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      style={{
        padding: '10px 20px',
        borderRadius: '4px',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        color: 'white',
        backgroundColor: disabled ? 'gray' : backgroundColor || 'blue',
        fontSize: '14px',
        fontWeight: 'bold',
      }}
    >
      {label}
    </button>
  );
};

export default Button;
