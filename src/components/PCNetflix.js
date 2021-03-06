import React from 'react';
import styled from 'styled-components';
import { PromoCard, Title, Text, PromoLink } from './HomepagePromoCards';
import img from '../img/netflix_homepage-promo.jpg';
import { device } from '../rules/device';

const Image = styled.div`
  height: 230px;
  width: 100%;
  background: url(${img}) no-repeat bottom center/cover;
  background-size: 120%;
  margin-bottom: 2rem;

  @media ${device.tablet} { 
    background-size: 100%;
  }
`;

function PCNetflix() {
  return (
    <PromoCard>
      <Image/>
      <Title>
        Binge watch your favorite show
      </Title>
      <Text>
        Unlimited Netflix streaming right on your smartphone, to finally finish that show you've been planning on.
      </Text>
      <PromoLink to="/netflix">Read more about this</PromoLink>
    </PromoCard>
  )
}

export default PCNetflix;
