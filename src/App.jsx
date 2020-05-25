import React from 'react';
import './App.css';

import IdCard from './components/idcard';

const App = () => {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date(1992, 6, 14)}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date(1988, 4, 11)}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
};

export default App;
