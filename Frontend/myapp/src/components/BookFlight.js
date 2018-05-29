import React, { Component } from 'react';


class BookFlight extends Component {

    constructor(props) {
        super();
        this.state = {
            // flight: {},
            isConfirmationMessage: false,
            name: '',
            age: '',
            flightNo:'',
            bookingId:''
        }
    }

    handleChange(e) {
        let field = e.target.id;
        let value = e.target.value;

        this.setState({ [field]: value })

    }
    displayConfirmationMessage() {
        let {name,bookingId}=this.state;
        return (
            <div>
                <div className="alert alert-success">
                    <strong>Success!</strong>
                    <hr />
                    <h3>Your flight was successfully booked {name}</h3>
                    <h2>Your Booking Id is: &nbsp; {bookingId}</h2>
                    <br/>
                    <br/>
                    <h3> Thank You for Booking With Us!</h3>
                    <br />
                    <h3> Have a great Flight!</h3>
                </div>
            </div>
        )
    }

    submitFunction(e){
        let { flightNo } = this.props.match.params;
        let bookingId=Math.floor((Math.random() * 100000) + 100);
        this.setState({bookingId})
        console.log(bookingId);
        e.preventDefault();
        let { isConfirmationMessage } = this.state;
        this.setState({ isConfirmationMessage: true });
        let passengerDetail={
            name:this.state.name,
            age:this.state.age,
            flightNo:flightNo,
            bookingId:bookingId,
        }
        console.log(bookingId);
       console.log(passengerDetail);
       this.props.onConfirmBook(passengerDetail);
    }
    

    render() {
        let flight = {};
        // this.settingFlight();

        let { flightNo } = this.props.match.params;
        console.log(flightNo)
        let { flights } = this.props;
        console.log(flights)
        let { isConfirmationMessage } = this.state;
        // let { flight } = this.state;
        // console.log(flight)

        let isTypeArray = Array.isArray(flights) ? true : false;
        console.log(isTypeArray)
        if (isTypeArray) {
            let flight1 = flights.find((flight) => {
                return flight.flightNo === flightNo
            })
            // console.log(this.setState({ flight }));
            // isTypeArray = null;
            Object.assign(flight, flight1);
            console.log(flight);
            // this.setState(flight);
        } else {
            Object.assign(flight, flights);

        }

        if (!isConfirmationMessage) {
            console.log(flight)
            return (
                <div>
                    <div className="col-12">
                        <table className="table table-dark">
                            <tbody>
                                <tr>
                                    <th scope="col">Flight Number</th>
                                    <td>{flight.flightNo}</td>
                                </tr>
                                <tr>
                                    <th scope="col">Flight Type</th>
                                    <td>{flight.flightType}</td>
                                </tr>
                                <tr>
                                    <th scope="col">Source City</th>
                                    <td>{flight.sourceCity}</td>
                                </tr>
                                <tr>
                                    <th scope="col">Destination City</th>
                                    <td>{flight.destinationCity}</td>
                                </tr>
                                <tr>
                                    <th scope="col">Departure Time</th>
                                    <td>{flight.departureTime}</td>
                                </tr>
                                <tr>
                                    <th scope="col">Arrival Time</th>
                                    <td>{flight.arrivalTime}</td>
                                </tr>
                                <tr>
                                    <th scope="col">Fare</th>
                                    <td>&#8377;{flight.fare}</td>
                                </tr>

                                <tr>
                                    <form onSubmit={(e) => { this.submitFunction(e) }}>
                                        <div className="form-group">
                                            <label>&nbsp;&nbsp;&nbsp;Full Name</label>
                                            <input type="text" className="form-control" id="name" onChange={(e) => { this.handleChange(e) }} />
                                        </div>
                                        <div className="form-group">
                                            <label>&nbsp;&nbsp;&nbsp;Age</label>
                                            <input type="number" className="form-control" id="age" onChange={(e) => { this.handleChange(e) }} />
                                        </div>
                                        <div className="help-block">
                                    {(this.state.age > 70||this.state.age<18) ? 'Age should be between 18-70':''}
                                </div>
                                        <div className="form-group">
                                            <button className="btn btn-danger"disabled={this.state.age > 70||this.state.age<18}><i class="fa fa-search">&nbsp;</i>Confirm</button>
                                        </div>
                       
                                </form>
                               </tr>

                                
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    {this.displayConfirmationMessage()}
                </div>
            )
        }
    }
}

export default BookFlight;