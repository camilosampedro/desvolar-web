import React, {Component} from 'react';
import {
  Table,
  Icon,
  Checkbox,
  Dimmer,
  Loader,
  Button
} from 'semantic-ui-react'
import logo from './airplane.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import sortResult from './service/sort-results';
import submitReserve from './service/reserve-service';
import axios from 'axios';

class FlightResults extends Component {

  reserve(flight) {
    let flightInfo = {
      flightCode: flight.flightCode,
      passengers: 3
    }
    submitReserve(flightInfo, flight.code);
  }

  constructor(props) {
    super(props);
    this.state = {
      results: []
    }

    this.props.resultsObservable.then(axios.spread((viancaResult, chanResult, topaResult, ibaResult) => {

      if (viancaResult && viancaResult.status === 200) {
        this.setState({
          results: sortResult(this.state.results, viancaResult.data)
        });
      }
      if (chanResult && chanResult.status === 200) {
        this.setState({
          results: sortResult(this.state.results, chanResult.data)
        });
      }
      if (topaResult && topaResult.status === 200) {
        this.setState({
          results: sortResult(this.state.results, topaResult.data)
        });
      }
      if (ibaResult && ibaResult.status === 200) {
        this.setState({
          results: sortResult(this.state.results, ibaResult.data)
        });
      }
    }))
  }

  reload() {
    location.reload();
  }
  render() {
    var id = 0;
    if (this.state.results.length === 0) {
      return (
        <Dimmer active>
          <Loader>Buscando Vuelos...</Loader>
        </Dimmer>
      )
    } else {
      return (
        <div className="content">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Desvolar.com</h2>
          <h3 className="title">Resultados {this.props.origin}
            <Icon name='arrow right'/> {this.props.destination}
            <br/><br/>{this.props.departureDate} {this.props.arrivalDate}
          </h3>
          <Table celled textAlign='center' size="large" className="table">
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
                <Table.HeaderCell >Reservar</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body className="infoResult">
              {this.state.results.map((result) => {
                id++;
                console.log("id " + id);
                return (
                  <Table.Row key={id}>
                    <Table.Cell >
                      <Checkbox/>
                    </Table.Cell>
                    <Table.Cell >{result.origin}</Table.Cell>
                    <Table.Cell >
                      <Icon name='arrow right'/>
                    </Table.Cell>
                    <Table.Cell >{result.destination}</Table.Cell>
                    <Table.Cell ><Icon name='calendar'/>{result.date}<Icon name='time'/>{result.hour}</Table.Cell>
                    <Table.Cell >{result.thumbnail
                        ? <img src={result.thumbnail} width="50"></img>
                        : result.name}</Table.Cell>
                    <Table.Cell >
                      <i>COP</i>
                      {result.price}
                    </Table.Cell>
                    <Table.Cell>
                      <Button onClick={this.reserve.bind(this, result)}>Reservar</Button>
                    </Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>

          </Table>
          <br/>
          <Button onClick={this.reload.bind(this)}>Hacer otra busqueda</Button>
          {/*<a href="#" onClick={this.reload.bind(this)}><img src={logo} className="App-logo" alt="logo" /></a>*/}

        </div>
      );
    }
  }
}

export default FlightResults;
