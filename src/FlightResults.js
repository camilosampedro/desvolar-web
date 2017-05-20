import React, { Component } from 'react';
import { Table, Icon, Checkbox } from 'semantic-ui-react'
import logo from './airplane.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import sortResult from './service/sort-results';
import axios from 'axios';

class FlightResults extends Component {
constructor(props){
  super(props);
  this.state = {
    results : []
  }

  this.props.resultsObservable.then(axios.spread((viancaResult, chanResult, topaResult, ibaResult) => {

    if(viancaResult &&
     viancaResult.status === 200){
    this.setState({
      results: sortResult(this.state.results, viancaResult.data)
    });
  }
  if(chanResult && chanResult.status === 200){
    this.setState({
      results: sortResult(this.state.results, chanResult.data)
    });
  }
  if(topaResult && topaResult.status === 200){
    this.setState({
      results: sortResult(this.state.results, topaResult.data)
    });
  }
    if(ibaResult && ibaResult.status === 200){
      this.setState({
        results: sortResult(this.state.results, ibaResult.data)
      });
    }
  }))
}

  render() {
    return (
     <div className="content">
       <img src={logo} className="App-logo" alt="logo" />
          <h2>Desvolar.com</h2>
          <h3 className="title">Resultados obtenidos</h3>
          <Table celled textAlign='center' size="medium" className="table">
              <Table.Header className="header">
                <Table.Row>
                  <Table.HeaderCell >
                    <Icon name='plane' size='large'/>
                  </Table.HeaderCell>
                  <Table.HeaderCell >Origen</Table.HeaderCell>
                  <Table.HeaderCell >
                    <Icon name='arrow right'/>
                  </Table.HeaderCell>
                  <Table.HeaderCell >Destino</Table.HeaderCell>
                  <Table.HeaderCell >Fecha</Table.HeaderCell>
                  <Table.HeaderCell >Aerolinea</Table.HeaderCell>
                  <Table.HeaderCell >Tarifa</Table.HeaderCell>
                  {/*<Table.HeaderCell >Tarifa</Table.HeaderCell>            */}
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

          </Table.Body>

      </Table>
     </div>
    );
  }
}

export default FlightResults;
