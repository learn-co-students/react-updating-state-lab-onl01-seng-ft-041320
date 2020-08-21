// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor (props){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = (event) => {
        this.setState((pS) => {timesClicked: pS.timesClicked++})
    }

    render(){
        console.log(this.state.timesClicked)
        return(
            <div><button onClick={this.handleClick} value={this.state.timesClicked}/></div>
        )
    }
}