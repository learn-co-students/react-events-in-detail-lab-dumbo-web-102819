// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

    handleClick = (event) => {
        setTimeout(() => {
            event.persist()
            this.props.onDelayedClick(event)
        },this.props.delay)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        );
    }
}

export default DelayedButton;