import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, WhiteCard, CardInfoContainer, Title, Text, AppsContainer } from './HomepageCards';
import img from '../img/boy-girl_mobile.jpg';
import AppStore from '../components/AppStore';
import GooglePlay from '../components/GooglePlay';

const Image = styled.div`
  height: 100%;
  width: 50%;
  background: url(${img}) no-repeat center center/cover;
`;

function HCiPhone11() {
  return (
    <Container>
      <WhiteCard>
        <Image/>
        <CardInfoContainer>
          <Title>
            myPannor App
          </Title>
          <Text>
            Stay in control over your mobile or landline account on the go with our new iOS and Android application.
          </Text>
          <AppsContainer>
            <Link to="/my/ios-download">
              <AppStore/>
            </Link>
            <Link to="/my/play-download">
              <GooglePlay/>
            </Link>
          </AppsContainer>
        </CardInfoContainer>
      </WhiteCard>
    </Container>
  )
}

export default HCiPhone11;
