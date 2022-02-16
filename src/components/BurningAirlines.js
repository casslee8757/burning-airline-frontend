import React from "react";
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Home from "./Home"
import SearchForm from "./SearchForm";
import Flights from "./Flights"


class BurningAirlines extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <header>
            <h1>Welcome to Burning Airlines&reg; &copy; &trade;</h1>
            <nav>
              <Link to="/">Home</Link> |{' '}
              <Link to="/search">Search Flights</Link>
            </nav>
          </header>
          <hr />

          <Home />

            <Route exact path='/search' component={SearchForm} />
            <Route exact path='/search/:origin/:destination' component={Flights} />
            



        </Router>
      </div>
    );
  } // render()
} // class BurningAirlines

export default BurningAirlines;