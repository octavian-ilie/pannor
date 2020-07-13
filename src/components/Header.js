import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PrivBusLink from './HeaderLinks';
import './Header.css';
import logo from '../img/pannor-logo-transparent_new.png';
import { MyPannor } from './MyPannor';
import { SearchIcon } from './SearchIcon';

const HeaderContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid #dbdbdb;
`;

const PrivBusWrapper = styled.div`
  width: 1170px;
  height: auto;
  display: flex;
  flex-direction: row;
`;

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

const HeaderIconLink = styled(Link)`
  color: #222;
  margin-top: -14px;
  margin-left: 14px;

  :hover {
    color: #fa7268;
  }
`;

const HeaderWrapper = styled.div`
  width: 1170px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const NavContainer = styled.div`
  height: auto;
  width: 40%;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  height: auto;
  width: 20%;
  display: flex;
  justify-content: center;
`;

const BrandLogo = styled.img`
  height: 60px;
  margin-top: -12px;
  transition: all 0.3s ease;
`;

const IconsContainer = styled.div`
  height: auto;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

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
