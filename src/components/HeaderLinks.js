import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PrivBusLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  padding: 10px 16px 10px 0;
  transition: all 0.2s ease-in-out;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }

  &:hover {
    color: #fa7268;
  }
`;

export default (props) => <PrivBusLink {...props} />;
