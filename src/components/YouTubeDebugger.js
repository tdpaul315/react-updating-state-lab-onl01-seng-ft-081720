import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor() {
            super(); 
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
    

        bitrateChange = () => {
           this.setState({
               settings: {
               ...this.state.settings, 
               bitrate: 12
               }
            });
        }
        

        resolutionChange = () => {
            this.setState({
                settings: {
                ...this.state.settings,
                    video: {
                    ...this.state.video,
                    resolution:   '720p'
                    }
                }
            });
            
        }

    render() {
        return (
            <div>
            <button className='bitrate' onClick={this.bitrateChange}>Change My Bitrate</button>
            <button className='resolution' onClick={this.resolutionChange}>Change My Resolution</button>
            </div>
        );
    }
}

export default YouTubeDebugger;
