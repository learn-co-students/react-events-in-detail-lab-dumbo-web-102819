import React, { Component } from 'react';

class CoordinatesButton extends Component {

  handleClick= (button) => {
    let mouseCoords = [button.clientX, button.clientY]
    this.props.onReceiveCoordinates(mouseCoords)
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    );
  }

}

export default CoordinatesButton;
