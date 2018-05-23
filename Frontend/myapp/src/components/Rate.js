import React, { Component } from 'react';
import Stars from './Stars';

class Rate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            stars: 5,
            name:''
        };
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen, stars: 5 });
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
        this.toggleForm();

    }

    renderRating() {
        let { rate } = this.props;
        return rate.map((rate, idx) => {
            return <Stars key={idx} rate={rate} />
        });
    }

    render() {
        let n = this.state.stars;
        return (
            <div>
            <div>
                {this.renderRating()}
            </div>
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
                                    {this.state.stars > 5 ? 'Rate out of 5' : ''}
                                </div>
                        <button disabled={this.state.stars > 5} className="btn btn-secondary">Rate</button>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Rate;