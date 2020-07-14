import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { device } from '../rules/device';

const FAPayInvoiceContainer = styled(Link)`
  transition: all 0.2s ease;
  color: #222;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px 0 0;
  position: relative;

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

const FAPayInvoiceIcon = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <path fill="currentColor" d="M65,14H35c-3.3,0-6,2.7-6,6v60c0,3.3,2.7,6,6,6h30c3.3,0,6-2.7,6-6V20C71,16.7,68.3,14,65,14z M69,80c0,2.2-1.8,4-4,4H35
		c-2.2,0-4-1.8-4-4V20c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4V80z M53,18h-6v2h6V18z M50,74c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4
		S52.2,74,50,74z M50,80c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S51.1,80,50,80z M54,46h-3.4l1-12H59v-2h-7.2l0.2-2.9l-2-0.2L49.8,32
		H46c-4.4,0-8,3.6-8,8s3.6,8,8,8h2.5l-1.1,13H39v2h8.2L47,65.9l2,0.2l0.2-3.1H54c4.4,0,8-3.6,8-8v-1C62,49.6,58.4,46,54,46z
		 M48.6,46H46c-3.3,0-6-2.7-6-6s2.7-6,6-6h3.6L48.6,46z M60,55c0,3.3-2.7,6-6,6h-4.6l1.1-13H54c3.3,0,6,2.7,6,6V55z"/>
  </Svg>
);

function FAPayInvoice() {
  return (
    <FAPayInvoiceContainer to="/pay">
      <FAPayInvoiceIcon/> Pay invoice
    </FAPayInvoiceContainer>
  )
}

export default FAPayInvoice;
