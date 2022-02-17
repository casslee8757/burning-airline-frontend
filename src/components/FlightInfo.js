import React from 'react';
import axios from 'axios';



class FlightInfo extends React.Component{

  render(){
    return(
      <ul class="list-group">
          <li class="list-group-item">Airplane - {this.props.plane}</li>
          <li class="list-group-item">Origin - {this.props.origin}</li>
          <li class="list-group-item">Destination - {this.props.destination}</li>
          <li class="list-group-item">Seats Available - {this.props.seatsResponse}</li>
      </ul>
    );
  }   
} 
  
export default FlightInfo;