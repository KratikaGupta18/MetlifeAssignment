import React, { Component } from 'react';

class ViewBookedFlights extends Component {
  
    render() {
        let { booking } = this.props;
        console.log(booking);
        return (
            booking.map(item => {
                return(
                    <div>
                        <div className="row">
                            <div className="col-8">
                                <div className="alert alert-warning " >
                                    <span>
                                    <b>Booking Id</b> : &nbsp; {item.bookingId}
                                    </span>
                                    <br/>
                                    <span>
                                    <b>Flight Number</b> : &nbsp; {item.flightNo}
                                    </span>
                                    <br/>
                                    <span>
                                    <b>Name</b> : &nbsp; {item.name}
                                    </span>
                                    <br/>
                                    <span>
                                        <b>Age</b> : &nbsp; {item.age}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                })
          
        );
    }
}

export default ViewBookedFlights;