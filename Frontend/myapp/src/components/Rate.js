import React, { Component } from 'react';
import Stars from './Stars';

class Rate extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
            stars: 5,
            name:'',
        };
    }
 
    handleChange(e) {
        let feild=e.target.id;
        let value = e.target.value;
        this.setState({ [feild]: value })
        console.log(value);
    }

    handleForm(e) {
        e.preventDefault();
        let newStars = {
            stars: this.state.stars,
            name:this.state.name
        };
        console.log(newStars)
        this.props.onRate(newStars);
    }
    render() {
        let n = this.state.stars;
        return (
            <div>
            <div className="card bg-info text-white col-6">
                <div className="card-header"><b>Rate us</b></div>
                <div className="card-body">
                    <form onSubmit={(e) => { this.handleForm(e) }}>
                        <div className="form-group">
                            <label><b>Stars</b></label>
                            <input className="form-control"
                                id="stars"
                                onChange={(e) => { this.handleChange(e) }}
                                value={this.state.stars} />

                        </div>
                        <div className="form-group">
                            <label><b>Name</b></label>
                            <input className="form-control"
                                id="name"
                                onChange={(e) => { this.handleChange(e) }}
                                value={this.state.name} />

                        </div>
                        <div className="help-block">
                                    {(this.state.stars > 5||this.state.stars<1) ? 'Give stars between 1 to 5' : ''}
                                </div>
                        <button disabled={this.state.stars > 5||this.state.stars<1} className="btn btn-secondary">Rate</button>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Rate;