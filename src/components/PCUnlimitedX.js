import React from 'react';
import styled from 'styled-components';
import { PromoCard, Title, Text, PromoLink } from './HomepagePromoCard';
import img from '../img/unlimited-x_promo-card.png';

const Image = styled.div`
  height: 230px;
  width: 100%;
  background: url(${img}) no-repeat top center/cover;
  margin-bottom: 2rem;
`;

function PCUnlimitedX() {
  return (
    <PromoCard>
      <Image/>
      <Title>
        Call, text and surf worry free with Unlimited X
      </Title>
      <Text>
        We know how important it is to keep in touch with your loved ones or business partners. We've created Unlimited X just for that.
      </Text>
      <PromoLink to="/shop/plans">Activate or switch plan</PromoLink>
    </PromoCard>
  )
}

export default PCUnlimitedX;
