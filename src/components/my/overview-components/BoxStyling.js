import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BoxTitle = styled.div`
  font-family: 'Octavian Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #666;
  font-size: 1.2rem;
  font-weight: 500;
  width: 100%;
  padding: 1rem;
`;

const BoxBottomLink = styled(Link)`
  width: 100%;
  padding: 1rem;
  font-size: 0.9rem;
  text-decoration: none;
  color: #888;
  transition: all 0.2s ease-in-out;
  border-top: 1px solid #eaeaea;
  position: relative;
  background-color: #fcfcfc;

  &:hover {
    color: #222;
    background-color: #fff;
  }

  &::after {
    font-family: 'navIcons' !important;
    font-weight: 600;
    content: '\\e903';
    position: absolute;
    right: 12px;
  }
`;

export { BoxTitle, BoxBottomLink };