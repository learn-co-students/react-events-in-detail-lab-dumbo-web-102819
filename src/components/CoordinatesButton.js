import React from 'react';

export default class CoordinatesButton extends React.Component {
    handleClick =(evt) => {
        
        let x=evt.clientX
        let y=evt.clientY
       this.props.onReceiveCoordinates([x, y])
       
    }
    render() {
        return <button onClick={this.handleClick}></button>
    }
}
