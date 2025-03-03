// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    delay = (event) => {
        event.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, event)
    }
    
    render() {
        return(
            <button onClick={this.delay}>Delayed Button</button>
        )
    }
}