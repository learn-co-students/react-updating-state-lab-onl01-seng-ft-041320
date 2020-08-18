import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

      resolutionClick = () => {
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

    bitrateClick = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            bitrate: 12
          }
        })
      }

      render(){
          return (
              <div>
                 <button onClick={this.resolutionClick} className="resolution">Resolution</button>
                <button onClick={this.bitrateClick} className="bitrate">Bitrate</button> 
              </div>
          )
      }
}