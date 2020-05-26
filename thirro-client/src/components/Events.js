import React, { Component } from 'react';
import axios from 'axios';

//referencing https://github.com/BladeKitana732/Wine-API/

export default class Events extends Component {

    state = {
        event: []
    }

    componentDidMount() {
        let eventEndpoint = "https://thirro-info.herokuapp.com/events";

        axios.get(eventEndpoint) 

        .then((result) => {
            const events = result.data;

            console.log(events);
        })
    }
    


    render() {
        return (
            <div>
                <h1>Event component sanity check</h1>
            </div>
        )
    }
}
