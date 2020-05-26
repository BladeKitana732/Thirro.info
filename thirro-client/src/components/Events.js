import React, { Component } from 'react';
import axios from 'axios';

//referencing https://github.com/BladeKitana732/Wine-API/

export default class Events extends Component {

    constructor(){
        super();

        this.state = {
            event: []
        }
    }

    async componentDidMount() {
        const response = await axios.get("https://thirro-info.herokuapp.com/events");

        const events = response.data;

        console.log(events);
        // this.setState ({

        // })

   
    }
    


    render() {
        return (
            <div>
                <h1>Thirro.Events!</h1>
               
            </div>
        )
    }
}
