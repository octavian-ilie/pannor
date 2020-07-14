import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../rules/device';

const Container = styled.div`
  width: 1170px;
  height: auto;
  margin-top: 54px;

  @media ${device.bp1} { 
    width: 100%;
  }

  @media ${device.tablet} { 
    margin-top: 2rem;
  }
`;
  
const GrayCard = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  background-color: #f5f5f5;

  @media ${device.tablet} { 
    height: auto;
    flex-direction: column;
  }
`;

const WhiteCard = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  background-color: #fff;

  @media ${device.tablet} { 
    height: auto;
    flex-direction: column;
  }
`;

const HueCard = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  background-color: rgba(250, 114, 104, 0.1);
`;

const CardInfoContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 2rem;

  @media ${device.tablet} { 
    padding: 2rem 1rem;
    width: 100%;
  }
`;

const Title = styled.div`
  color: #222;
  font-family: 'Octavian Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.div`
  color: #222;
  flex-grow: 1;
`;

const Go = styled(Link)`
  color: #222;
  text-decoration: underline;

  &:hover {
    color: #fa7268;
  }

  @media ${device.tablet} { 
    margin-top: 2rem;
  }
`;

const AppsContainer = styled.div`
  display: flex;
  margin-bottom: -16px;

  @media ${device.tablet} { 
    margin-top: 2rem;
  }
`;

export { Container, GrayCard, WhiteCard, HueCard, CardInfoContainer, Title, Text, Go, AppsContainer };
