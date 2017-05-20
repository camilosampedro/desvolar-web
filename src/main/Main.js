import React, { Component } from 'react';
import {Button, Input} from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import './Main.css';
import logo from '../airplane.svg';

class Main extends Component {
  constructor(props){
    super(props);
    moment.locale('es');
    this.state = {
      departureDate:  moment()
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date){
    console.info(date);
    this.setState({
      departureDate: date
    });
  }

  submitStatus(){
    let filters = {};
    this.props.onChange(filters);
  }

  render() {
    return (<div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Desvolar.com</h2>
        <div className="searchContent">
          <div className="searchField">
            <label>Origen</label>
            <Input placeholder="Ciudad origen..." onChange={this.changeOrigin.bind(this)}></Input>
          </div>
          <div className="searchField">
            <label>Destino</label>
            <Input placeholder="Ciudad destino..." onChange={this.changeDesination.bind(this)}></Input>
          </div>
          <div className="searchField">
            <label>Fecha Ida</label>
            <DatePicker selected={this.state.departureDate} onChange={this.handleChange}/>
          </div>
          <div className="searchField">
            <label>Fecha Regreso</label>
            <DatePicker/>
          </div>
          <div className="searchField">
            <label>Número de pasajeros</label>
            <input type="number" max="20" min="1" onChange={this.changePassengers.bind(this)}></input>
          </div>
          <div className="searchButton">
            <Button onClick={this.submitStatus.bind(this)}>Buscar</Button>
          </div>
        </div>
      </div>
    </div>);
  }
}
export default Main;
