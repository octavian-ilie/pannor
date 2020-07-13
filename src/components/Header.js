import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, PrivBusWrapper, NavLink, HeaderIconLink, HeaderWrapper, NavContainer, LogoContainer, BrandLogo, IconsContainer } from './HeaderStyling';
import PrivBusLink from './HeaderLinks';
import logo from '../img/pannor-logo-transparent_new.png';
import { MyPannor } from './MyPannor';
import { SearchIcon } from './SearchIcon';

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
          <HeaderIconLink to="/my">
            <MyPannor/>
          </HeaderIconLink>
        </IconsContainer>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;
