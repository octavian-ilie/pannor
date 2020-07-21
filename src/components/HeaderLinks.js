import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PrivBusLink = styled(NavLink)`
  text-decoration: none;
  color: #888;
  font-size: 0.9rem;
  padding: 10px 16px 10px 0;
  transition: all 0.2s ease-in-out;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }

  &:hover {
    color: #fa7268;
  }

  &.active {
    color: #333;
  }
`;

export default (props) => <PrivBusLink {...props} />;
