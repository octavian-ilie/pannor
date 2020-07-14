import React from 'react';
import styled from 'styled-components';
import { PromoCard, Title, Text, PromoLink } from './HomepagePromoCards';
import img from '../img/Pannor_Shop-small.jpg';
import { device } from '../rules/device';

const Image = styled.div`
  height: 230px;
  width: 100%;
  background: url(${img}) no-repeat center center/cover;
  background-size: 130%;
  margin-bottom: 2rem;

  @media ${device.tablet} { 
    background-size: 100%;
    background-position: top;
  }
`;

function PCShop() {
  return (
    <PromoCard>
      <Image/>
      <Title>
        Come visit our new Pannor Shops
      </Title>
      <Text>
        We are happy to welcome you in one of our brand new Pannor Shops across the country, or reach out to one of our Partner Centers.
      </Text>
      <PromoLink to="/support/shops">Find your local Shop</PromoLink>
    </PromoCard>
  )
}

export default PCShop;
