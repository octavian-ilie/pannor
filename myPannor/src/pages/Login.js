import React from "react";
import { Link } from 'react-router-dom';
import logoImg from '../img/pannor-logo.png';
import { Card, Logo, Form, Input, Button } from '../components/AuthForms';

function Login() {
  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input type="number" value="07"/>
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
      </Form>
      <Link to="/signup">New to Pannor? Create an account.</Link>
    </Card>
  );
}

export default Login;
