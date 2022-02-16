import React from "react";
import axios from "axios";
import SearchForm from "./SearchForm";

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

        <SearchForm />

      </div>
    );
  } // render()
} // class BurningAirlines

export default BurningAirlines;