import React from 'react';

const Label = ({ text, color, disabled = false }) => {
  return (
    <label
      style={{ fontSize: '16px', color: disabled ? 'gray' : color || 'black' }}
    >
      {text}
    </label>
  );
};

export default Label;
