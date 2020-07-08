import React from 'react';
import styled from 'styled-components';
import { Container, WhiteCard, CardInfoContainer, Title, Text, Go } from './HomepageCards';
import img from '../img/iphone-11.png';

const Image = styled.div`
  height: 100%;
  width: 50%;
  background: url(${img}) no-repeat top center/cover;
`;

function HCiPhone11() {
  return (
    <Container>
      <WhiteCard>
        <Image/>
        <CardInfoContainer>
          <Title>
            iPhone 11, 11 Pro and 11 Pro Max
          </Title>
          <Text>
            Just the right amount of everything. Pro cameras, pro display, pro performance. All wrapped up by the most dramatic leap in battery life ever.
          </Text>
          <Go to="/shop/smartphones/apple/iphone-11">Compare all iPhone 11 models</Go>
        </CardInfoContainer>
      </WhiteCard>
    </Container>
  )
}

export default HCiPhone11;
