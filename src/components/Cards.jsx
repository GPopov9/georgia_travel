import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

import image1 from '../images/img-9.jpg';

const Cards = () => (
  <div className="cards">
    <h1>Check out these EPIC Destinations</h1>
    <div className="cards__container">
      <div className="cards__wrapper">
        <ul className="cards__items">
          <CardItem
            src={image1}
            text="Explore the hidden waterfall"
            label="Adventure"
            path="/services"
          />
        </ul>
      </div>
    </div>

  </div>
);

export default Cards;
