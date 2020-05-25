import React from 'react';
import './creditcard.css';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  return (
    <div className="cards">
      <div
        className="credit-card"
        style={{ backgroundColor: bgColor, color: color }}
      >
        <div className="type-card">
          <p>{type}</p>
        </div>
        <div className="card-number">
          <p>{number.replace(/(\d)(?=(\d{4})+$)/g, '$1 ')}</p>
        </div>
        <div className="card-expdate-bank">
          <p>
            Expires: {expirationMonth}/{expirationYear} {bank}
          </p>
        </div>
        <div className="card-owner">
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
