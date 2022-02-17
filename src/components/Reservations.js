import React from 'react';
import FlightInfo from './FlightInfo';
import FlightsSeats from './FlightsSeats';
import axios from 'axios';
class Reservations extends React.Component{
state = {
seats: [],
letters: [],
seatsSelecteds: [],
plane: '',
origin: '',
destination: '',
seatsResponse: '',
flight_id: null,
seatsReserved: [],
seatWasReserved: false,
}   
componentDidMount(){
this.performSearch();
}
performSearch = async () => {
try {
const letters = [...'abcdefghijklmnopqrstuvwxyz'];
console.log(this.props.match.params.id);
const res = await axios.get('http://localhost:3000/flights/' + this.props.match.params.id);
const seatMap = [...Array(res.data.plane.rows)].map(_ => Array(res.data.plane.columns).fill(null));
console.log(res);
this.setState({
plane: res.data.plane.name,
origin: res.data.flight.origin,
destination: res.data.flight.destination,
seatsResponse: res.data.available_seat,
flight_id: res.data.flight.id,
seats:seatMap,
letters: letters,
user: 13,
seatsReserved: res.data.reservation
})
} catch( err ){
console.log('Error in search AJAX: ', err);
}
}
handleSeat = (row, column)=> {
this.setState({
seatsSelecteds:[row,column]
},() => {
})
}  
makeReservation = async () => {
try {
console.log(this.state);
const result = await axios.post("http://localhost:3000/reservations",{
flight_id: this.state.flight_id,
user_id: 13,
row: this.state.seatsSelecteds[0],
column: this.state.seatsSelecteds[1]
}) 
this.setState({seatWasReserved: true});
console.log(result);
} catch (error) {
console.log(error);
}
}
render(){
return(
<div class="container p-10">
   <div class="row">
      <div class="col-md-12">
         <h4>Select seat and get ready </h4>
      </div>
   </div>
   <hr/>
   <div class="d-flex justify-content-center my-5">
      <div class="card col-md-10">
         <div class="card-header d-flex justify-content-between">
            <div>
               <h5> Well if you insist </h5>
            </div>
            <div> <button class="btn btn-danger" onClick={this.makeReservation}> Make booking </button></div>
         </div>
         <div class="card-body">
         <div class="row d-flex justify-content-between align-items-center">
            <div class="col-md-6">
               <FlightInfo 
                  plane={this.state.plane} 
                  origin={this.state.origin}
                  destination= {this.state.destination}
                  seatsResponse= {this.state.seatsResponse}
                  />
            </div>
            <div class="col-md-6 text-center">
                <FlightsSeats 
                seatsReserved={this.state.seatsReserved}  
                onClick={this.handleSeat} 
                seatMap={this.state.seats} 
                letters={this.state.letters} 
                seatWasReserved={this.state.seatWasReserved}
                />
            </div>

         </div>
         </div>
      </div>
   </div>
</div>
);
} 
} 
export default Reservations;