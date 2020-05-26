import React, { Component } from 'react';
import axios from 'axios';

//referencing https://github.com/BladeKitana732/Game-Of-Fetches/blob/master/game-of-fetches/src/components/Answers.js

export default class Events extends Component {

    state = {
        event: []
    }
    
componentDidMount() {
    let eventsApi = `https://thirro-info.herokuapp.com/events`;
    
    axios.get(eventsApi)

    .then((Response) => {
        const events= Response.data.map(details => details.event_name);

        console.log(events);

        this.setState({
            eventNames: events
        })
    })
}


    render() {
        return (
            <div>
                <h1>Thirro.Events!</h1>
                <h2>{this.state.eventNames}</h2>
            </div>
        )
    }
}
