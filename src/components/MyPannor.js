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
    user-select: none;
    -webkit-tap-highlight-color:  rgba(0, 0, 0, 0); 
  }
`;

export const MyPannor = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <path
      fill="currentColor"
      d="M77.374,80.6a1.61,1.61,0,1,1-3.22,0,24.154,24.154,0,0,0-48.308,0,1.61,1.61,0,0,1-3.22,0,27.374,27.374,0,1,1,54.748,0ZM50,50A16.1,16.1,0,1,1,66.1,33.9,16.1,16.1,0,0,1,50,50Zm0-3.221A12.882,12.882,0,1,0,37.118,33.9,12.881,12.881,0,0,0,50,46.779Z"
    /> 
  </Svg>
);
