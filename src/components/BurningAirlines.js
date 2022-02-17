import React from "react";
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Home from "./Home"
import SearchForm from "./SearchForm";
import Flights from "./Flights"
import FlightInfo from "./FlightInfo";
import Reservations from "./Reservations";


class BurningAirlines extends React.Component{
  render(){
    return(
      <Router>
      <header class="nav-banner">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">Burning Airlines</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <Link to="/">Home</Link> 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="/search">Search Flights</Link>
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav" >
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Cassie</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          <hr />
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={SearchForm} />
            <Route exact path='/search/:origin/:destination' component={Flights} />
            <Route exact path='/flight/:id' component={Reservations} />
        </header>
      </Router>
    );
  } // render()
} // class BurningAirlines

export default BurningAirlines;