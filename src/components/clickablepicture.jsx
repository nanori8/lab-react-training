import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor() {
    super();
    this.state = {
      clickImg: false,
    };
  }

  changePicture = () => {
    this.setState({
      clickImg: !this.state.clickImg,
    });
  };

  render() {
    return (
      <img
        onClick={this.changePicture}
        src={(this.state.clickImg && this.props.imgClicked) || this.props.img}
        alt=""
      />
    );
  }
}

export default ClickablePicture;
