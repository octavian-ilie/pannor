import React from "react";
import { Link } from 'react-router-dom';
import logoImg from '../img/pannor-logo.png';
import { Card, Logo, Form, Input, Button } from '../components/AuthForms';

function Signup() {
  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input type="number" value="07" />
        <Input type="password" placeholder="New password" />
        <Input type="password" placeholder="Confirm password" />
        <Button>Continue</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Signup;
