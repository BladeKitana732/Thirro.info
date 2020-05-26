import React, { Component } from 'react';
import axios from 'axios';
import LeaderMapping from './LeaderMapping';

const apiBaseUrl = `https://thirro-info.herokuapp.com/`;

export default class LeadersState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            devLeader: []
        }
    }

    componentDidMount() {
        this.getSpeaker();
    }
    
    async getSpeaker(){
        try {
            const response = await axios.get(apiBaseUrl + 'dev_speakers');

            this.setState({
                devLeader: response.data
            })
        }

        catch(error) {
            console.log("Error message: " , error)
        }
    }


    render() {
        return (
            <div>
                <LeaderMapping leader={this.state.devLeader} />
            </div>
        )
    }
}

