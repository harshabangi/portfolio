import React, {Component} from 'react'
import {BrowserRouter as router}  from 'react-router-dom'

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            b: false,
            count: 0
        }
        this.toggle = this.toggle.bind(this);
        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);
    }

    
    toggle() {
        const currentState = this.state.b;
        this.setState({b: !currentState})
    }

    increment() {
        this.setState({count: this.state.count + 1})
    }

    reset() {
        this.setState({count: 0})
    }
    render() {
        return (
            <div> 
                <p>{this.state.count}</p>
                <button onClick = {this.toggle}> readMore</button>
                <button onClick = {this.increment}> counter</button>
                <button onClick = {this.reset}> reset</button>
            </div>
        )
    }
}
export default header;