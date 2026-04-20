import React from 'react';

const Dropdown = ({ options, value, onChange, disabled }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      disabled={disabled}
      style={{
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: disabled ? '#e0e0e0' : 'white',
        width: '100%',
        fontSize: '14px',
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
