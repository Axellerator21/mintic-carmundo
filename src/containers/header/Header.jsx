import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">El mejor servicio automovilistico de la ciudad</h1>
      <p>Ahora puedes realizar tus servicios desde el hogar.</p>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>100 clientes nos contactan a nivel nacional</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
