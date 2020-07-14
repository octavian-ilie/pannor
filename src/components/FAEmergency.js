import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { device } from '../rules/device';

const FAEmergencyContainer = styled(Link)`
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

const FAEmergencyIcon = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <path fill="currentColor" d="M65,14H35c-3.3,0-6,2.7-6,6v60c0,3.3,2.7,6,6,6h30c3.3,0,6-2.7,6-6V20C71,16.7,68.3,14,65,14z M69,80c0,2.2-1.8,4-4,4H35
		c-2.2,0-4-1.8-4-4V20c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4V80z M53,18h-6v2h6V18z M50,74c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4
		S52.2,74,50,74z M50,80c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S51.1,80,50,80z M58,40c0-4.4-3.6-8-8-8s-8,3.6-8,8v6h-3v14
		c0,2.2,1.8,4,4,4h14c2.2,0,4-1.8,4-4V46h-3V40z M44,40c0-3.3,2.7-6,6-6s6,2.7,6,6v6H44V40z M59,48v12c0,1.1-0.9,2-2,2H43
		c-1.1,0-2-0.9-2-2V48H59z"/>
  </Svg>
);

function FAEmergency() {
  return (
    <FAEmergencyContainer to="/support/emergency">
      <FAEmergencyIcon/> Emergencies
    </FAEmergencyContainer>
  )
}

export default FAEmergency;
