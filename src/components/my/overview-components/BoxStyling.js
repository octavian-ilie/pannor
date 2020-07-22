import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: auto;
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 2px rgba(0,0,0,0.015),
              0 2px 4px rgba(0,0,0,0.015),
              0 4px 8px rgba(0,0,0,0.015),
              0 8px 16px rgba(0,0,0,0.015),
              0 16px 32px rgba(0,0,0,0.015),
              0 32px 64px rgba(0,0,0,0.015);
`;

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

export { Container, BoxTitle, BoxBottomLink };
