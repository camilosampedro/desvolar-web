import React, { Component } from 'react';
import logo from './airplane.svg';
import './App.css';
import {submitAllSearchs} from './service/search-service';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Desvolar</h2>
          <div className="searchContent">
            <div className="searchField">
              <label>Origen</label>
              <input type="text"></input>
            </div>
            <div className="searchField">
              <label>Destino</label>
              <input type="text"></input>
            </div>
            <div className="searchButton">
              <button>Buscar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  search(filters) {
    submitAllSearchs(filters);
  }
}

export default App;
