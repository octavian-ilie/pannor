import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useOnClickOutside } from './hooks';

import { 
  HeaderContainer, 
  PrivBusWrapper, 
  NavLink,
  TriggerLink,
  HeaderIconLink, 
  HeaderWrapper, 
  NavContainer, 
  LogoContainer, 
  BrandLogo, 
  IconsContainer 
} from './HeaderStyling';

import HeaderMobileMenu from './HeaderMobileMenu';
import PrivBusLink from './HeaderLinks';
import logo from '../img/pannor-logo-transparent_new.png';
import { MyPannor } from './MyPannor';
import { SearchIcon } from './SearchIcon';

import './MobileMenu.css';

function Header() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <HeaderContainer ref={node}>
      <PrivBusWrapper>
        <PrivBusLink exact to="/">Private</PrivBusLink>
        <PrivBusLink exact to="/business">Business</PrivBusLink>
      </PrivBusWrapper>
      <HeaderWrapper>
        <NavContainer>
          <NavLink to="/shop">Shop</NavLink>
          <TriggerLink open={open} setOpen={setOpen} onClick={() => setOpen(!open)}>Mobile</TriggerLink>
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
      <HeaderMobileMenu open={open} setOpen={setOpen}/>
    </HeaderContainer>
  )
}

export default Header;
