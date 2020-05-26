import React from 'react';
import './App.css';
import axios from 'axios';


function App() {
  async function backendInfoTest() {
    const response = await axios.get(`http://localhost:8080/events`);
    console.log(response.data);

  }
  return (
    <div className="App">
    <button onClick={backendInfoTest}>Click me to render api you just made! :D</button>
   
    </div>
  );
}

export default App;
