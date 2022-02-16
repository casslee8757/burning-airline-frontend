import React from "react";
import axios from "axios";
import FlightDetails from "./FlightDetails"
import {HashRouter as Link, Route, Router} from 'react-router-dom'


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

      console.log(res.data);
      console.log(res.data.plane[0].name);

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
                  <td>{this.handleClick}>BA-0{f.id}</td>
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