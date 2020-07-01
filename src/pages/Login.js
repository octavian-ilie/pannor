import React from "react";
import { Link } from 'react-router-dom';
import { Card, Form, PhoneNumber, Prefix, Input, Button } from '../components/AuthForms';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <Card>
        <Form>
          <PhoneNumber>
            <Prefix type="text" value="0788" readOnly/>
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
