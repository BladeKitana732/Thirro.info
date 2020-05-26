import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from './components/Logo';
import ReviewState from './components/ReviewState';
import Events from './components/EventState';
import Home from './components/Home';
import DevLeaders from './components/DevLeaders';
//resource for switch/navbar etc
// https://reacttraining.com/react-router/web/guides/quick-start



function App() {

  return (
    
    <Router>
      <div id="navContainer">
        <nav className="navbar">
          <ul>
          <Logo />
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
            <ReviewState />
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
   
  );
}

export default App;
