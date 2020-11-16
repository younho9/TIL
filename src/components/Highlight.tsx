import React from 'react';

interface HighlightProps {
  children: React.ReactNode;
  color: string;
}

export const Highlight = ({ children, color }: HighlightProps) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}
  >
    {children}
  </span>
);
