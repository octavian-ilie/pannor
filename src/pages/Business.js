import React from 'react';
import defaultTitle from '../rules/defaultTitle';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: #f5f5f5;
`;

const Container = styled.div`
  width: 1170px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-family: 'Octavian Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  color: #222;
  padding: 4rem 0;
`;

function Business(props) {
  document.title = defaultTitle + 'Complete business services for small companies and corporate';

  return (
    <Background>
      <Container>
        <Title>
          Business landing page
        </Title>
      </Container>
    </Background>
  )
}

export default Business;
