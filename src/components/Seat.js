import React from 'react'

class Seat extends React.Component{

    state = {
        isItReserved:false
    }

    componentDidMount(){
        const seatsReserved = this.props.seatsReserved 
        for (let i = 0; i < seatsReserved.length; i++) {
            if(seatsReserved[i].row === this.props.row && seatsReserved[i].column === this.props.columnKey){
               this.setState({isItReserved : true})
            }
        }
    }

    selectSeat = () => {
        console.log(this.props.seatWasReserved);
        this.setState({selected: [this.props.row, this.props.columnKey]})
        this.props.onClick(this.props.row, this.props.columnKey);
        
    }


    render(){

        return(
            <div
                seatReserved={this.state.isItReserved === true ? "seat-selected" : ""}
                className={this.props.seat ? "selected columns " : "columns "} 
                onClick={this.selectSeat}>
                    {this.props.column.toUpperCase()}{this.props.row}  
            </div>        
        
        ) 
    }

}

export default Seat