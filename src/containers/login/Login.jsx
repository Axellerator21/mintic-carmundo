import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="container-all-all">
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
                    <NavLink to="/taskma" href="#home">
                      <button type="submit" className="btn bg-secondary darken-4" style={{ color: 'white' }}>
                        Adminnistrador
                      </button>
                    </NavLink>
                    <NavLink to="/mecanico" href="#home">
                      <button type="submit" className="btn bg-secondary darken-4" style={{ color: 'white' }}>
                        Mecanico
                      </button>
                    </NavLink>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
