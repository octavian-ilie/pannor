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
  border-bottom: 1px solid #eaeaea;
  background-color: #fcfcfc;

  &:hover {
    color: #222;
    background-color: #fff;
  }

  &.active {
    color: #222;
    background-color: #fff;
    font-size: 1rem;
  }
`;

const Svg = styled(Icon)` 
  width: 40px; 
  height: 40px;
  margin-right: 1rem;
`;

export { Go, Svg };
