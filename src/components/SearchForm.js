import React from "react";
import FlightsSeats from "./FlightsSeats";
import Reservations from "./Reservations";
class SearchForm extends React.Component{

  state = {
    origin: '',
    destination: ''
  }

  handleOrigin = e => {
    this.setState({origin: e.target.value})
  }

  handleDestination = e => {
    this.setState({destination: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.origin}/${this.state.destination}`)
  }


  render(){
    return(
      <div>
        <h4>Search for flights</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleOrigin} placeholder="Origin" />
          <input type="text" onChange={this.handleDestination} placeholder="Destination" />
          <button>Search</button>
        </form>
      </div>
    );
  } // render()
} // class SearchForm

export default SearchForm;