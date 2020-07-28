import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../../Icon';

const Go = styled(NavLink)`
  transition: all 0.2s ease;
  color: var(--secondary);
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.2rem 1rem 1rem 1rem;
  border-bottom: 1px solid #eaeaea;
  background-color: #fcfcfc;

  &:hover {
    color: var(--main);
    background-color: #fff;
  }

  &.active {
    color: var(--main);
    background-color: #fff;
    font-size: 1rem;
    font-weight: 600;
  }
`;

const Svg = styled(Icon)` 
  width: 40px; 
  height: 40px;
  margin-right: 1rem;
`;

export { Go, Svg };
