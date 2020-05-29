import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PhoneNumber = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Prefix = styled.input`
  padding: 1rem;
  padding-right: 0;
  border: 1px solid #999;
  border-right: 0;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  outline: none;
  width: 48px;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  outline: none;
  flex-grow: 1;
`;

const Button = styled.button`
  background: #01aba8;
  border: 0;
  border-radius: 3px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
  outline: none;
`;

const Logo = styled.img`
  width: 50%;
  margin-bottom: 1rem;
`;

const Error = styled.div`
  background-color: red;
`;

export { Form, PhoneNumber, Input, Prefix, Button, Logo, Card, Error };
