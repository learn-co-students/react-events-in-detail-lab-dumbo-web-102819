// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
    
    handleClick = (e) => {
        console.log(e.clientX, e.clientY)
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return <button onClick={this.handleClick}>Coordinate</button>
    }
}

export default CoordinatesButton