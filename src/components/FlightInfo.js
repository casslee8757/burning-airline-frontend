import React from 'react';
import axios from 'axios';



class FlightInfo extends React.Component{

  state ={
    flight: '',
    plane: '',
    origin: '',
    destination: '',
    seats: '',
  }

  componentDidMount(){
    this.performSearch();
  }

  performSearch = async () => {
    try {
      const res = await axios.get('http://localhost:3000/flights/' + this.props.match.params.id);
      console.log(res);

      this.setState({
        flight: res.data.flight.id,
        plane: res.data.plane.name,
        origin: res.data.flight.origin,
        destination: res.data.flight.destination,
        seats: res.data.available_seat

      })
      
    } catch( err ){
      console.log('Error in search AJAX: ', err);

      }
    }
  render(){
    return(
      <div>
          <h3> Flight - BA-0{this.state.flight} </h3>
          <p><strong>Airplane</strong> - {this.state.plane}</p>
          <p><strong>Origin</strong> - {this.state.origin}</p>
          <p><strong>Destination</strong> - {this.state.destination}</p>
          <p><strong>Seats Available</strong> - {this.state.seats}</p>
      </div>
    );
  }   
} 
  
  export default FlightInfo;