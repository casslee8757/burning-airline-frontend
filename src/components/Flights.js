import React from "react";
import axios from "axios";

class Flights extends React.Component{

  
  componentDidMount(){
    const params = this.props.match.params
    this.performSearch(params.origin, params.destination)
  }

  performSearch = async (origin, destination) => {
    try {
      console.log(origin, destination);
      const res = await axios.get('http://localhost:3000/flights/search', {params: {origin: origin, destination: destination}});
      console.log('response', res);
      
    } catch( err ){
      console.log('Error in search AJAX: ', err);
    }
  }

  render(){
    return(
      <div>
        <p>hello</p>
      </div>
    );
  } // render()

} // class Flights

export default Flights;