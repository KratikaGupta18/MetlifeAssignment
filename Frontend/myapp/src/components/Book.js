import React, { Component } from 'react';

class Book extends Component {

    constructor(props) {
        super();
        this.state = {
            // flight: {},
            isConfirmationMessage: false
        }
    }


    displayConfirmationMessage() {
        return (
            <div>
                <div className="alert alert-success">
                    <strong>Success!</strong>
                    <hr />
                    <h2> Thank You for Booking With Us!</h2>
                    <br />
                    <h3> Have a great Flight!</h3>
                </div>
            </div>
        )
    }
    confirmHandler() {
        let { isConfirmationMessage } = this.state;
        this.setState({ isConfirmationMessage: true })
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
                                    <td><button className="btn btn-danger" onClick={() => { this.confirmHandler() }}>Confirm</button></td>
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

export default Book;