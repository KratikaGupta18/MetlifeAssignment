import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, BrowserRouter, withRouter, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SearchByPlace from './components/SearchByPlace';
import SearchByNumber from './components/SearchByNumber';
import Rate from './components/Rate';
import BookFlight from './components/BookFlight';
import 'font-awesome/css/font-awesome.css';
import Stars from './components/Stars';
import ViewBookedFlights from './components/ViewBookedFlights';


class App extends Component {
  constructor(props){
    super();
    this.state={
      flights:[],
      isShowTable:false,
      isDisplayTable:false,
      
      rate:[],
      isConfirmationMessage: false,
      booking:[]
    }
  }

componentDidMount(){
  let { rate } = this.state;
  let api = "http://localhost:9999/rates";
  let promise = fetch(api);
  promise
    .then(response => response.json())
    .then(rate => {
      this.setState({ rate });
      // console.log(flights);
    });
    let { booking } = this.state;
  fetch( "http://localhost:7777/booking")
      .then(response => response.json())
      .then(booking => {
        this.setState({ booking });
        console.log(booking);
      });

}

handleConfirmBooking(passengerDetail){
  console.log(passengerDetail);
  let api = `http://localhost:7777/booking`;
  fetch(api, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(passengerDetail)
  }).then(response => response.json()).catch(error => console.error('Error:', error))
    .then(response =>{ alert("Thank You for Booking");
          this.setState({isConfirmationMessage:true})
  })
    }


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
            
            console.log(flights.status);
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
  handleRate(newStars,isRefresh){
    let api = `http://localhost:9999/rates`;
    fetch(api, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStars)
    }).then(response => response.json()).catch(error => console.error('Error:', error))
      .then(response =>  {alert("Thank you for rating!");
                          isRefresh:true;
      });
      this.props.history.push("/stars");
  }

  render() {

    let isTable= this.state.isShowTable;
    let isDisplayTable=this.state.isDisplayTable;

    console.log(isTable);
    
    let {flights,rate,booking}=this.state;
    console.log(rate);
    
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light fill">
          <Link className="navbar-brand" to="/"><b style={{ "fontSize": "40px" }}>Flight Booking Portal</b></Link>
          <p><i>Instant Flight Booking Service....</i></p>
        </nav>
        <hr />
        
          <div className="row">
          <div className="col-3 col-sm-3 col-3">
            <nav className="navbar navbar-dark bg-light navbar-justified section">
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
                <li className="nav-item">
                  <Link className="nav-link" to="/bookedFlights"><i className="fa fa-check">&nbsp;</i>View Booked Flights</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-9 col-sm-9 col-9">
          <Route exact path="/" component={Home}  />
          <Route path="/about" component={About} />
          <Route path="/place" render={(props)=><SearchByPlace {...props} flights={flights} isTable={isTable} onSubmit={(sourceCity,destinationCity)=>this.handleSubmit(sourceCity,destinationCity)}/>}  />
          <Route path="/number" render={(props)=><SearchByNumber {...props} flights={flights} isDisplayTable={isDisplayTable} onSubmit={(flightNo)=>this.handleSubmitFlightNumber(flightNo)}/>}/>
          <Route path="/rate"  render={(props)=><Rate {...props} rate={rate} onRate={(newStars,isRefresh)=>{this.handleRate(newStars,isRefresh)}}/>} />
         <Route path="/book/:flightNo" render={(props)=><BookFlight {...props} flights={flights} onConfirmBook={(passengerDetail)=>this.handleConfirmBooking(passengerDetail)}/>}/>
          <Route path="/stars" render={(props)=><Stars {...props} rate={rate}/>}/>
          <Route path="/bookedFlights" render={(props)=><ViewBookedFlights booking={booking}/>}/>
          </div>

        </div>

      </div>
    );
  }
}
export default withRouter(App);
