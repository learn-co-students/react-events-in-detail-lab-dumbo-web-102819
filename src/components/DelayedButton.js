// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {
    

    callback1 = (event) => {
        event.persist();
        setTimeout(()=>{
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.callback1} /> 
        )
    }
}