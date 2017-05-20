import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import {Button, Input, Form} from 'semantic-ui-react'
import 'react-datepicker/dist/react-datepicker.css';
import './Main.css';
import logo from '../airplane.svg';

const cities=[{value:'BOG', text:'Bogotá'} ,{value:'MDE', text:'Medellín'} ]

class Main extends Component {
  constructor(props){
    super(props);
    moment.locale('es');
    moment(new Date()).format("DD/MM/YYYY");
    this.state = {
      departureDate: moment(),
      arrivalDate: '',
      origin: '',
      destination: '',
      passengers: '1',
      roundTrip: true,
    }
    this.changeDepartureDate = this.changeDepartureDate.bind(this);
    this.changeArrivalDate = this.changeArrivalDate.bind(this);
    this.changeDestination = this.changeDestination.bind(this);
    this.changeOrigin = this.changeOrigin.bind(this);
    this.changePassengers = this.changePassengers.bind(this);
    this.changeCheck = this.changeCheck.bind(this);
  }
  changeDestination(event){
    this.setState({
      destination: event.target.value
    });
  }
  changeOrigin(event){
    this.setState({
      origin: event.target.value
    });
  }
  changeDepartureDate(date){
    if(date.isValid()){
      this.setState({
        departureDate: date
      });
    }
  }
  changeArrivalDate(date){
    if(date.isValid()){
      this.setState({
        arrivalDate: date
      });
    }
  }
  changePassengers(event){
    let aux = parseInt(event.target.value);
    if(Number.isInteger(aux) && aux>0 && aux < 1000){
      this.setState({
        passengers: aux
      });
    }
  }
  changeCheck(event){
    console.info( event.target.checked);
    this.setState({
      roundTrip: event.target.checked
    });
  }

  submitStatus(){
    let filters = {};
    this.props.onChange(filters);
  }

  render() {
    return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Desvolar.com</h2>
        <div className="searchContent">
          <div className="searchField">
            <label>Origen</label>
            <select value={this.state.origin}  onChange={this.changeOrigin}>
              <option value="" disabled>Ciudad origen...</option>
              {cities.map(city=>(
                <option value={city.value}>{city.text}</option>
              ))}
            </select>
          </div>
          <div className="searchField">
            <label>Destino</label>
            <select value={this.state.destination}onChange={this.changeDestination}>
              <option value="" disabled>Ciudad destino...</option>
              {cities.map(city=>(
                <option value={city.value}>{city.text}</option>
              ))}
            </select>
          </div>
          <div className="searchField">
            <label>Fecha Ida</label>
            <DatePicker className="datePicker" selected={this.state.departureDate} onChange={this.changeDepartureDate}/>
          </div>
          <div className="searchField">
                <label>Fecha Regreso</label>
                <DatePicker className="datePicker" selected={this.state.arrivalDate} onChange={this.changeArrivalDate}/>
                </div>
          <div className="searchField">
            <label>Número de pasajeros</label>
            <input className="passengers" value={this.state.passengers} onChange={this.changePassengers}></input>
          </div>
          <div className="searchButton">
            <button onClick={this.submit.bind(this)}>Buscar</button>
          </div>
        </div>
      </div>
    </div>);
  }
}
export default Main;
