// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {

    handleClick = (evt) => {
        this.props.onReceiveCoordinates([evt.clientX, evt.clientY])
    }

    render(){
        return (
            <button onClick={this.handleClick}/>
        )
    }
}

export default CoordinatesButton