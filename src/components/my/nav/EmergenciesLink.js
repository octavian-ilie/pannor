import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../../Icon';

const Go = styled(NavLink)`
  transition: all 0.2s ease;
  color: #888;
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #f3f3f3;

  &:hover {
    color: #222;
    background-color: #fff;
  }

  &.active {
    color: #222;
    font-size: 1rem;
  }
`;

const Svg = styled(Icon)` 
  width: 40px; 
  height: 40px;
  margin-right: 1rem;
`;

const EmergenciesIcon = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <g>
      <g>
        <path fill="none" d="M50,12.4c-20.7,0-37.6,16.9-37.6,37.6S29.3,87.6,50,87.6S87.6,70.7,87.6,50S70.7,12.4,50,12.4z M48.7,34.4
          c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3v22.1c0,0.7-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3V34.4z M50,71.1c-1.2,0-2.2-1-2.2-2.2
          c0-1.2,1-2.2,2.2-2.2s2.2,1,2.2,2.2C52.2,70.1,51.2,71.1,50,71.1z"/>
        <circle fill="none" cx="50" cy="68.8" r="0.4"/>
        <path fill="currentColor" d="M50,57.7c0.7,0,1.3-0.6,1.3-1.3V34.4c0-0.7-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3v22.1C48.7,57.2,49.3,57.7,50,57.7z"/>
        <path fill="currentColor" d="M50,66.6c-1.2,0-2.2,1-2.2,2.2c0,1.2,1,2.2,2.2,2.2s2.2-1,2.2-2.2C52.2,67.6,51.2,66.6,50,66.6z M50,69.2
          c-0.2,0-0.4-0.2-0.4-0.4s0.2-0.4,0.4-0.4c0.2,0,0.4,0.2,0.4,0.4S50.2,69.2,50,69.2z"/>
        <path fill="currentColor" d="M50,9.8C27.9,9.8,9.8,27.9,9.8,50s18,40.2,40.2,40.2s40.2-18,40.2-40.2S72.1,9.8,50,9.8z M50,87.6
          c-20.7,0-37.6-16.9-37.6-37.6S29.3,12.4,50,12.4S87.6,29.3,87.6,50S70.7,87.6,50,87.6z"/>
      </g>
    </g>
  </Svg>
);

function EmergenciesLink() {
  return (
    <Go to="/my/emergencies">
      <EmergenciesIcon/> Emergencies
    </Go>
  )
}

export default EmergenciesLink;
