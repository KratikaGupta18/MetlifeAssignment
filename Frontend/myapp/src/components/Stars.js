import React, { Component } from 'react';

class Stars extends Component {
    renderStars(n) {
        console.log(n)
        let stars = [];
        for (let i = 0; i < n; i++) {
            stars.push(<i key={i} className="fa fa-star"></i>);
        }
        return stars;
    }
    display() {
        let { rate } = this.props;
        console.log(rate);
        return rate.map((rating) => {
            return (
                <div >
                    <div className="row">
                        <div className="col-8 col-sm-10 col-md-10">
                            <div className="alert alert-info">
                                <span>
                                    {this.renderStars(rating.stars)}
                                </span>
                                <br />
                                <span>-{rating.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {

        return (
            <div>


                {this.display()}
            </div>

        );
    }
}

export default Stars;