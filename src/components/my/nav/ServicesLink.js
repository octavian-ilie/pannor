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

const ServicesIcon = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <g fill="currentColor" transform="translate(0,-952.36215)">
      <path d="M21.5,972.7c-7.2,0-13,5.8-13,13c0,7.2,5.8,13,13,13h56.9c7.2,0,13-5.8,13-13c0-7.2-5.8-13-13-13H21.5z M21.5,975.1h56.9
        c5.9,0,10.7,4.7,10.7,10.7c0,5.9-4.7,10.7-10.7,10.7H21.5c-5.9,0-10.7-4.7-10.7-10.7C10.9,979.8,15.6,975.1,21.5,975.1z
        M21.5,979.8c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9C27.5,982.5,24.8,979.8,21.5,979.8z M21.5,982.2
        c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6C18,983.8,19.6,982.2,21.5,982.2z M21.5,1005.9c-7.2,0-13,5.8-13,13
        c0,7.2,5.8,13,13,13h56.9c7.2,0,13-5.8,13-13c0-7.2-5.8-13-13-13H21.5z M21.5,1008.3h56.9c5.9,0,10.7,4.7,10.7,10.7
        c0,5.9-4.7,10.7-10.7,10.7H21.5c-5.9,0-10.7-4.7-10.7-10.7C10.9,1013,15.6,1008.3,21.5,1008.3z M78.5,1013c-3.3,0-5.9,2.7-5.9,5.9
        c0,3.3,2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9C84.4,1015.7,81.7,1013,78.5,1013z M78.5,1015.4c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6
        c-2,0-3.6-1.6-3.6-3.6C74.9,1017,76.5,1015.4,78.5,1015.4z"/>
    </g>
  </Svg>
);

function ServicesLink() {
  return (
    <Go to="/my/services">
      <ServicesIcon/> Services
    </Go>
  )
}

export default ServicesLink;