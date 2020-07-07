import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../img/Pannor_Shop-small.jpg';

const PromoCard = styled.div`
  min-height: 300px;
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  height: 230px;
  width: 100%;
  background: url(${img}) no-repeat top center/cover;
  background-size: 110%;
  margin-bottom: 2rem;
`;

const Title = styled.div`
  font-family: 'Octavian Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  color: #fa7268;
  margin-bottom: 0.6rem;
`;

const Text = styled.div`
  color: #222;
  margin-bottom: 2rem;
`;

const PromoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  background-color: #fa7268;
  border-radius: 3px;
  font-family: 'Octavian Medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 12px 16px 8px 16px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    background-color: #222;
  }

  &::after {
    content: '>';
    position: absolute;
    top: 11px;
    right: 16px;
    color: #fff;
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
