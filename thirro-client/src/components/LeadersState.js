import React, { Component } from 'react';
import axios from 'axios';

export default class DevLeaders extends Component {
    
    state = {
        leader: []
    }

    componentDidMount() {
        let leadersApi = `https://thirro-info.herokuapp.com/dev_speakers`;
        
        axios.get(leadersApi)
    
        .then((Response) => {
            const leaders= Response.data.map(details => details.speaker_name);
    
            console.log(leaders);
    
            this.setState({
                leadersName: leaders
            })
        })

    }


    render() {
        return (
            <div>
                <h1>Thirro.DevLeaders!</h1>
                <h2>{this.state.leadersName}</h2>
            </div>
        )
    }
}
