import React from 'react';

 class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }

    handleClick = () => {
        this.setState(prevState => {
            return {timesClicked: prevState.timesClicked + 1}
        }, () => console.log(this.state.timesClicked));
    }

    render () {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
 }
 export default DigitalClicker;