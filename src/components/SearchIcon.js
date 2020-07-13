import React from 'react';
import styled from 'styled-components';
import { device } from '../rules/device';
import Icon from './Icon';

const Svg = styled(Icon)` 
  width: 48px; 
  height: 48px;
  transition: all 0.2s ease-in-out;

  @media ${device.laptop} { 
    height: 32px;
    width: 32px;
    margin-right: -10px;
  }
`;

export const SearchIcon = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <path
      fill="currentColor"
      d="M38.813,27.05a24.122,24.122,0,0,0-1.464,34.084l-16.7,16.8L22.015,79.3l16.8-16.8a24.075,24.075,0,1,0,0-35.451ZM32.954,44.824h0a22.17,22.17,0,1,1,22.17,22.17A22.17,22.17,0,0,1,32.954,44.824Z" 
      stroke="currentColor"
      strokeWidth="1.2"
    /> 
  </Svg>
);
