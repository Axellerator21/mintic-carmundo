import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import mechanic from './mechanic.svg';
import wrench from './wrench.svg';
import calendar from './calendar.svg';
import './task.css';

class TaskMe extends Component {
  render() {
    return (
      <div className="container-all-all">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <button type="button" className="btn btn-danger"><NavLink to="/login" href="#home">volver</NavLink></button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p>Designación de tareas</p>
            </div>
            <div className="col">
              <button type="button" className="btn btn-danger"><NavLink to="/taskRemover" href="#home">Remover tarea</NavLink></button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-danger"><NavLink to="/taskVer" href="#home">Ver tareas asignadas</NavLink></button>
            </div>
          </div>
        </div>

        <div className="container shadow p-3 mb-5 bg-white rounded">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addTask}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="title" type="text" placeholder="Mecanico" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea name="description" cols="30" rows="10" placeholder="Habilidad" className="materialize-textarea" />
                      </div>
                    </div>
                    <button type="submit" className="btn bg-secondary darken-4" style={{ color: 'white' }}>
                      enviar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container shadow p-3 mb-5 bg-white rounded">
          <div className="row">
            <div className="col"><img style={{ width: '100px', height: '100px' }} src={mechanic} />Mecanico</div>
            <div className="col">Lucas</div>
          </div>
          <div className="row">
            <div className="col"><img style={{ width: '60px', height: '100px' }} src={wrench} />Habilidades</div>
            <div className="col">Lucas</div>
          </div>
          <div className="row">
            <div className="col"><img style={{ width: '60px', height: '100px' }} src={calendar} />Fecha</div>
            <div className="col">15/12/21</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskMe;
