import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { Dropdown, Checkbox, Button, Label, Icon} from 'semantic-ui-react'
import 'react-datepicker/dist/react-datepicker.css';
import './Main.css';
import logo from '../airplane.svg';
import {auth, logout} from '../service/firebase-service'

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
      roundTrip: false,
      user: ''
    }
    this.changeDepartureDate = this.changeDepartureDate.bind(this);
    this.changeArrivalDate = this.changeArrivalDate.bind(this);
    this.changeDestination = this.changeDestination.bind(this);
    this.changeOrigin = this.changeOrigin.bind(this);
    this.changePassengers = this.changePassengers.bind(this);
    this.changeCheck = this.changeCheck.bind(this);
  }
  changeDestination(event, data){
    this.setState({
      destination: data.value
    });
  }

  changeOrigin(event, data){
    this.setState({
      origin: data.value
    });
    // city.disable = true
  }
  changeDepartureDate(date){
    //let localDate = moment(date, "MM/DD/YYYY hh:mm:ss A");
    if(date.isValid() && (date >= moment().startOf('day'))){
      this.setState({
        departureDate: date //localDate.format('DD-MM-YYYY')
      });
    }
  }
  changeArrivalDate(date){
    if(date.isValid() && (date >= moment().startOf('day'))){
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
    }else if(!event.target.value){
      this.setState({
        passengers: ''
      });
    }
  }
  changeCheck(event){
    console.info( event.target.checked);
    this.setState({
    });
  }
  changeToggle(event, data){
    console.log(data);
    this.setState({
      roundTrip: data.checked
    });
  }

  submitStatus(){
    
    let filters = {
      departureDate: this.state.departureDate.format('DD-MM-YYYY'),
      origin: this.state.origin,
      destination: this.state.destination,
      passengers: this.state.passengers,
    }

    if(this.state.arrivalDate !== ''){
      filters.arrivalDate = this.state.arrivalDate.format('DD-MM-YYYY');
      filters.roundTrip = this.state.roundTrip;
    } else {
      filters.roundTrip = false;
    }
  this.props.onChange(filters);
}

// componentWillMount(){

// }

handleAuth(){
    auth().then((result) => {
      console.log("Signed in as:", result);
      if (result.user.email.endsWith('@udea.edu.co')) {
            // this.handleAuthState();
            this.setState({user: result.user.email});
      } else {
        alert('El correo debe ser de dominio @udea.edu.co');
      }
    }).catch(function (error) {
      console.error("Authentication failed:", error);
    });
}

// handleAuthState(){
//   firebaseAuth().onAuthStateChanged(user => {
//     if (user){
//       console.log("Usuario:", user)
//         this.setState({ user: user })
//       }else{
//         this.setState({ user: null })
//       }
//     })
// }

handleLogout(){
    logout().then(() => {
      this.setState({user: ''});
      console.log("Desconectado")})
    .catch(error => console.error('Error: ', error)) 
}

 reservation() {
   this.props.onSeeReservations();
 }

  render() {
    return (
    <div className="App">
      {/*<div>*/}
        {this.state.user ? 
          <div>
            <Label>{this.state.user}</Label>
            <Button  className="btn-reservas">Mis Reservas</Button>
            <Button  className="btn-logout" onClick={this.handleLogout.bind(this)}>Cerrar Sesión</Button>            
          </div>:
          <Button  className="btn-signIn" onClick={this.handleAuth.bind(this)}>Iniciar Sesión</Button>}
      {/*</div>*/}
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Desvolar.com</h2>
        <div className="searchContent">
          <div className="checkContainer">
            <div className="checkbox">
                <label>Ida</label>          
              <Checkbox slider onChange={(e, value)=>this.changeToggle(e,value)}/> 
                <label>Ida y regreso</label>          
            </div>
          </div>
          <div className="searchField">
            <label>Origen</label>
            <Dropdown placeholder='Select Origen' fluid search selection options={cities} 
              onChange={(e, value)=>this.changeOrigin(e, value)} />            
          </div>
          <div className="searchField">
            <label>Destino</label>
            <Dropdown placeholder='Select Destino' fluid search selection options={cities} 
              onChange={(e, value)=>this.changeDestination(e, value)} />
          </div>
          <div className="searchField">
            <label>Fecha Ida</label>
            <DatePicker className="datePicker" selected={this.state.departureDate} onChange={this.changeDepartureDate} />
          </div>
            {this.state.roundTrip ? 
              <div className="searchField">
              <label>Fecha Regreso</label>
                <DatePicker className="datePicker" label="Fecha regreso" selected={this.state.arrivalDate} onChange={this.changeArrivalDate}/>
              </div> :
                null}
              {/*<label>Fecha Regreso</label>
                <DatePicker className="datePicker" selected={this.state.arrivalDate} onChange={this.changeArrivalDate}/>*/}
          <div className="searchField">
            <label>Número de pasajeros</label>
            <input className="passengers" value={this.state.passengers} onChange={this.changePassengers}></input>
          </div>
          <div className="searchButton">
             {!this.state.origin || !this.state.destination ? 
              <div>
                <Label>
                  <Icon name='info circle' size='large' color='black'/>
                  Seleccione una ciudad de origen y de destino
                </Label>
              </div>:
                <div>
                  {this.state.origin !== this.state.destination ?
                    <div className="btn">
                      <Button onClick={this.submitStatus.bind(this)}>Buscar</Button>
                    </div>:
                        <Label>
                          <Icon name='info circle' size='large' color='black'/>
                          Origen y Destino no pueden ser iguales 
                        </Label>}
                  
                {/*<Button onClick={this.submitStatus.bind(this)}>Buscar</Button>*/}
                </div>
              }              
          </div>
          <div className="searchButton">
            <Button onClick={this.reservation.bind(this)}>Ver reservas</Button>
          </div>
        </div>
      </div>
    </div>);
  }
}
export default Main;
