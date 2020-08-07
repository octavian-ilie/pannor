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
  color: var(--main);
  font-family: var(--pannor-regular);
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.div`
  color: var(--main);
  flex-grow: 1;
`;

const Go = styled(Link)`
  color: var(--main);
  font-family: var(--pannor-medium);
  text-decoration: none;
  border: 1px solid var(--main);
  border-radius: 3px;
  padding: 12px 16px 8px 16px;
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    background-color: var(--main);
  }

  &::after {
    font-family: 'navIcons' !important;
    font-weight: 600;
    position: absolute;
    content: ' \\e903';
    right: 10px;
    color: var(--main);
  }

  &:hover::after {
    color: #fff;
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
