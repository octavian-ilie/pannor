import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Form, Title, Text, PhoneNumber, Input, Button } from '../components/AuthForms';
import './Login.css';

const SignUpLink = styled(Link)`
  text-decoration: none;
  color: #666;
  margin-top: 1rem;

  &:hover {
    color: #222;
  }
`;

function Login() {
  return (
    <div className="login-container">
      <Card>
        <Title>
          Sign in to your account
        </Title>
        <Text>
          Fill in your username or your Pannor phone number and your password to continue.
        </Text>
        <Form>
          <PhoneNumber>
            <Input type="text" placeholder="username"/>
          </PhoneNumber>
          <Input type="password" placeholder="password" />
          <Button>Continue</Button>
        </Form>
        <SignUpLink to="/signup">Don't have an account yet? Let's create one.</SignUpLink>
      </Card>
    </div>
  );
}

export default Login;
