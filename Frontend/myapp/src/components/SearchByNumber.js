import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class SearchByNumber extends Component {
    constructor(props) {
        super();
        this.state = {
            flightNo: ''
        }
    }

    displayTable() {
        let { flights } = this.props;
        // console.log(flights.flightNo)
        return (
            <tr>
                <td>{flights.flightNo}</td>
                <td>{flights.flightType}</td>
                <td>{flights.sourceCity}</td>
                <td>{flights.destinationCity}</td>
                <td>{flights.departureTime}</td>
                <td>{flights.arrivalTime}</td>
                <td>&#8377;{flights.fare}</td>
                <td><Link to={`/book/${flights.flightNo}`} param={{ flightNo: flights.flightNo }}><button className="btn btn-warning">Book</button></Link></td>
            </tr>

        )

    }


    showTable() {
        let { flights } = this.props;

        if (flights.status !== 500) {
            return (
                <div className="col-12">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Flight Number</th>
                                <th scope="col">Flight Type</th>
                                <th scope="col">Source City</th>
                                <th scope="col">Destination City</th>
                                <th scope="col">Departure Time</th>
                                <th scope="col">Arrival Time</th>
                                <th scope="col">Fare</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.displayTable()}
                        </tbody>
                    </table>
                </div>

            )
        }
        else {
            return (
                <div>
                    <div class="alert alert-danger">
                        <strong>Sorry!</strong>
                        <hr />
                        <h2> No such flight found!</h2>
                        <br />

                    </div>
                </div>
            )
        }
    }
    handleChange(e) {
        let value = e.target.value;
        //console.log(value)
        this.setState({ flightNo: value })

    }

    submitFunction(e) {
        e.preventDefault();
        let flightNo = this.state.flightNo;
        //console.log(id)
        this.props.onSubmit(flightNo);

    }


    showForm() {

        return (
            <div className="col-6">
                <form onSubmit={(e) => { this.submitFunction(e) }}>
                    <div className="form-group">
                        <label>Enter Flight Number</label>
                        <input type="text" className="form-control" id="flightNo" onChange={(e) => { this.handleChange(e) }} />
                    </div>
                    <hr />
                    <div className="form-group">
                        <button className="btn btn-danger"><i class="fa fa-search">&nbsp;</i>Search</button>
                    </div>
                </form>
            </div>
        )


    }

    render() {
        let { isDisplayTable } = this.props;
        if (isDisplayTable) {
            return (
                <div>
                    {this.showTable()}
                </div>
            )
        } else {
            return (
                <div>
                    {this.showForm()}
                </div>
            )
        }
    }
}

export default SearchByNumber;