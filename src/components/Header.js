import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, PrivBusWrapper, NavLink, HeaderIconLink, HeaderWrapper, NavContainer, LogoContainer, BrandLogo, IconsContainer } from './HeaderStyling';
import PrivBusLink from './HeaderLinks';
import logo from '../img/pannor-logo-transparent_new.png';
import { MyPannor } from './MyPannor';
import { SearchIcon } from './SearchIcon';
import './MobileMenu.css';

function Header() {
  return (
    <HeaderContainer>
      <PrivBusWrapper>
        <PrivBusLink to="/">Private</PrivBusLink>
        <PrivBusLink to="/business">Business</PrivBusLink>
      </PrivBusWrapper>
      <HeaderWrapper>
        <NavContainer>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/mobile">Mobile</NavLink>
          <NavLink to="/landline">Internet & TV</NavLink>
          <NavLink to="/support">Support</NavLink>
          <div id="menu-toggle">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
          </div>
        </NavContainer>
        <LogoContainer>
          <Link to="/">
            <BrandLogo src={logo} alt="Pannor"/>
          </Link>
        </LogoContainer>
        <IconsContainer>
          <HeaderIconLink to="/search">
            <SearchIcon/>
          </HeaderIconLink>
          <HeaderIconLink to="/signin">
            <MyPannor/>
          </HeaderIconLink>
        </IconsContainer>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;
