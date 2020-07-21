import React from "react";
import { Link, Redirect } from 'react-router-dom';
import defaultTitle from '../rules/defaultTitle';
import styled from 'styled-components';
import { Card, Form, Title, Text, Input, Button } from '../components/AuthForms';
import background from '../img/my_bg-faded.jpg';
import { device } from '../rules/device';

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  height: calc(100vh - 110px);
  background: url(${background}) no-repeat;
  background-size: cover;
  overflow: hidden;
  overflow-y: auto;

  @media ${device.laptop} { 
    min-height: calc(100vh - 54px);
  }

  @media ${device.tablet} { 
    align-items: flex-start;
  }
`;

const SignUpLink = styled(Link)`
  text-decoration: none;
  color: #666;
  margin-top: 1rem;

  &:hover {
    color: #222;
  }
`;

function Login(props) {
  if (props.signedin === true) {
    return (
      <Redirect to="/my"/>
      )
    }
    
  document.title = defaultTitle + 'Sign in';

  return (
      <Container>
        <Card>
          <Title>
            Sign in to your account
          </Title>
          <Text>
            Fill in your username or your Pannor phone number and your password to continue.
          </Text>
          <Form>
            <Input type="text" placeholder="username"/>
            <Input type="password" placeholder="password" />
            <Button to="/my">Continue</Button>
          </Form>
          <SignUpLink to="/signup">Don't have an account yet? Let's create one.</SignUpLink>
        </Card>
      </Container>
  );
}

export default Login;
