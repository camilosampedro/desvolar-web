import React, { Component } from 'react';
import logo from './airplane.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Desvolar</h2>
      //     <div className="searchContent">
      //       <div className="searchField">
      //         <label>Origen</label>
      //         <input type="text"></input>
      //       </div>
      //       <div className="searchField">
      //         <label>Destino</label>
      //         <input type="text"></input>
      //       </div>
      //       <div className="searchButton">
      //         <button>Buscar</button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div className="Result">
        <div className="Result-header">
          <h1>Medellín Hacia Bogotá</h1>
          <label>Jueves, 11 Mayo, 2017</label>
        </div>
        <div className="Content">
          <div className="infoFligth">
            <div className="infoFligthOr">
              <label> 08:15 MDE </label>
              <label>Duración: 00:55</label>
            </div>
            <div className="infoFligthDt">
              <label> 09:10 BOG </label>
              <label>Vuelo: FC8022</label>
            </div>
          </div>
          <div className="infoFligth">
            <div className="infoFligthOr">
              <label> 13:20 MDE </label>
              <label>Duración: 00:55</label>
            </div>
            <div className="infoFligthDt">
              <label> 14:15 BOG </label>
              <label>Vuelo: FC8066</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
