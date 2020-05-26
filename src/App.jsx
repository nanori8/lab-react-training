import React from 'react';
import './App.css';

import IdCard from './components/idcard';
import Greetings from './components/greetings';
import Random from './components/random';
import BoxColor from './components/boxcolor';
import CreditCard from './components/creditcard';
import LikeButton from './components/likebutton';
import ClickablePicture from './components/clickablepicture';
import Dice from './components/dice';

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

      <Greetings lang="de" firstName="Ludwig" />
      <Greetings lang="fr" firstName="François" />

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <LikeButton />
      <LikeButton />

      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />

      <Dice />
    </div>
  );
};

export default App;
