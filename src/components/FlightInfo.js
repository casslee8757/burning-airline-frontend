import React from 'react';
import axios from 'axios';



class FlightInfo extends React.Component{

  render(){
    return(
      <div>
          <h3> Flight - BA-0{this.props.flight.id} </h3>
          <p>Airplane - {this.props.plane}</p>
          <p>Origin - {this.props.origin}</p>
          <p>Destination - {this.props.destination}</p>
          <p>Seats Available - {this.props.seatsResponse}</p>
      </div>
    );
  }   
} 
  
export default FlightInfo;