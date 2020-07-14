import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../rules/device';

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
  
  @media ${device.laptopL} { 
    width: 1170px;
  }

  @media ${device.bp1} { 
    width: 100%;
    padding: 0 1rem;
  }
  
  @media ${device.laptop} { 
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #222;
  text-decoration: none;
  font-size: 1.1rem;
  margin-right: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #fa7268;
  }

  @media ${device.laptop} { 
    display: none;
  }
`;

const HeaderIconLink = styled(Link)`
  color: #222;
  margin-top: -14px;
  margin-left: 14px;

  &:hover {
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

  @media ${device.laptopL} { 
    width: 1170px;
  }

  @media ${device.bp1} { 
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
  }

  @media ${device.laptop} { 
    max-width: 100%;
    padding: 6px 0;
  }
`;

const NavContainer = styled.div`
  height: auto;
  width: 40%;
  display: flex;
  align-items: center;

  @media ${device.laptop} { 
    justify-content: flex-start;
    padding-left: 16px;
  }
`;

const LogoContainer = styled.div`
  height: auto;
  width: 20%;
  display: flex;
  justify-content: center;

  @media ${device.laptop} { 
    align-items: center;
  }
`;

const BrandLogo = styled.img`
  height: 60px;
  margin-top: -12px;
  transition: all 0.3s ease;

  @media ${device.laptop} { 
    height: 30px;
    margin: 2px 0 -2px 0;
  }
`;

const IconsContainer = styled.div`
  height: auto;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${device.laptop} { 
    margin-right: 8px;
    align-items: flex-end;
  }
`;

export { HeaderContainer, PrivBusWrapper, NavLink, HeaderIconLink, HeaderWrapper, NavContainer, LogoContainer, BrandLogo, IconsContainer };
