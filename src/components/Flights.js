import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom'


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
            <div class="container p-4"> 
            <div class="row">
                <div class="col-md-12">
                    <h4>Select Flight</h4> 
                </div>
            </div>
            <hr/>
            <div class="d-flex justify-content-center my-5"> 
                <div class="card col-md-8">
                    <div class="card-header d-flex justify-content-between">
                        <div> <h5>We told you already, we might land we might not</h5></div>
                        <div>  <Link className="btn btn-danger" to="/search">Go Back</Link></div>
                    </div>
                    <div class="card-body">
                    <table class="table  table-hover table-bordered">
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
                    </div>
            </div>
      </div>
      // <div>
      //   <table>
      //     <thead>
      //       <tr>
      //         <th>Date</th>
      //         <th>Flight</th>
      //         <th>From {">"} To</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {
      //         flights.flight.map(f => (
      //           <tr key = {f.id}>
      //             <td>{f.date_flight}</td>
      //             <td><Link to={`/flight/${f.id}`}>BA-0{f.id}</Link></td>
      //             <td>{f.origin} {">"} {f.destination}</td>
      //           </tr>
      //         ))
      //       }
      //     </tbody>
      //   </table>
      // </div>
    );
  } // render()

} // class Flights

export default Flights;