import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import {Button, Input, Form, Dropdown} from 'semantic-ui-react'
import 'react-datepicker/dist/react-datepicker.css';
import './Main.css';
import logo from '../airplane.svg';

let cities=[{value:'BOG', text:'Bogotá'} ,{value:'MDE', text:'Medellín'} ]

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
      passengers: 1,
      roundTrip: true,
    }
    this.changeDepartureDate = this.changeDepartureDate.bind(this);
    this.changeArrivalDate = this.changeArrivalDate.bind(this);
    this.changeDestination = this.changeDestination.bind(this);
    this.changeOrigin = this.changeOrigin.bind(this);
    this.changePassengers = this.changePassengers.bind(this);
    this.changeCheck = this.changeCheck.bind(this);
  }
  changeDestination(event, data){
    console.log('DATAD',data.value)
    this.setState({
      destination: data.value
    });
  }

  changeOrigin(event, data){
    console.log('DATAO',data.value)
    this.setState({
      origin: data.value
    });
    // city.disable = true
  }
  changeDepartureDate(date){
    //let localDate = moment(date, "MM/DD/YYYY hh:mm:ss A");
    if(date.isValid()){
      this.setState({
        departureDate: date //localDate.format('DD-MM-YYYY')
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
        passengers: +aux
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

    let filters = {
      departureDate: this.state.departureDate.format('DD-MM-YYYY'),
      origin: this.state.origin,
      destination: this.state.destination,
      passengers: this.state.passengers,

    }
    if(this.state.arrivalDate != ''){
      filters.arrivalDate = this.state.arrivalDate.format('DD-MM-YYYY');
      filters.roundTrip = this.state.roundTrip;
    } else {
      filters.roundTrip = false;
    }
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
            <Dropdown placeholder='Select Origen' fluid search selection options={cities} 
            onChange={(e, value)=>this.changeOrigin(e, value)} required={true}/>            
            {/*<select value={this.state.origin}  onChange={this.changeOrigin}>
              <option value="" disabled>Ciudad origen...</option>
              {cities.map(city=>(
                <option value={city.value}>{city.text}</option>
              ))}
            </select>*/}
          </div>
          <div className="searchField">
            <label>Destino</label>
            <Dropdown placeholder='Select Destino' fluid search selection options={cities} onChange={(e, value)=>this.changeDestination(e, value)} />
            {/*<select value={this.state.destination}onChange={this.changeDestination}>
              <option value="" disabled>Ciudad destino...</option>
              {cities.map(city=>(
                <option value={city.value}>{city.text}</option>
              ))}
            </select>*/}
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
            <button onClick={this.submitStatus.bind(this)}>Buscar</button>
          
          </div>
        </div>
      </div>
    </div>);
  }
}
export default Main;
