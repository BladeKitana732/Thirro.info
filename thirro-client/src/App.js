import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Events from './components/Events';
import Reviews from './components/Reviews';
import DevLeaders from './components/DevLeaders';
import Home from './components/Home';


function App() {

  return (
    <div className="App">
    
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/dev_speakers">DevLeaders</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/dev_speakers">
            <DevLeaders />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
   
    </div>
  );
}

export default App;
