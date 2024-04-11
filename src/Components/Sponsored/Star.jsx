import React from 'react';

const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <span 
      
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ cursor: 'pointer', color: 'gold', fontSize: '25px' }}
    >
      {filled ? '★' : '☆'}
    </span>
  );
};

export default Star;
