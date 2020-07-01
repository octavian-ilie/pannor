import React from "react";
import { Link } from 'react-router-dom';
import logoImg from '../img/pannor-logo.png';
import { Card, Logo, Form, Input, PhoneNumber, Prefix, Button } from '../components/AuthForms';

function Signup() {
  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <PhoneNumber>
          <Prefix type="text" value="0788" readOnly/>
          <Input type="number" placeholder="123456"/>
        </PhoneNumber>
        <Input type="password" placeholder="New password" />
        <Input type="password" placeholder="Confirm password" />
        <Button>Continue</Button>
      </Form>
      <Link to="/">Already have an account?</Link>
    </Card>
  );
}

export default Signup;
