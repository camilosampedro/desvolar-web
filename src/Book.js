import React, { Component } from 'react';
import { Table, Icon, Checkbox, Dimmer, Loader, Button } from 'semantic-ui-react'
import logo from './airplane.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import sortResult from './service/sort-results';
import axios from 'axios';

class Book extends Component {

constructor(props){
  super(props);
  this.state = {
    results : []
  }

  this.props.resultsObservable.then((reservationsResult) => {

    if(reservationsResult &&
      reservationsResult.status === 200){
      this.setState({
        results: sortResult(this.state.results, reservationsResult.data)
      });
    }

  })
}

reload(){
  location.reload();
}
  render() {
    var id = 0;
    if(this.state.results.length === 0){
      return (
              <Dimmer active>
                <Loader>Consultando reservas...</Loader>
              </Dimmer>
      )
    }else{
      return (
      <div className="content">
        <img src={logo} className="App-logo" alt="logo" />
            <h2>Desvolar.com</h2>
            <h3 className="title">Reservas 
            </h3>
            <Table celled selectable textAlign='center' size="large" className="table">
                <Table.Header className="header">
                  <Table.Row>
                    <Table.HeaderCell >
                      #
                    </Table.HeaderCell >
                    <Table.HeaderCell >Origen</Table.HeaderCell>
                    <Table.HeaderCell >
                      <Icon name='arrow right'/>
                    </Table.HeaderCell>
                    <Table.HeaderCell >Destino</Table.HeaderCell>
                    <Table.HeaderCell >Fecha</Table.HeaderCell>
                    <Table.HeaderCell >Aerolinea</Table.HeaderCell>
                    <Table.HeaderCell >Tarifa</Table.HeaderCell>
                    <Table.HeaderCell >Pasajeros</Table.HeaderCell>
                  </Table.Row>
                  </Table.Header>

                  <Table.Body className="infoResult">
                    {this.state.results.map( (result) => {
                      return  ( <Table.Row key={id}>
                          <Table.Cell >
                              {++id}
                          </Table.Cell>
                          <Table.Cell positive >{result.origin}</Table.Cell>
                          <Table.Cell >
                            <Icon name='arrow right'/>
                          </Table.Cell>
                          <Table.Cell positive>{result.destination}</Table.Cell>
                          <Table.Cell ><Icon name='calendar'/>{result.date}<Icon name='time'/>{result.hour}</Table.Cell>
                          <Table.Cell >{result.thumbnail ? <img src={result.thumbnail} width="50"></img>: result.name}</Table.Cell>
                          <Table.Cell ><i>{result.currency}</i> {result.price}
                          </Table.Cell>
                          <Table.Cell >{result.passengers}</Table.Cell>
                      </Table.Row>)})}
            </Table.Body>

        </Table>

        {/*<a href="#" onClick={this.reload.bind(this)}><img src={logo} className="App-logo" alt="logo" /></a>*/}

      </div>
      );
    }
  }
}

export default Book;
