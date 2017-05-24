import React, { Component } from 'react';
import logo from './airplane.svg';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

class Home extends Component {
  visitPage(){
          window.location='http://www.example.com';
      }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*<h2>Desvolar</
          h2>*/}
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
              <button >Buscar</button>
            </div>

             <Dropdown placeholder='Select Country' fluid multiple search selection options={countryOptions} />

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
