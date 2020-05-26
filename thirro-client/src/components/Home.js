import React, { Component } from 'react';

//referencing userinput projects such as: https://github.com/BladeKitana732/Pawtastic_form/blob/master/pawtastic/src/components/Forms.js with crud functionality
//youtube resource: https://www.youtube.com/watch?v=N8kYlimhuLw
//other youtube resource: https://www.youtube.com/watch?v=5s8Ol9uw-yM (playlist i have watched before. used playlist as refresher)

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            topics: []
        }

        //functions/methods
        this.handleInput = this.handleInput.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.updateTopic = this.updateTopic.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);


    }

    handleInput(e) {
        this.setState({input: e.target.value});
      }

      createTopic() {
        this.setState({
            //using spread operator
          topics: [...this.state.topics, this.state.input],
          input: '',
        });
      }

      updateTopic(e) {
        const newTopic = prompt("Update:", this.state.topics[e.target.value]);
        if (newTopic === null) return;
        let topics = [...this.state.topics];
        topics[e.target.value] = newTopic;

        this.setState({
          topics: topics,
        });
      }

      deleteTopic(e) {
        let topics = [...this.state.topics];
        topics.splice(e.target.value, 1);

        this.setState({
          topics: topics,
        });
      }

    render() {
        return (
           <div>
            <div id="homePage">
                <h1>Thirro.Home!</h1>
                <h3>Where Devs voices matter!</h3>
                <p><strong>Please submit what topics you would like to add to our ever growing webpage!</strong></p>
            </div>

        <div id="topic-input">
          <input onChange={this.handleInput} value={this.state.input} />
          <button onClick={this.createTopic}>Submit</button>
        </div>

        <div id="topic-display">
          <ul>
            {this.state.topics.map((topic, index) => {
              return (
                <li>
                  <button onClick={this.updateTopic} value={index}>{topic}</button>
                  <button onClick={this.deleteTopic} value={index}>Delete Topic</button>
                </li>
              )
            })}
          </ul>
          <p>Messed up? No worries! Click on topic submitted to edit. :D</p>
        </div>

      </div>
        )
    }
}

