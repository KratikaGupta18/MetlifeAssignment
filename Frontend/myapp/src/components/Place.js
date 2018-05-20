import React, { Component } from 'react';

class Place extends Component {
    constructor(props) {
        super();
        this.state = {
            sourceCity: '',
            destinationCity: '',
        }
    }

    showTable(){

        let { flights } = this.props;

        return flights.map((item, idx) => {

            return (
                <tr key={idx}>
                    <td>{item.flightNo}</td>
                    <td>{item.flightType}</td>
                    <td>{item.sourceCity}</td>
                    <td>{item.destinationCity}</td>
                    <td>{item.departureTime}</td>
                    <td>{item.arrivalTime}</td>
                    <td>{item.fare}</td>
                </tr>

            )

        })
    }

    renderTable() {
        let { flights } = this.props;
        return (
            <div>
                <div>
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
                            {this.showTable()}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }

    handleChange(e) {
        let feild = e.target.id;
        console.log(feild);
        let value = e.target.value;
        console.log(value);
        this.setState({ [feild]: value });

    }

    submitFunction(e) {
        e.preventDefault();
        let sourceCity = this.state.sourceCity;
        let destinationCity = this.state.destinationCity;
        console.log(sourceCity);
        console.log(destinationCity);
        this.props.onSubmit(sourceCity, destinationCity);
    }

    render() {
        let {isTable} = this.props;
        console.log(isTable);
        if (isTable) {
            return (
                <div>
                {this.renderTable()}
            </div>
                
            );
        } else {
            return (
                <div>

                    <div className="col-6">
                        <form onSubmit={(e) => { this.submitFunction(e) }}>
                            <div className="form-group">
                                <label>From</label>
                                <input type="text" className="form-control" id="sourceCity" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            <div className="form-group">
                                <label>To</label>
                                <input type="text" className="form-control" id="destinationCity" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            <hr />
                            <div className="form-group">
                                <button className="btn btn-info">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
               
            )
        }
    }
}

export default Place;