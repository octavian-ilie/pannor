import React from "react";
import { Link } from 'react-router-dom';
import defaultTitle from '../rules/defaultTitle';
import styled from 'styled-components';
import { Card, Title, Text, Form, Input, Button } from '../components/AuthForms';
import { device } from '../rules/device';
import background from '../img/cozy-home_bg.jpg';

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  min-height: 780px;
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

const SignInLink = styled(Link)`
  text-decoration: none;
  color: #666;
  margin-top: 1rem;

  &:hover {
    color: #222;
  }
`;

function Signup() {
  document.title = defaultTitle + 'Sign up';

  return (
    <Container>
      <Card>
        <Title>
          Sign up for myPannor
        </Title>
        <Text>
          Get full control over your account, on the go, no matter if you're a prepaid, postpaid or only a landline customer.
        </Text>
        <Form>
          <Input type="text" placeholder="First Name"/>
          <Input type="text" placeholder="Last Name"/>
          <Input type="tel" placeholder="Pannor number / Customer number"/>
          <Input type="email" placeholder="E-mail"/>
          <Input type="password" placeholder="New password" />
          <Input type="password" placeholder="Confirm password" />
          <Button to="/">Continue</Button>
        </Form>
        <SignInLink to="/signin">Already have an account? Sign in.</SignInLink>
      </Card>
    </Container>
  );
}

export default Signup;
