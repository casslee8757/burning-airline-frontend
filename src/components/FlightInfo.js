import React from 'react';


class FlightInfo extends React.Component{
    render(){
      return(
        <div>
            <h3>Date: {this.props.info.date } </h3>
            <div>Plane:  {this.props.info.airplane } </div>
            <div>
            Destination: {this.props.info.origin }
            </div>
            <div> 
             Origin: {this.props.info.destination }
            </div>

        </div>
      );
    } 
  
  } 
    
  export default FlightInfo;