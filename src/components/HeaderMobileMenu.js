import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: auto;
  width: 100%;
  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  background-color: #fff;
  transition: all 0.3s ease;
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  border-top: 1px solid #dbdbdb;
`;

const Wrapper = styled.div`
  height: auto;
  width: 1170px;
  align-self: center;
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const MenuBox = styled.div`
  width: 22%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const MenuTitle = styled.div`
  font-family: var(--pannor-regular);
  color: var(--main);
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const Go = styled(Link)`
  color: var(--main);
  width: 100%;
  display: inline-flex;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    color: var(--pannor);
  }
`;

function HeaderMobileMenu({ open }) {
  return (
    <Container open={open}>
      <Wrapper>
        <MenuBox>
          <MenuTitle>
            Subscriptions
          </MenuTitle>
          <Go to="/mobile/plans/unlimited-x">Unlimited X</Go>
          <Go to="/mobile/plans/smart">Pannor Smart</Go>
          <Go to="/mobile/plans/start">Pannor Start</Go>
          <Go to="/mobile/plans/bundles">Extra bundles</Go>
          <Go to="/pay">Pay your invoice</Go>
        </MenuBox>
        <MenuBox>
          <MenuTitle>
            Pay as you go
          </MenuTitle>
          <Go to="/mobile/prepaid/offers">Offers</Go>
          <Go to="/mobile/prepaid/bundles">Prepaid bundles</Go>
          <Go to="/mobile/prepaid/bonus">Bonus</Go>
          <Go to="/mobile/prepaid/sim">SIM card</Go>
          <Go to="/topup">Add balance</Go>
        </MenuBox>
        <MenuBox>
          <MenuTitle>
            Services
          </MenuTitle>
          <Go to="/mobile/services/roaming">Roaming</Go>
          <Go to="/mobile/services/insurance">Smartphone insurance</Go>
          <Go to="/mobile/services/volte-vowifi">VoLTE and VoWiFi</Go>
          <Go to="/mobile/services/number-share">Number share</Go>
          <Go to="/mobile/services/esim">eSIM</Go>
        </MenuBox>
        <MenuBox>
          <MenuTitle>
            For you
          </MenuTitle>
          <Go to="/mobile/benefits/why-us">Why choosing us</Go>
          <Go to="/mobile/benefits/loyalty">Loyalty program</Go>
          <Go to="/mobile/benefits/apps">Pannor Apps</Go>
          <Go to="/mobile/benefits/community">Community</Go>
          <Go to="/mobile/benefits/community">Coverage map</Go>
        </MenuBox>
      </Wrapper>
    </Container>
  )
}

export default HeaderMobileMenu;
