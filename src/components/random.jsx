import React from 'react';
import './random.css';

const Random = (props) => {
  const {min, max} = props;
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
