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

const PlansIcon = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <g fill="currentColor">
      <g>
        <g>
          <g>
            <path d="M80,80.2H20c-4.2,0-7.7-3.4-7.7-7.7v-38c0-4.2,3.4-7.7,7.7-7.7h60c4.2,0,7.7,3.4,7.7,7.7v38
              C87.7,76.7,84.2,80.2,80,80.2z M20,29c-3,0-5.5,2.5-5.5,5.5v38c0,3,2.5,5.5,5.5,5.5h60c3,0,5.5-2.5,5.5-5.5v-38
              c0-3-2.5-5.5-5.5-5.5L20,29z"/>
          </g>
        </g>
      </g>
      <g>
        <g>
          <g>
            <path d="M62.4,27.5c-0.6,0-1.1-0.5-1.1-1.1v-2.7c0-0.9-1-1.6-2.2-1.6H40.5c-1.2,0-2.2,0.8-2.2,1.6v2.7c0,0.6-0.5,1.1-1.1,1.1
              s-1.1-0.5-1.1-1.1v-2.7c0-2.1,2-3.8,4.4-3.8h18.7c2.4,0,4.4,1.7,4.4,3.8v2.7C63.5,27,63,27.5,62.4,27.5z"/>
          </g>
        </g>
      </g>
      <g>
        <g>
          <g>
            <path d="M80,63.3H20c-4.2,0-7.7-3.4-7.7-7.7V44c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1v11.7c0,3,2.5,5.5,5.5,5.5h60
              c3,0,5.5-2.5,5.5-5.5V44c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1v11.7C87.7,59.9,84.2,63.3,80,63.3z"/>
          </g>
        </g>
      </g>
      <g>
        <g>
          <g>
            <g>
              <path d="M69.3,66.7c-0.6,0-1.1-0.5-1.1-1.1v-5.6c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1v5.6
                C70.4,66.3,69.9,66.7,69.3,66.7z"/>
            </g>
          </g>
        </g>
        <g>
          <g>
            <g>
              <path d="M30.7,66.7c-0.6,0-1.1-0.5-1.1-1.1v-5.6c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1v5.6
                C31.8,66.3,31.3,66.7,30.7,66.7z"/>
            </g>
          </g>
        </g>
      </g>
    </g>
  </Svg>
);

function PlansLink() {
  return (
    <Go to="/my/plan">
      <PlansIcon/> Plans and options
    </Go>
  )
}

export default PlansLink;
