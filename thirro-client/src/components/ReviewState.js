import React, { Component } from 'react';
import axios from 'axios';
import ReviewMapping from './ReviewMapping';

const apiBaseUrl = `https://thirro-info.herokuapp.com/`;

export default class ReviewState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: [],
        }
    }

    componentDidMount() {
        this.getMessage();
    }

    async getMessage() {
        try {
            const response = await axios.get(apiBaseUrl + 'reviews');

            this.setState({
                message: response.data
            })
        }

        catch(error){
            console.log("Error message: " , error)
        }
    }
    
    render() {
        return (
            <div>
                <ReviewMapping messages={this.state.message}/>
            </div>
        )
    }
}
 //referencing https://github.com/angeljuarez77/fullstack-we-lit from office hours :D