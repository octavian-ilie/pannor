import React from "react";
import { Link } from 'react-router-dom';
import logoImg from '../img/pannor-logo.png';
import { Card, Logo, Form, PhoneNumber, Prefix, Input, Button } from '../components/AuthForms';
import './Login.css';

function Login() {
  return (
    <div class="login-container">
      <Card>
        <Logo src={logoImg} />
        <Form>
          <PhoneNumber>
            <Prefix type="text" value="0788"/>
            <Input type="number" placeholder="123456"/>
          </PhoneNumber>
          <Input type="password" placeholder="Password" />
          <Button>Login</Button>
        </Form>
        <Link to="/signup">New to Pannor? Create an account.</Link>
      </Card>
    </div>
  );
}

export default Login;
