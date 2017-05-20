import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import logo from './airplane.svg';
import './App.css';
import { Checkbox } from 'semantic-ui-react';

class App extends Component {
constructor(){
  super();
  this.state = {
    airlane : {
      code: "231",
      name: "Satena",
      thumbail: "url"
    },
    results : [{
        flightcode: "001",
        origin: "MDE",
        destination: "BOG",
        price: 200000,
        currency: "COP",
        date: "05:24 21-03-2017"
      }]
  }
}

  render() {
    return (
     <div className="content">
       <h3 className="title">Vuelos</h3>
          <Table celled>  
              <Table.Header className="header">
                <Table.Row>
                  <Table.HeaderCell className="results">Resultados Encontrados</Table.HeaderCell>
                  <Table.HeaderCell className="price">Valor</Table.HeaderCell>            
                </Table.Row>
                </Table.Header>

                <Table.Body className="infoResult">
            <Table.Row>
              
              <Table.Cell className="infoCell">
                <Checkbox />
                <div className="horario">
                  <span>{this.state.results[0]}</span>
                  {/*<span>06:56</span>*/}
                </div>
                <div className="ciudades">
                  <span>
                    Medellin {this.state.results.origin}
                  <br></br>
                  Bogota {this.state.results.destination}
                  </span>
                </div>
                <div className="info">
                  <span>{this.state.airlane.name} ({this.state.results.flightcode})</span>
                </div>
              </Table.Cell>     
              <Table.Cell className="infoPrice">
                <span>{this.state.results.currency}$ {this.state.price}</span>
                </Table.Cell>   
            </Table.Row>
          </Table.Body>
      </Table>
     </div>
    );
  }
}

export default App;
