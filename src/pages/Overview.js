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

const HeaderContainer = styled.div`
  width: 1170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  font-family: 'Octavian Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  color: #222;
  padding: 4rem 0;
`;

const ChooseNumber = styled.select`
  height: 60px;
  width: 160px;
  outline: none;
  align-self: center;
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  color: #222;
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
      <HeaderContainer>
        <Title>
          {persGreeting}userName
        </Title>
        <ChooseNumber>
          <option>
            0788123456
          </option>
          <option>
            0788000111
          </option>
          </ChooseNumber>
      </HeaderContainer>
    </Background>
  );
}

export default Overview;