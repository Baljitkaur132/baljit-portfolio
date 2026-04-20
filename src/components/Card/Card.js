import React from 'react';

const Card = ({ title, children, disabled }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: disabled ? '#f0f0f0' : 'white',
        boxShadow: disabled ? 'none' : '0 2px 8px rgba(0,0,0,0.1)',
        width: '100%',
      }}
    >
      <h3 style={{ margin: '0 0 12px' }}>{title}</h3>
      {children}
    </div>
  );
};

export default Card;
