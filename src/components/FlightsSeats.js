import React from 'react'
import Seat from './Seat';


class FlightsSeats extends React.Component{
     
    handleClick = (row, columnKey) => {
        this.props.onClick(row, columnKey);
    }

    render(){
        const {letters, seatMap} = this.props
        return(
        <div className="airplane">
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