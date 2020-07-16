import React from "react";
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

function Overview(props) {
  document.title = defaultTitle + 'My overview';

  const date = new Date();
  const time = date.getHours();
  let persGreeting = '';

  if (time >= 6 && time < 12) {
    persGreeting = 'Good morning, ';
  } else if (time >= 12 && time < 18) {
    persGreeting = 'Good afternoon, ';
  } else persGreeting = 'Good evening, ';

  return (
    <Background>
      <Container>
        <Title>
          {persGreeting}userName
        </Title>
      </Container>
    </Background>
  );
}

export default Overview;