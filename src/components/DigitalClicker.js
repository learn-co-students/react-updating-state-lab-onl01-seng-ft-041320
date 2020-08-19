// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }


    incrementTimesClicked = () => {
        const counter = this.state.timesClicked
        this.setState({
            timesClicked: counter + 1
        })
    }

    render() {
       return (
       <button onClick={this.incrementTimesClicked}>{this.state.timesClicked}</button>
       ) 
    }
}