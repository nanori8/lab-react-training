import React from 'react';
import './idcard.css';

const IdCard = (props) => {
  const { lastName, firstname, gender, height, birth, picture } = props;
  let options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className="id-card">
      <div className="profile-picture">
        <img src={picture} alt="profile" />
      </div>
      <div className="id-info">
        <p>
          <strong>First Name:</strong> {firstname}
        </p>
        <p>
          <strong>Last Name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Birth:</strong> {birth.toLocaleString('en-US', options)}
        </p>
        {/* <p>Birth: {birth.toLocaleString()}</p> */}
      </div>
    </div>
  );
};

export default IdCard;
