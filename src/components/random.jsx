import React from 'react';
import './random.css';

const Random = (props) => {
  const min = props.min;
  const max = props.max;
  const randomNumber = Math.floor(Math.random() * max);

  return (
    <div className="random-card">
      <p>
        Random value between {min} and {max} => {randomNumber}
      </p>
    </div>
  );
};

export default Random;
