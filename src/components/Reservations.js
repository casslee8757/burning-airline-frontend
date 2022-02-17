import React from 'react';
import FlightInfo from './FlightInfo';
import FlightsSeats from './FlightsSeats';
import axios from 'axios';

class Reservations extends React.Component{
        state = {
            seats: [],
            letters: [],
            seatsSelecteds: [],
            user:null
        }   
        info ={
            date:'212',
            origin:'asds',
            destination: 'sds',
            airplane: "boeing",
        }
        componentDidMount(){
            const letters = [...'abcdefghijklmnopqrstuvwxyz'];
            const seatMap = [...Array(6)].map(_ => Array(20).fill(null));
            this.setState({
                seats:seatMap,
                letters: letters,
                user: 13
            },() => {
                console.log(this.state);
            })
        }
        handleSeat = (row, column)=> {
            this.setState({
                seatsSelecteds:[row,column]
            },() => {
                console.log(this.state);
            })
        }  

       

        makeReservation = async () => {
            try {
                console.log(this.state);
               const result = await axios.post("http://localhost:3000/reservations",{
                    flight_id: 10,
                    user_id: 13,
                    row: this.state.seatsSelecteds[0],
                    column: this.state.seatsSelecteds[1]
               }) 
               console.log(result);
            } catch (error) {
                console.log(error)
            }
        }

       
        
    render(){
      return(
        <div>
            <FlightInfo info={this.info} />
            <button onClick={this.makeReservation}> Make booking </button> 
            <FlightsSeats  onClick={this.handleSeat} seatMap={this.state.seats} letters={this.state.letters} />
        </div>
      );
    } 
  
  } 
  
  export default Reservations;