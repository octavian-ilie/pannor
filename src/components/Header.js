import React from 'react';
import './Header.css';
import logo from '../img/pannor-logo_white.png';

function Header() {
  return (
    <div class="header-container">
      <a class="header-brand" href="/">
        <img class="brand-logo" src={logo} alt="Pannor"/>
      </a>
    </div>
  )
}

export default Header;
