import React, { Component } from 'react';
import './App.css';


class Vuelos extends Component {
    render() {
        return (
          <div className="Result">
            <div className="Result-header">
              <h2>Medellín Hacia Bogotá</h2>
              <h3>Jueves, 11 Mayo, 2017</h3>
            </div>
            <div className="Content">
              <div className="infoFligth">
                <div className="infoLeft">
                  <div>
                    <label> 08:15 <strong>MDE</strong></label>
                  </div>
                  <div>
                    <label><strong>Duración:</strong> 00:55</label>
                  </div>
                </div>
                <div className="infoRigth">
                  <div>
                    <label> 09:10 <strong>BOG</strong> </label>
                  </div>
                  <div>
                    <label><strong>Vuelo:</strong> FC8022</label>
                  </div>
                </div>
              </div>
              <div className="infoFligth">
               <div className="infoLeft">
                <div>
                  <label> 13:20 <strong>MDE</strong></label>
                </div>
                <div>
                  <label><strong>Duración:</strong> 00:55</label>
                </div>
              </div>
              <div className="infoRigth">
                <div>
                  <label> 14:15 <strong>BOG</strong> </label>
                </div>
                <div>
                  <label><strong>Vuelo:</strong> FC8066</label>
                </div>
              </div>
              </div>
            </div>
          </div>
        )
    }
}
export default Vuelos;