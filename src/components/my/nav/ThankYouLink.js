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
  border-bottom: 1px solid #f5f5f5;

  &:hover {
    color: #222;
    background-color: #fff;
  }

  &.active {
    color: #222;
  }
`;

const Svg = styled(Icon)` 
  width: 40px; 
  height: 40px;
  margin-right: 1rem;
`;

const ThankYouIcon = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <path fill="currentColor" d="M22.5,91.4h55c5,0,9-4,9-9V50.6c3.2-0.2,5.6-2.8,5.6-6v-8c0-3.3-2.7-6-6-6h-9c3.3-2.3,5.2-6.1,5.2-10.1
		C82.5,14.1,77.4,8.8,71,8.6c0,0-0.1,0-0.1,0c-6.7,0-12.6,3.9-17.1,11.3C52.3,22.5,51,25.2,50,28c-1-2.8-2.3-5.5-3.8-8.1
		C41.7,12.5,35.8,8.6,29.1,8.6C22.7,8.7,17.6,14,17.7,20.4c0,0,0,0.1,0,0.1c0,4,1.9,7.8,5.2,10.1h-9c-3.3,0-6,2.7-6,6v8
		c0,3.2,2.4,5.8,5.6,6v31.8C13.5,87.4,17.5,91.4,22.5,91.4z M22.5,89.4c-3.9,0-7-3.1-7-7V50.6H49v38.8H22.5z M77.5,89.4H51V50.6
		h33.5v31.8C84.5,86.3,81.4,89.4,77.5,89.4z M86.1,32.6c2.2-0.1,3.9,1.6,4,3.8c0,0.1,0,0.1,0,0.2v8c0,2.2-1.8,4-4,4H51v-16H86.1z
		 M70.9,10.6c5.3,0.1,9.5,4.5,9.4,9.8c0,0,0,0.1,0,0.1c0,5.4-4.3,10.1-9.4,10.1H51.3C52.6,26.4,58.3,10.6,70.9,10.6z M19.7,20.5
		c-0.2-5.3,4-9.7,9.3-9.9c0,0,0.1,0,0.1,0c12.6,0,18.3,15.8,19.6,20H29.1C24,30.6,19.7,25.9,19.7,20.5z M9.9,44.6v-8
		c-0.1-2.2,1.6-3.9,3.8-4c0.1,0,0.1,0,0.2,0H49v16H13.9C11.7,48.6,9.9,46.8,9.9,44.6z"/>
  </Svg>
);

function ThankYouLink() {
  return (
    <Go to="/my/loyalty">
      <ThankYouIcon/> Loyalty program
    </Go>
  )
}

export default ThankYouLink;
