import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../rules/device';

const PromoCard = styled.div`
  min-height: 300px;
  width: 350px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} { 
    width: 100%;
    margin-bottom: 40px;
  }
`;

const Title = styled.div`
  font-family: 'Octavian Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  color: var(--pannor);
  margin-bottom: 0.6rem;
`;

const Text = styled.div`
  color: #222;
  margin-bottom: 2rem;
`;

const PromoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  background-color: var(--main);
  border-radius: 3px;
  font-family: 'Octavian Medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 12px 16px 8px 16px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    background-color: var(--pannor);
  }

  &::after {
    font-family: 'navIcons' !important;
    font-weight: 600;
    position: absolute;
    content: ' \\e903';
    right: 10px;
    color: #fff;
  }
`;

export { PromoCard, Title, Text, PromoLink };
