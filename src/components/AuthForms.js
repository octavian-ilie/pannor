import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  width: 580px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 3px;
  margin-top: 0px;
`;

const Title = styled.div`
  font-family: 'Octavian Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  color: #fa7268;
  margin-bottom: 16px;
`;

const Text = styled.div`
  color: #222;
  margin-bottom: 2rem;
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
  border-radius: 3px;
  margin-bottom: 1rem;
  font-size: 1rem;
  outline: none;
  flex-grow: 1;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #222;
  }
`;

const Button = styled.button`
  background: #222;
  border: 0;
  border-radius: 3px;
  padding: 18px 16px 14px 16px;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease;
  cursor: pointer;
  font-family: 'Octavian Medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;

  &:hover {
    background-color: #fa7268;
  }
`;

const Logo = styled.img`
  width: 50%;
  margin-bottom: 1rem;
`;

const Error = styled.div`
  background-color: red;
`;

export { Form, Title, Text, PhoneNumber, Input, Prefix, Button, Logo, Card, Error };
