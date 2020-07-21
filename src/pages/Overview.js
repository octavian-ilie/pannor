import React from "react";
import defaultTitle from '../rules/defaultTitle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from '../PrivateRoute';
import Summary from '../components/my/Summary';
import Resources from '../components/my/Resources';

const Background = styled.div`
  width: 100%;
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
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
  margin-bottom: 4rem;
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
  color: #888;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  box-shadow: 0 1px 2px rgba(0,0,0,0.015),
              0 2px 4px rgba(0,0,0,0.015),
              0 4px 8px rgba(0,0,0,0.015),
              0 8px 16px rgba(0,0,0,0.015),
              0 16px 32px rgba(0,0,0,0.015),
              0 32px 64px rgba(0,0,0,0.015);

  &:hover {
    color: #222;
    padding-left: 88px;
  }

  &::before {
    opacity: 0;
    content: 'Switch ';
    color: #888;
    position: absolute;
    transition: all 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
    content: 'Switch ';
    position: absolute;
    transform translateX(-70px);
  }
`;

const Navigation = styled.div`
  width: 20%;
  height: 800px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.015),
              0 2px 4px rgba(0,0,0,0.015),
              0 4px 8px rgba(0,0,0,0.015),
              0 8px 16px rgba(0,0,0,0.015),
              0 16px 32px rgba(0,0,0,0.015),
              0 32px 64px rgba(0,0,0,0.015);
`;

const Content = styled.div`
  width: 75%;
  height: 800px;
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
      <AppContainer>
        <Navigation>
          <Link to="/my">Overview</Link>
          <Link to="/my/resources">Resources</Link>
        </Navigation>
        <Content>
              <PrivateRoute exact path="/my" component={Summary}/>
              <PrivateRoute path="/my/resources" component={Resources}/>
        </Content>
      </AppContainer>
    </Background>
  );
}

export default Overview;
