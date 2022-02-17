import React from 'react'
import Seat from './Seat';


class FlightsSeats extends React.Component{
    state = {
        seatSelected: '',
        bookingSeat:'',
        userReserved: false,
       
    }
    handleClick = (row, columnKey) => {
        this.props.onClick(row, columnKey);
        this.setState({seatSelected : [row,columnKey]})
        this.setState({bookingSeat: this.props.letters[columnKey].toUpperCase()+""+ row})
    }

    render(){
        const {letters, seatMap} = this.props
        return(
        <div className="airplane">  
        <h1> Seat:{this.state.bookingSeat} </h1>
            <div className="seat_details ">
                
                {
                    seatMap.map((el,index)=>{
                   return <div>
                        <p className="column-letters text-center"> {letters[index].toUpperCase()}</p>
                    {
                        seatMap[index].map((el2,index2)=>{ 
                            return <Seat   
                                    column={letters[index]} 
                                    columnKey={index} 
                                    row={index2}   
                                    onClick={this.handleClick}            
                                    seat={(this.state.seatSelected[1]=== index && this.state.seatSelected[0]=== index2 ? true: false)}
                                    seatsReserved={this.props.seatsReserved}
                                    seatWasReserved={this.props.seatWasReserved}
                                />
                        })
                    }
                    </div>
                 }) 
                }
            </div>
         </div>
        )
    }

}


export default FlightsSeats 