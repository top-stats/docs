import React from 'react';

export default function Highlight({children, color}) {
  return (
    <span
      style={{
        fontSize: '22px',
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '2px',
      }}>
      {children}
    </span>
  );
}
