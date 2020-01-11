import React, { Component } from 'react';

class DelayedButton extends Component {

  handleClick = (click) => {
    click.persist() //CHeated here.
    setTimeout(() => {
      this.props.onDelayedClick(click)
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    );
  }

}

export default DelayedButton;
