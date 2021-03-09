import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';

const logo = <FontAwesomeIcon icon={faMountain} size='5x' color='black' />;

const Navbar = () => (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">{logo} GEORGIA</Link>
        </div>
      </nav>
    </>
);

export default Navbar;
