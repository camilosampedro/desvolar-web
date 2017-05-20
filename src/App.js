import React, { Component } from 'react';
import Main from './main/Main'
import {submitAllSearchs} from './service/search-service';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Main onChange={this.search.bind(this)}></Main>
    );
  }

  search(filters) {
    submitAllSearchs(filters);
  }
}

export default App;
