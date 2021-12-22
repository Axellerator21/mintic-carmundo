import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => (
  <div className="gpt3__navbar">
    <div className="gpt3__navbar-links">
      <div className="gpt3__navbar-links_logo">
        <img src={logo} />
      </div>
      <p className="carmundo">CARMUNDO</p>
      <div className="gpt3__navbar-links_container">
        <p><NavLink to="/" href="#home">Inicio</NavLink></p>
        <p><NavLink to="/service" href="#home">Servicios</NavLink></p>
        <p><NavLink to="/clientes" href="#home">Clientes</NavLink></p>
      </div>
    </div>
    <div className="gpt3__navbar-sign">
      <NavLink to="/login" href="#home"><button type="button">Equipo Carmundo</button></NavLink>
    </div>
  </div>
);

export default Navbar;
