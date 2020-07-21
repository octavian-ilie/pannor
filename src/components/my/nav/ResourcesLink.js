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

const ResourcesIcon = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <g>
      <path fill="currentColor" d="M50.2,28.4c-1.8,0-3.5,0.1-5.3,0.4c-0.5,0.1-0.9,0.6-0.9,1.1c0.1,0.5,0.6,0.9,1.1,0.9c1.7-0.2,3.3-0.3,5-0.3
        c3.9,0,7.6,0.6,11.1,1.7c0,0.1-0.1,0.1-0.1,0.2l-1.9,5c-0.2,0.5,0.1,1.1,0.6,1.3c0.1,0,0.2,0.1,0.4,0.1c0.4,0,0.8-0.2,0.9-0.6
        l1.9-5c0-0.1,0-0.2,0-0.3c8.3,3.1,15.3,9,19.7,16.6l-4.6,2.6c-0.5,0.3-0.7,0.9-0.4,1.4c0.2,0.3,0.5,0.5,0.9,0.5
        c0.2,0,0.3,0,0.5-0.1l4.6-2.5c2.6,5.1,4.1,10.9,4.1,17c0,0.6,0.4,1,1,1s1-0.4,1-1C89.7,46.2,72,28.4,50.2,28.4z"/>
      <path fill="currentColor" d="M32.1,32.8C18.8,39.6,10.6,53.1,10.6,68c0,0.6,0.4,1,1,1s1-0.4,1-1c0-6.1,1.5-11.9,4.1-17.1l0.1,0.1l4.6,2.6
        c0.2,0.1,0.3,0.1,0.5,0.1c0.4,0,0.7-0.2,0.9-0.5c0.3-0.5,0.1-1.1-0.4-1.4l-4.6-2.6c-0.1,0-0.1,0-0.2-0.1C21.1,43,26.4,37.8,33,34.4
        c0.5-0.3,0.7-0.9,0.4-1.3C33.2,32.7,32.6,32.5,32.1,32.8z"/>
      <path fill="currentColor" d="M38.8,29.8c-0.3-0.4-0.7-0.5-1.2-0.4c-0.4,0.2-0.7,0.6-0.7,1c0.3,3.3,3.4,31.9,4.3,34.5c1.6,4.6,4.8,7.3,8.5,7.3l0,0
        c1,0,2-0.2,3-0.5c4.9-1.8,6.7-6.7,4.6-12.6C56.5,56.5,40.6,32.5,38.8,29.8z M52.2,69.8c-0.8,0.3-1.6,0.4-2.3,0.4l0,0
        c-2.9,0-5.3-2.2-6.7-6c-0.6-1.6-2.4-17.5-3.8-30c6.9,10.5,15.6,24,16.2,25.6C56.9,63.6,56.8,68.2,52.2,69.8z"/>
    </g>
  </Svg>
);

function ResourcesLink() {
  return (
    <Go to="/my/resources">
      <ResourcesIcon/> Resources
    </Go>
  )
}

export default ResourcesLink;
