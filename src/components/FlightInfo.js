import React from 'react';
import axios from 'axios';



class FlightInfo extends React.Component{

  state ={
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
          <h3> Flight </h3>
          <p>Airplane - {this.state.plane}</p>
          <p>Origin - {this.state.origin}</p>
          <p>Destination - {this.state.destination}</p>
          <p>Seats Available - {this.state.seats}</p>
      </div>
    );
  }   
} 
  
  export default FlightInfo;