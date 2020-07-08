import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 1170px;
  height: auto;
  margin-top: 54px;
`;
  
const Card = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  background-color: #f4f4f4;
`;

const CardInfoContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 2rem;
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
`;

export { Container, Card, CardInfoContainer, Title, Text, Go };
