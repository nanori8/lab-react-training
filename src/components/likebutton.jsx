import React, { Component } from 'react';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>{this.state.count}Like!</button>
      </div>
    );
  }
}

export default LikeButton;
