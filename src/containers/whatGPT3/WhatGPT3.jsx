import React from 'react';
import './whatGPT3.css';
import service1 from './service1.png';
import service2 from './service2.png';
import service3 from './service3.png';

const WhatGPT3 = () => (
  <div className="container-all">
    <div className="container shadow p-3 mb-5 text-white rounded">
      <h1 style={{ color: 'white' }}>¿Qué dicen nuestros clientes?</h1>
      <div className="row">
        <div className="col">
          <img className="container-img" src={service2} />
          <div className="container-coment">
            <div className="container">
              <h2>Mariana Palacios</h2>
              <p className="container-p">El mejor servicio</p>
            </div>
          </div>
        </div>
        <div className="col">
          <img className="container-img" src={service1} />
          <div className="container-coment">
            <div className="container">
              <h2>Lucas Rivera</h2>
              <p className="container-p">Muy rapido y eficiente</p>
            </div>
          </div>
        </div>
        <div className="col">
          <img className="container-img" src={service3} />
          <div className="container-coment">
            <div className="container">
              <h2>Angeles Moscarella</h2>
              <p className="container-p">Muy buena atencion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WhatGPT3;
