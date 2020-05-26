import React, { Component } from 'react';
import axios from 'axios';
import EventMapping from './EventMapping';

const apiBaseUrl = `https://thirro-info.herokuapp.com/`;

export default class EventState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: [],
        }
    }

    componentDidMount() {
        this.getEvent();
    }

    async getEvent() {
        try {
            const response = await axios.get(apiBaseUrl + 'events');

            this.setState({
                event: response.data
            })
        }

        catch(error){
            console.log("Error message: " , error)
        }
    }
    
    render() {
        return (
            <div>
                <EventMapping events={this.state.event}/>
            </div>
        )
    }
}

