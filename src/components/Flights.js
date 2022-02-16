import React from "react";
import axios from "axios";

class Flights extends React.Component{

  state = {
   flights: [],
   error: null
  }

  
  componentDidMount(){
    const params = this.props.match.params
    this.performSearch(params.origin, params.destination)
  }

  performSearch = async (origin, destination) => {
    try {
      console.log(origin, destination);
      const res = await axios.get('http://localhost:3000/flights/search', {params: {origin: origin, destination: destination}});
      console.log('response', res); 
      this.setState({ flights: res.data });
      
    } catch( err ){
      console.log('Error in search AJAX: ', err);
      this.setState({ error: err });

    }
  }

  render(){

    const flights = this.state;


    return(
      <div>
        <p>hello</p>

        
        <p>Destination</p>
          

        




      </div>
    );
  } // render()

} // class Flights

export default Flights;