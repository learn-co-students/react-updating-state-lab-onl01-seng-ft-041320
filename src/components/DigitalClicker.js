import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleTimesClicked = () => {
        this.setState(previousState => ({
            timesClicked: previousState.timesClicked+1
        }))
    }

    render () {
        return(
            <button onClick={this.handleTimesClicked}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker;