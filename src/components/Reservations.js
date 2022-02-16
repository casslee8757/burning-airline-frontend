import React from 'react';
import FlightInfo from './FlightInfo';
import FlightsSeats from './FlightsSeats';

class Reservations extends React.Component{
        state = {
            seats: [],
            letters: [],
            seatSelected: null
        }   
        
        componentDidMount(){
            const letters = [...'abcdefghijklmnopqrstuvwxyz'];
            const seatMap = [...Array(6)].map(_ => Array(20).fill(null));
            this.setState({
                seats:seatMap,
                letters: letters
            },() => {
                console.log(this.state);
            })
        }

        handleSeat = (row, column)=> {
            console.log(row, column);
            this.setState({
                seatSelected:[row,column]
            },() => {
                console.log(this.state);
            })
        }  
        
    render(){
      
      return(
        <div>
            <FlightInfo/>
            <FlightsSeats  onClick={this.handleSeat} seatMap={this.state.seats} letters={this.state.letters} />
        </div>
      );
    } 
  
  } 
  
  export default Reservations;