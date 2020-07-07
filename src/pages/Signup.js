import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Title, Text, Form, Input, Button } from '../components/AuthForms';
import './Signup.css';

const SignInLink = styled(Link)`
  text-decoration: none;
  color: #666;
  margin-top: 1rem;

  &:hover {
    color: #222;
  }
`;

function Signup() {
  return (
    <div class="signup-container">
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
          <Input type="tel" placeholder="Pannor number"/>
          <Input type="email" placeholder="E-mail"/>
          <Input type="password" placeholder="New password" />
          <Input type="password" placeholder="Confirm password" />
          <Button>Continue</Button>
        </Form>
        <SignInLink to="/my">Already have an account? Sign in.</SignInLink>
      </Card>
    </div>
  );
}

export default Signup;
