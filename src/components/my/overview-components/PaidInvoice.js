import React from 'react';
import styled from 'styled-components';
import Icon from '../../Icon';

const Container = styled.div`
  transition: all 0.2s ease;
  color: #222;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: -1rem;

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
  width: 60px; 
  height: 60px;
  margin-bottom: 1rem;
`;

const Text = styled.div`
  color: #222;
  text-align: center;
`;

const PaidInvoiceIcon = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <g fill="currentColor">
      <path d="M22,93h44c-1.1-0.6-2-1.2-2.9-2H22c-2.2,0-4-1.8-4-4V13c0-2.2,1.8-4,4-4h31c1.1,0,2,0.4,2.8,1.2C56.5,11,57,12,57,13v10
      c0,3.3,2.7,6,6,6h12c0.9,0,1.8,0.3,2.5,0.9l0.3,0.3C78.5,31,79,32,79,33v28.8c0.7,0.2,1.4,0.5,2,0.8V33c0-1.6-0.6-3.1-1.8-4.2
      c-0.1-0.1-0.3-0.3-0.4-0.4L57.2,8.7l0,0C56.1,7.6,54.6,7,53,7H22c-3.3,0-6,2.7-6,6v74C16,90.3,18.7,93,22,93z M59,13.1L74.3,27H63
      c-2.2,0-4-1.8-4-4V13.1z"/>
      <path d="M28.5,28h15c0.6,0,1-0.4,1-1s-0.4-1-1-1h-15c-0.6,0-1,0.4-1,1S27.9,28,28.5,28z"/>
      <path d="M28.5,40h28c0.6,0,1-0.4,1-1s-0.4-1-1-1h-28c-0.6,0-1,0.4-1,1S27.9,40,28.5,40z"/>
      <path d="M67.5,44c0-0.6-0.4-1-1-1h-38c-0.6,0-1,0.4-1,1s0.4,1,1,1h38C67.1,45,67.5,44.6,67.5,44z"/>
      <path d="M64.5,49c0-0.6-0.4-1-1-1h-35c-0.6,0-1,0.4-1,1s0.4,1,1,1h35C64.1,50,64.5,49.6,64.5,49z"/>
      <path d="M28.5,55h12c0.6,0,1-0.4,1-1s-0.4-1-1-1h-12c-0.6,0-1,0.4-1,1S27.9,55,28.5,55z"/>
      <path d="M28.5,73h8c0.6,0,1-0.4,1-1s-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1S27.9,73,28.5,73z"/>
      <path d="M28.5,78h15c0.6,0,1-0.4,1-1s-0.4-1-1-1h-15c-0.6,0-1,0.4-1,1S27.9,78,28.5,78z"/>
      <path d="M74,63c-8.3,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15S82.3,63,74,63z M71,85.4l-6.7-6.7l1.4-1.4l5.3,5.3l11.3-11.3l1.4,1.4
        L71,85.4z"/>
    </g>
  </Svg>
);

function PaidInvoiceLink() {
  return (
    <Container to="/my/PaidInvoice">
      <PaidInvoiceIcon/> 
      <Text>
        All invoices have been paid. Thank you!
      </Text>
    </Container>
  )
}

export default PaidInvoiceLink;
