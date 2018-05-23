import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, BrowserRouter, withRouter, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Place from './components/Place';
import Number from './components/Number';
import Rate from './components/Rate';
import Book from './components/Book';
import 'font-awesome/css/font-awesome.css';


class App extends Component {
  constructor(props){
    super();
    this.state={
      flights:[],
      isShowTable:false,
      isDisplayTable:false,
      rate:[
        {stars:5}
      ]
    }
  }

// componentDidMount(){
//   let { flights } = this.state;
//   let api = "http://localhost:8089/api/flights";
//   let promise = fetch(api);
//   promise
//     .then(response => response.json())
//     .then(flights => {
//       this.setState({ flights });
//       // console.log(flights);
//     });
// }

  handleSubmitFlightNumber(flightNo){
    let { flights } = this.state;
    console.log(flightNo);
 
    let api = `http://localhost:8089/api/flights/${flightNo}`;
    let promise = fetch(api);
    promise
        .then(response => response.json())
        .then(flights => {
            this.setState({flights});
            this.setState({isDisplayTable:true});
            console.log(flights);
        });
  }



  handleSubmit(sourceCity,destinationCity){
    console.log(sourceCity);
    console.log(destinationCity);

    let { flights } = this.state;
    console.log(flights);
 
    let api = `http://localhost:8089/api/flights/${sourceCity}/${destinationCity}`;
    let promise = fetch(api);
    promise
        .then(response => response.json())
        .then(flights => {
            this.setState({ flights });
            this.setState({isShowTable:true});
            console.log(flights);
        });
  }
  handleRate(newStars){
    let { rate } = this.state;
    rate = rate.concat(newStars);
    this.setState({ rate });
    alert("Thank you for rating!")
  }

  render() {

    let isTable= this.state.isShowTable;
    let isDisplayTable=this.state.isDisplayTable;

    console.log(isTable);
    
    let {flights,rate}=this.state;
    
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light fill" style={{ "backgroundColor": "#e3f2fd" }}>
          <Link className="navbar-brand" to="/"><b style={{ "fontSize": "40px" }}>Flight Booking Portal</b></Link>
          <p><i>Instant Flight Booking Service....</i></p>
        </nav>
        <hr />
        
          <div className="row">
          <div className="col-3 col-sm-3 col-3">
            <nav className="navbar navbar-dark bg-light navbar-justified">
              <ul className="nav mr-auto">
              <li className="nav-item">
                  <Link className="nav-link" to="/about"><i className="fa fa-info-circle">&nbsp;</i>About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/place"><i className="fa fa-plane">&nbsp;</i>Search Flights By Place</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/number"><i className="fa fa-plane">&nbsp;</i>Search Flights By Flight Number</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/rate"><i className="fa fa-comment">&nbsp;</i>Rate Us</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-9 col-sm-9 col-9">
          <Route exact path="/" component={Home}  />
          <Route path="/about" component={About} />
          <Route path="/place" render={(props)=><Place {...props} flights={flights} isTable={isTable} onSubmit={(sourceCity,destinationCity)=>this.handleSubmit(sourceCity,destinationCity)}/>}  />
          <Route path="/number" render={(props)=><Number {...props} flights={flights} isDisplayTable={isDisplayTable} onSubmit={(flightNo)=>this.handleSubmitFlightNumber(flightNo)}/>}/>
          <Route path="/rate"  render={(props)=><Rate {...props} rate={rate} onRate={(newStars)=>{this.handleRate(newStars)}}/>} />
         <Route path="/book/:flightNo" render={(props)=><Book {...props} flights={flights}/>}/>
          </div>

        </div>

      </div>
    );
  }
}
export default withRouter(App);
