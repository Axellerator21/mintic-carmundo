import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './taskRemover.css';
import mechanic from './mechanic.svg';
import wrench from './wrench.svg';
import calendar from './calendar.svg';

// eslint-disable-next-line react/prefer-stateless-function
class TaskRemover extends Component {
  render() {
    return (
      <div className="container-all-all">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <button type="button" className="btn btn-danger"><NavLink to="/task-maneger" href="#home">volver</NavLink></button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h1>Remover tareas</h1>
          </div>
        </div>
        <div className="container shadow p-3 mb-5 bg-white rounded">
          <div className="row">
            <img style={{ width: '120px', height: '120px' }} src={mechanic} />
          </div>
          <div className="row">
            <p>Lucas Rivera</p>
          </div>
          <div className="row">
            <div className="col"><img style={{ width: '60px', height: '100px' }} src={calendar} /></div>
            <div className="col"><h3>15/12/21</h3></div>
            <div className="col"><button type="button" className="btn btn-danger">Cambiar fecha</button></div>
          </div>
          <div className="row">
            <div className="col"><img style={{ width: '60px', height: '100px' }} src={wrench} /></div>
            <div className="col"><h3>Cambio de aceite</h3></div>
            <div className="col"><button type="button" className="btn btn-danger">Agregar Tarea</button></div>
          </div>
          <div className="container">
            <div className="row">
              <button type="button" className="btn btn-danger">Remover</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskRemover;
