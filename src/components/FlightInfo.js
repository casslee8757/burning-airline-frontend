import React from 'react';
import axios from 'axios';



class FlightInfo extends React.Component{

  render(){
    return(
      <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center"><h5> Airplane </h5><h5>{this.props.plane}</h5> </li>
          <li class="list-group-item d-flex justify-content-between align-items-center"><h5>Origin</h5><h5>{this.props.origin}</h5></li>
          <li class="list-group-item d-flex justify-content-between align-items-center"><h5>Destination </h5><h5>{this.props.destination}</h5></li>
          <li class="list-group-item d-flex justify-content-between align-items-center"><h5>Seats Available </h5> <h5>{this.props.seatsResponse}</h5></li>
      </ul>
    );
  }   
} 
  
export default FlightInfo;