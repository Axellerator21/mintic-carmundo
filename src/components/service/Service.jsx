// import React from 'react';
import React, { Component } from 'react';
import './service.css';
import Slider from 'react-slick';
import service1 from './service1.svg';
import service2 from './service2.svg';
import service3 from './service3.svg';
import service4 from './service4.svg';
import service5 from './service5.svg';
import service6 from './service6.svg';
import service7 from './service7.svg';
import service8 from './service8.svg';
import tools from './tools.svg';
/* eslint-disable react/jsx-props-no-spreading */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Service extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container">
        <h1> Nuestros servicios <img src={tools} /></h1>
        <Slider {...settings}>
          <div>
            <img src={service1} />
            <p>Rotación de llantas</p>
          </div>
          <div>
            <img src={service2} />
            <p>Alineación</p>
          </div>
          <div>
            <img src={service3} />
            <p>Cambio de aceite</p>
          </div>
          <div>
            <img src={service4} />
            <p>Amortiguadores</p>
          </div>
          <div>
            <img src={service5} />
            <p>Suspensión</p>
          </div>
          <div>
            <img src={service6} />
            <p>Discos</p>
          </div>
          <div>
            <img src={service7} />
            <p>Pastillas</p>
          </div>
          <div>
            <img src={service8} />
            <p>Revision de frenos</p>
          </div>
        </Slider>
      </div>
    );
  }
}
