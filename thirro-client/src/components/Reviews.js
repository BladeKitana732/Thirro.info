import React, { Component } from 'react';
import axios from 'axios';

export default class Reviews extends Component {
    
    state = {
        review: []
    }

    componentDidMount() {
        let reviewsApi = `https://thirro-info.herokuapp.com/reviews`;
        
        axios.get(reviewsApi)
    
        .then((Response) => {
            const reviews= Response.data.map(details => details.message);
    
            console.log(reviews);
    
            this.setState({
                reviewMessage: reviews
            })
        })

    }


    render() {
        return (
            <div>
                <h1>Thirro.Reviews!</h1>
                <h2>{this.state.reviewMessage}</h2>
            </div>
        )
    }
}