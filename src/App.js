import React, {Component} from 'react';
import Main from './main/Main'
import FlightResults from './FlightResults'
import {submitAllSearchs} from './service/search-service';

const MAIN_PHASE = 0;
const RESULT_PHASE = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: RESULT_PHASE,
      // phase: MAIN_PHASE,
      observable: {}
    }
  }

  render() {
    if (this.state.phase === MAIN_PHASE) {
      return (
        <Main onChange={this.search.bind(this)}></Main>
      );
    } else {
      // TODO: Change this div for "Result"
      // <FlightResults resutsObservable={this.state.observable}></FlightResults>
      return (
        <FlightResults resutsObservable={this.state.observable}></FlightResults>
      );
    }
  }

  search(filters) {
    this.setState({phase: RESULT_PHASE, observable: submitAllSearchs(filters)});
  }

}

export default App;
