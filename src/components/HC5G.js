import React from 'react';
import styled from 'styled-components';
import { Container, Card, CardInfoContainer, Title, Text, Go } from './HomepageCards';
import img from '../img/man_holding-laptop.jpg';

const Image = styled.div`
  height: 100%;
  width: 50%;
  background: url(${img}) no-repeat top center/cover;
`;

function HC5G() {
  return (
    <Container>
      <Card>
        <CardInfoContainer>
          <Title>
            The best 5G network
          </Title>
          <Text>
            Joint the best 5G network in the Netherlands, and surf the Internet at high speeds of up to 1 Gbps. Our network is award winning "best in test" of 2020.
          </Text>
          <Go to="/support/coverage/5g">Find out where you can enjoy high 5G speeds</Go>
        </CardInfoContainer>
        <Image/>
      </Card>
    </Container>
  )
}

export default HC5G;
