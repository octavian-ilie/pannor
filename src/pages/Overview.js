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

const AppContainer = styled.div`
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

const ChooseNumber = styled.div`
  background-color: #fff;
  align-self: center;
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 3px;
  color: #555;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  &:hover {
    color: #222;
    box-shadow: 0 1px 2px rgba(0,0,0,0.02),
                0 2px 4px rgba(0,0,0,0.02),
                0 4px 8px rgba(0,0,0,0.02),
                0 8px 16px rgba(0,0,0,0.02),
                0 16px 32px rgba(0,0,0,0.02),
                0 32px 64px rgba(0,0,0,0.02);
  }
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

  const userName = 'Octavian';
  const currentNo = '0788123456'

  return (
    <Background>
      <HeaderContainer>
        <Title>
          {persGreeting}{userName}
        </Title>
        <ChooseNumber>
          {currentNo}
        </ChooseNumber>
      </HeaderContainer>
    </Background>
  );
}

export default Overview;
