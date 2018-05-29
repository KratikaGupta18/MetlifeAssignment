import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class SearchByPlace extends Component {
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
                    <td>&#8377;{item.fare}</td>
                    <td><Link to={`/book/${item.flightNo}`} param={{ flightNo: item.flightNo }}><button className="btn btn-warning">Book</button></Link></td>
                </tr>

            )

        })
    }

    renderTable() {
        let { flights } = this.props;
        console.log(flights.length);
        if(flights.length!==0){
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
    }else {
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
                                <label>From &nbsp;<i class="fa fa-arrow-circle-right"></i></label>
                                <input type="text" className="form-control" id="sourceCity" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            <div className="form-group">
                                <label>To &nbsp;<i class="fa fa-arrow-circle-left"></i></label>
                                <input type="text" className="form-control" id="destinationCity" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            <hr />
                            <div className="form-group">
                                <button className="btn btn-info"><i class="fa fa-search">&nbsp;</i>Search</button>
                            </div>
                        </form>
                    </div>
                </div>
               
            )
        }
    }
}

export default SearchByPlace;