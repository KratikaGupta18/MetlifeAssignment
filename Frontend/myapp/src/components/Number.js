import React, { Component } from 'react';

class Number extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            flightNo: '',
        }

    }

    showTable() {
        let { flights } = this.props;
        console.log(flights)
        return (
            <div className="col-12">
                <table className="table table-dark">
                    <tr>
                        <th scope="col">Flight Number</th>
                        <td>{flights.flightNo}</td>
                    </tr>
                    <tr>
                        <th scope="col">Flight Type</th>
                        <td>{flights.flightType}</td>
                    </tr>
                    <tr>
                        <th scope="col">Source City</th>
                        <td>{flights.sourceCity}</td>
                    </tr>
                    <tr>
                        <th scope="col">Destination City</th>
                        <td>{flights.destinationCity}</td>
                    </tr>
                    <tr>
                        <th scope="col">Departure Time</th>
                        <td>{flights.departureTime}</td>
                    </tr>
                    <tr>
                        <th scope="col">Arrival Time</th>
                        <td>{flights.arrivalTime}</td>
                    </tr>
                    <tr>
                        <th scope="col">Fare</th>
                        <td>{flights.fare}</td>
                    </tr>
                </table>
            </div>

        )
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
                        <button className="btn btn-danger">Search</button>
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

export default Number;