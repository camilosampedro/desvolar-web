import React, { Component } from 'react';
import { Table, Icon, Checkbox } from 'semantic-ui-react'
import logo from './airplane.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';


class FlightResults extends Component {
constructor(){
  super();
  this.state = {
    results : [{
        flightcode: "001",
        origin: "MDE",
        destination: "BOG",
        price: 200000,
        currency: "COP",
        date: "05:24 21-03-2017",
        code: "231",
        name: "Satena",
        thumbail: "url"
      },
      {
        flightcode: "002",
        origin: "BOG",
        destination: "MDE",
        price: 203400,
        currency: "COP",
        date: "23:03 25-03-2017",
        code: "231",
        name: "Satena",
        thumbail: "url"
      }]
  }
}

  render() {
    return (
     <div className="content">
       <h3 className="title">Vuelos</h3>
          <Table celled textAlign='center'>  
              <Table.Header className="header">
                <Table.Row>
                  <Table.HeaderCell className="results">
                    <Icon name='plane' size='large'/>
                  </Table.HeaderCell>
                  <Table.HeaderCell className="results">Origen</Table.HeaderCell>
                  <Table.HeaderCell className="results">
                    <Icon name='arrow right'/>
                  </Table.HeaderCell>
                  <Table.HeaderCell className="results">Destino</Table.HeaderCell>
                  <Table.HeaderCell className="results">Fecha</Table.HeaderCell>
                  <Table.HeaderCell className="results">Aerolinea</Table.HeaderCell>            
                  <Table.HeaderCell className="results">Tarifa</Table.HeaderCell>            
                  {/*<Table.HeaderCell className="results">Tarifa</Table.HeaderCell>            */}
                </Table.Row>
                </Table.Header>

                <Table.Body className="infoResult">
                  {this.state.results.map( (result) => ( <Table.Row>
                        <Table.Cell >
                            <Checkbox/>
                        </Table.Cell>
                        <Table.Cell >{result.origin}</Table.Cell>
                        <Table.Cell >
                          <Icon name='arrow right'/>
                        </Table.Cell>
                        <Table.Cell >{result.destination}</Table.Cell>
                        <Table.Cell >{result.date}</Table.Cell>
                        <Table.Cell >{result.name}</Table.Cell>
                        <Table.Cell >COP {result.price}
                         </Table.Cell>
                    </Table.Row>))}
                        {/*<Checkbox />
                        <div className="horario">
                        <span>{this.state.results[0].date}</span>
                        {/*<span>06:56</span>
                        </div>
                        <div className="ciudades">
                        <span>
                            Medellin {this.state.results[0].origin}
                        <br></br>
                        Bogota {this.state.results[0].destination}
                        </span>
                        </div>
                        <div className="info">
                        <span>{this.state.airlane.name} ({this.state.results[0].flightcode})</span>
                        </div>*/}  
                    {/*<Table.Cell className="infoPrice">
                        <span>{this.state.results[0].currency}$ {this.state.results[0].price}</span>
                        </Table.Cell>   */}
          </Table.Body>

      </Table>
     </div>
    );
  }
}

export default FlightResults;
