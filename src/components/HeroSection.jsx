import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

import './HeroSection.css';
import '../App.css';

const playButton = <FontAwesomeIcon icon={faPlayCircle} />;

const HeroSection = () => (

    <div className='hero-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>GEORGIA AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">WATCH TRAILER {playButton}</Button>
      </div>
    </div>

);

export default HeroSection;
