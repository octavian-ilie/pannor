import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PrivBusLink from './HeaderLinks';
import './Header.css';
import logo from '../img/pannor-logo-transparent_new.png';
import { MyPannor } from './MyPannor';

const NavLink = styled(Link)`
  color: #222;
  text-decoration: none;
  font-size: 1.1rem;
  margin-right: 20px;
  transition: all 0.2s ease-in-out;

  :hover {
    color: #fa7268;
  }  
`;

const MyPannorLink = styled(Link)`
  color: #222;
  margin-top: -10px;

  :hover {
    color: #fa7268;
  }
`;

function Header() {
  return (
    <div className="header-container">
      <div className="header-privbus-wrapper">
        <PrivBusLink to="/">Private</PrivBusLink>
        <PrivBusLink to="/business">Business</PrivBusLink>
      </div>
      <div className="header-wrapper">
        <div className="header--nav-container">
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/mobile">Mobile</NavLink>
          <NavLink to="/landline">Internet & TV</NavLink>
          <NavLink to="/support">Support</NavLink>
        </div>
        <div className="header--logo-container">
          <Link to="/">
            <img className="brand-logo" src={logo} alt="Pannor"/>
          </Link>
        </div>
        <div className="header--my-container">
          <MyPannorLink to="/my">
            <MyPannor/>
          </MyPannorLink>
        </div>
      </div>
    </div>
  )
}

export default Header;
