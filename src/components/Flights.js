import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import FlightInfo from "./FlightInfo";


class Flights extends React.Component{

  state = {

    plane: [],
    flight: [],
  }

  
  componentDidMount(){
    const params = this.props.match.params
    this.performSearch(params.origin, params.destination)
  }

  performSearch = async (origin, destination) => {
    try {
      console.log(origin, destination);
      const res = await axios.get('http://localhost:3000/flights/search', {params: {origin: origin, destination: destination}});

      this.setState({flight: res.data.flight, plane: res.data.plane})
      
    } catch( err ){
      console.log('Error in search AJAX: ', err);
      this.setState({ error: err });

    }
  }

  render(){
    const flights = this.state;
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Flight</th>
              <th>From {">"} To</th>
            </tr>
          </thead>
          <tbody>
            {
              flights.flight.map(f => (
                <tr key = {f.id}>
                  <td>{f.date_flight}</td>
                  <td><Link to={`/flight/${f.id}`}>BA-0{f.id}</Link></td>
                  <td>{f.origin} {">"} {f.destination}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  } // render()

} // class Flights

export default Flights;