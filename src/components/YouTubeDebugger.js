import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleOnClickBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }) 
    }

    handleOnClickResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                ...this.state.settings.video,
                resolution: '720p'
                }
            }
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.handleOnClickBitrate} className="bitrate">Change Bitrate</button>
                <button onClick={this.handleOnClickResolution} className="resolution">Change Resolution</button>
            </div>
        )
    }


}

export default YouTubeDebugger;