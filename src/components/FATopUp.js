import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { device } from '../rules/device';

const FATopUpContainer = styled(Link)`
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

const FATopUpIcon = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <path 
    fill="currentColor"
    d="M65,14H35c-3.3,0-6,2.7-6,6v60c0,3.3,2.7,6,6,6h30c3.3,0,6-2.7,6-6V20C71,16.7,68.3,14,65,14z M69,80c0,2.2-1.8,4-4,4H35
		c-2.2,0-4-1.8-4-4V20c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4V80z M53,18h-6v2h6V18z M50,74c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4
		S52.2,74,50,74z M50,80c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S51.1,80,50,80z M50,37c-7.2,0-13,5.8-13,13s5.8,13,13,13
		s13-5.8,13-13S57.2,37,50,37z M50,61c-6.1,0-11-4.9-11-11s4.9-11,11-11s11,4.9,11,11S56.1,61,50,61z M48,53.6l-4.3-4.3l-1.4,1.4
		l5.7,5.7l9.7-9.7l-1.4-1.4L48,53.6z"/>
  </Svg>
);

function FATopUp() {
  return (
    <FATopUpContainer to="/topup">
      <FATopUpIcon/> Add balance
    </FATopUpContainer>
  )
}

export default FATopUp;
