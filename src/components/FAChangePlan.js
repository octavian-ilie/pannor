import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { device } from '../rules/device';

const FAChangePlanContainer = styled(Link)`
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

const FAChangePlanIcon = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <path fill="currentColor" d="M65,14H35c-3.3,0-6,2.7-6,6v60c0,3.3,2.7,6,6,6h30c3.3,0,6-2.7,6-6V20C71,16.7,68.3,14,65,14z M69,80c0,2.2-1.8,4-4,4H35
		c-2.2,0-4-1.8-4-4V20c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4V80z M53,18h-6v2h6V18z M50,74c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4
		S52.2,74,50,74z M50,80c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S51.1,80,50,80z M60.5,24h-21C37,24,35,26,35,28.5s2,4.5,4.5,4.5h21
		c2.5,0,4.5-2,4.5-4.5S63,24,60.5,24z M60.5,31h-21c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h21c1.4,0,2.5,1.1,2.5,2.5
		S61.9,31,60.5,31z M60.5,35h-21C37,35,35,37,35,39.5s2,4.5,4.5,4.5h21c2.5,0,4.5-2,4.5-4.5S63,35,60.5,35z M60.5,42h-21
		c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h21c1.4,0,2.5,1.1,2.5,2.5S61.9,42,60.5,42z"/>
  </Svg>
);

function FAChangePlan() {
  return (
    <FAChangePlanContainer to="/my/plan">
      <FAChangePlanIcon/> Change plan
    </FAChangePlanContainer>
  )
}

export default FAChangePlan;
