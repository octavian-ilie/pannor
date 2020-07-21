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

const InvoicesIcon = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <g>
      <path fill="currentColor" d="M77.5,10.1h-55c-3,0-5.5,2.5-5.5,5.5v68.8c0,3,2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5c0-2,1.6-3.7,3.7-3.7s3.7,1.6,3.7,3.7
        c0,3,2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5c0-2,1.6-3.7,3.7-3.7s3.7,1.6,3.7,3.7c0,3,2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5
        c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7c0,3,2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5V15.6C83,12.6,80.5,10.1,77.5,10.1z M81.2,84.4
        c0,2-1.6,3.7-3.7,3.7s-3.7-1.6-3.7-3.7c0-3-2.5-5.5-5.5-5.5c-3,0-5.5,2.5-5.5,5.5c0,2-1.6,3.7-3.7,3.7c-2,0-3.7-1.6-3.7-3.7
        c0-3-2.5-5.5-5.5-5.5s-5.5,2.5-5.5,5.5c0,2-1.6,3.7-3.7,3.7c-2,0-3.7-1.6-3.7-3.7c0-3-2.5-5.5-5.5-5.5c-3,0-5.5,2.5-5.5,5.5
        c0,2-1.6,3.7-3.7,3.7s-3.7-1.6-3.7-3.7V15.6c0-2,1.6-3.7,3.7-3.7h55c2,0,3.7,1.6,3.7,3.7V84.4z"/>
      <path fill="currentColor" d="M50.5,28.5H31.7c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9h18.8c0.5,0,0.9-0.4,0.9-0.9S51,28.5,50.5,28.5z"/>
      <path fill="currentColor" d="M68.3,28.5h-7.8c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9h7.8c0.5,0,0.9-0.4,0.9-0.9S68.8,28.5,68.3,28.5z"/>
      <path fill="currentColor" d="M50.5,42.2H31.7c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9h18.8c0.5,0,0.9-0.4,0.9-0.9S51,42.2,50.5,42.2z"/>
      <path fill="currentColor" d="M68.3,42.2h-7.8c-0.5,0-0.9,0.4-0.9,0.9S60,44,60.5,44h7.8c0.5,0,0.9-0.4,0.9-0.9S68.8,42.2,68.3,42.2z"/>
      <path fill="currentColor" d="M50.5,56H31.7c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9h18.8c0.5,0,0.9-0.4,0.9-0.9S51,56,50.5,56z"/>
      <path fill="currentColor" d="M68.3,56h-7.8c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9h7.8c0.5,0,0.9-0.4,0.9-0.9S68.8,56,68.3,56z"/>
    </g>
  </Svg>
);

function InvoicesLink() {
  return (
    <Go to="/my/invoices">
      <InvoicesIcon/> Invoices
    </Go>
  )
}

export default InvoicesLink;
