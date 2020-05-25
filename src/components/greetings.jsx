import React from 'react';
import './greetings.css';

const Greetings = (props) => {
  const lang = props.lang;
  const firstName = props.firstName;

  let greetingsLanguage;

  switch (lang) {
    case 'en':
      greetingsLanguage = 'Hello ';
      break;
    case 'de':
      greetingsLanguage = 'Hallo ';
      break;
    case 'es':
      greetingsLanguage = 'Hola ';
      break;
    case 'fr':
      greetingsLanguage = 'Bonjour ';
      break;
    default:
      greetingsLanguage = 'Hey ';
      break;
  }
  return (
    <div className="greet-card">
      <p>{greetingsLanguage}{firstName}</p>
    </div>
  );
};

export default Greetings;
