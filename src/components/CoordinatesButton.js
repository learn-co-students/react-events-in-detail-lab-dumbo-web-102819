// Code CoordinatesButton Component Here

import React from 'react'

export default class CoordinatesButton extends React.Component {
    
    makeArray = (event) => {
        let newArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(newArray)
    }
    render () {
        return (
            <button onClick={this.makeArray} /> 
        )
    }

}