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
import LeadersState from './components/LeadersState';
import ThirdApi from './components/ThirdApi';
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
            <li>
              <Link to="/third_api">Jokes!</Link>
            </li>
          </ul>
        </nav>

        <Switch>
         <Route path="/third_api">
           <ThirdApi />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/reviews">
            <ReviewState />
          </Route>
          <Route path="/dev_speakers">
            <LeadersState />
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
