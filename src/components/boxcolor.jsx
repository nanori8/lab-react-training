import React from 'react';
import './boxcolor.css';

const BoxColor = (props) => {
  const {r,g,b } = props;
  const color = `${r}, ${g}, ${b}`;

  return (
    <div className="box-color" style={{ background: `rgb(${color})` }}>
      <p>rgb(${color})</p>
    </div>
  );
};

export default BoxColor;
