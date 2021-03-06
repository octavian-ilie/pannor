import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { device } from '../rules/device';

const FAPannorCloudContainer = styled(Link)`
  transition: all 0.2s ease;
  color: #222;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px 0 0;

  &:hover {
    color: #fa7268;
    background-color: #fff;
  }

  @media ${device.laptop} { 
    &::after {
      font-family: 'navIcons' !important;
      font-weight: 800;
      content: '\\e903';
      position: absolute;
      right: 12px;
    }
  }
`;

const Svg = styled(Icon)` 
  width: 80px; 
  height: 80px;
`;

const FAPannorCloudIcon = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <path fill="currentColor" d="M65,14H35c-3.3,0-6,2.7-6,6v60c0,3.3,2.7,6,6,6h30c3.3,0,6-2.7,6-6V20C71,16.7,68.3,14,65,14z M69,80c0,2.2-1.8,4-4,4H35
		c-2.2,0-4-1.8-4-4V20c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4V80z M53,18h-6v2h6V18z M50,74c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4
		S52.2,74,50,74z M50,80c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S51.1,80,50,80z M61.5,45.2c-0.4-3.8-3.7-6.9-7.7-6.9
		c-2.3,0-4.5,1-6,2.8c-0.5-0.1-1-0.2-1.6-0.2c-2.9,0-5.4,2.1-6.1,4.8c-0.4,0-0.9,0.1-1.3,0.2c-1.9,0.6-3.3,2.5-3.3,4.6
		c0,3.5,2.9,6.4,6.4,6.4h16.6c3.5,0,6.4-2.9,6.4-6.4v-0.2C65,48.1,63.6,46,61.5,45.2z M63,50.6c0,2.4-2,4.4-4.4,4.4H42
		c-2.4,0-4.4-2-4.4-4.4c0-1.3,0.8-2.4,1.9-2.7c0.2-0.1,0.5-0.1,0.7-0.1s0.4,0,0.6,0.1l1.2,0.3l0.1-1.2c0.1-2.2,2-4,4.2-4
		c0.5,0,1.1,0.1,1.6,0.3l0.8,0.3l0.5-0.7c1.1-1.6,2.9-2.5,4.8-2.5c3.1,0,5.7,2.5,5.7,5.6v0.8l0.7,0.2c1.6,0.4,2.7,1.9,2.7,3.5
		L63,50.6L63,50.6z"/>
  </Svg>
);

function FAPannorCloud() {
  return (
    <FAPannorCloudContainer to="/cloud">
      <FAPannorCloudIcon/> Pannor Cloud
    </FAPannorCloudContainer>
  )
}

export default FAPannorCloud;
