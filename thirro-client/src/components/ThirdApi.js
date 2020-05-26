import React, { Component } from 'react';
import axios from 'axios';


//api documentation: https://sv443.net/jokeapi/v2
const programmingJokesApi= `https://sv443.net/jokeapi/v2/joke/Programming?format=json`;

export default class ThirdApi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            joke: "Click button to render random joke!"
        }

        //get joke
        this.getJoke = this.getJoke.bind(this);
    }

     getJoke() {
        axios.get(programmingJokesApi)

        .then(Response => {
            
            this.setState({
                joke: Response.data.joke
            })
            console.log(Response);
        })
        
        

        .catch(error => {
            console.log("Error message: ", error);
        })

    }


    

    render() {
        return (
            <div>
                <h1>Dev Funnies</h1>

            <h3>{'"' + this.state.joke + '"'}</h3>

            <button type="button" onClick={this.getJoke}>More Jokes!</button>
            </div>
        )
    }
}
