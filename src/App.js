import React, {Component} from 'react';
import Main from './main/Main'
import FlightResults from './FlightResults'
import Book from './Book'
import {submitAllSearchs} from './service/search-service';
import Rx from 'rxjs';

const MAIN_PHASE = 0;
const RESULT_PHASE = 1;
const BOOK_PHASE = 2;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: MAIN_PHASE,
      origin: '',
      destination: '',
      departureDate: '',
      arrivalDate: '',
      // phase: MAIN_PHASE,
      observable: {}
    }
  }

  render() {

    if (this.state.phase === MAIN_PHASE) {
      return (
          <Main onChange={this.search.bind(this)} onSeeReservations={this.reservation.bind(this)}></Main>
      );
    } else if (this.state.phase === BOOK_PHASE) {
      return (
        <Book resultsObservable={this.state.observable}></Book>
      );
    } else {
      // TODO: Change this div for "Result"
      // <FlightResults resutsObservable={this.state.observable}></FlightResults>
      console.log('state', this.state);
      return (
        <FlightResults resultsObservable={this.state.observable}
        origin={this.state.origin}
        destination={this.state.destination}
        departureDate={this.state.departureDate}
        arrivalDate={this.state.arrivalDate}>
        </FlightResults>
      );
    }
  }

  search(filters) {
    console.log('filters', filters);
    this.setState({
      phase: RESULT_PHASE,
      observable: submitAllSearchs(filters),
      origin: filters.origin,
      destination: filters.destination,
      departureDate: filters.departureDate,
      arrivalDate: filters.arrivalDate});
  }

  reservation(){
    this.setState({
      phase: BOOK_PHASE,
      observable: Rx.Observable.of({
        status: 200,
        data: {
          "airline": {
              "code": "2215",
              "name": "TOPA",
              "thumbnail": "http://shmector.com/_ph/12/221844079.png"
          },
          "results": [{
              "airline": "TOPA",
              "flightCode": "20",
              "origin": "BOG",
              "destination": "MDE",
              "price": 275000,
              "currency": "COP",
              "date": "12:30 2017-05-31",
              "roundTrip": null,
              "passengers": 50
          }]
      }
      }
      ).toPromise()});
  }

}

export default App;
