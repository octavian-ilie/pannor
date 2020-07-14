import React from 'react';
import styled from 'styled-components';
import { Container, GrayCard, CardInfoContainer, Title, Text, Go } from './HomepageCards';
import { device } from '../rules/device';
import img from '../img/homepack-4g_box.png';

const Image = styled.div`
  height: 100%;
  width: 50%;
  background: url(${img}) no-repeat center center/cover;
  background-size: 80%;

  @media ${device.tablet} { 
    height: 300px;
    width: 100%;
    order: -1;
    background-position: center;
  }
`;

function HCHomepack4G() {
  return (
    <Container>
      <GrayCard>
        <CardInfoContainer>
          <Title>
            Homepack 4G
          </Title>
          <Text>
            No fiber-optic coverage at your location yet? Visit your local Pannor Shop or order your Homepack 4G and try it out for a month. On us. Not satisfied? Cancel anytime.
          </Text>
          <Go to="/mobile/homepack-4g">Try free of charge for an entire month</Go>
        </CardInfoContainer>
        <Image/>
      </GrayCard>
    </Container>
  )
}

export default HCHomepack4G;
