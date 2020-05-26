import React, { Component } from 'react';
import './dice.css';

class Dice extends Component {
  constructor() {
    super();
    this.state = {
      imgEmpty: 'img/dice-empty.png',
      dice: [
        { img: 'img/dice1.png' },
        { img: 'img/dice2.png' },
        { img: 'img/dice3.png' },
        { img: 'img/dice4.png' },
        { img: 'img/dice5.png' },
        { img: 'img/dice6.png' },
      ],
      randomDice: 'img/dice3.png',
    };
  }

  randomizeDice = () => {
    const dice = [...this.state.dice];
    this.setState({
      randomDice: this.state.imgEmpty,
    });
    console.log('dice', this.state.dice);

    setTimeout(() => {
      dice.sort(() => 0.5 - Math.random());
      this.setState({
        randomDice: dice[0].img,
      });
    }, 1000);
  };

  render() {
    return (
      <img
        className="img-dice"
        onClick={this.randomizeDice}
        src={this.state.randomDice}
        alt="dice-pic"
      />
    );
  }
}

export default Dice;
