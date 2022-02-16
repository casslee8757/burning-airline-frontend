import React from "react";
import axios from "axios";
import {HashRouter as Router, Route} from 'react-router-dom'
import SearchForm from "./SearchForm";
import Flights from "./Flights"

class BurningAirlines extends React.Component{
  render(){
    return(
      <div>
        <h2>
          Burning Airlines
        </h2>
        <ul>
          <li>Search Link</li>
          <li>User Link</li>
        </ul>

        <Router>

          <Route path='/' component={SearchForm} />
          <Route exact path='/search/:searchText' component={Flights} />

        </Router>

      </div>
    );
  } // render()
} // class BurningAirlines

export default BurningAirlines;