import React from 'react';
import PrivBusLink from './HeaderLinks';
import './Header.css';
import logo from '../img/pannor-logo-transparent_new.png';

function Header() {
  return (
    <div className="header-container">
      <div className="header-privbus-wrapper">
        <PrivBusLink to="/">Private</PrivBusLink>
        <PrivBusLink to="/business">Business</PrivBusLink>
      </div>
      <div className="header-wrapper">
        <div className="header--nav-container">
          Links here.
        </div>
        <div className="header--logo-container">
          <a href="/">
            <img className="brand-logo" src={logo} alt="Pannor"/>
          </a>
        </div>
        <div className="header--my-container">
          Links here
        </div>
      </div>
    </div>
  )
}

export default Header;
