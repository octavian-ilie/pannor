import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: ${({ open }) => open ? 'auto' : 'auto'};
  width: 100%;
  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-500%)'};
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  z-index: -2;
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
      <Wrapper open={open}>
        <MenuBox>
          <MenuTitle>
            Subscriptions
          </MenuTitle>
          <Go to="/mobile/unlimited-x">Unlimited X</Go>
        </MenuBox>
        <MenuBox>
          <MenuTitle>
            Pay as you go
          </MenuTitle>
        </MenuBox>
        <MenuBox>
          <MenuTitle>
            Loyalty program
          </MenuTitle>
        </MenuBox>
        <MenuBox>
          <MenuTitle>
            Benefits
          </MenuTitle>
        </MenuBox>
      </Wrapper>
    </Container>
  )
}

export default HeaderMobileMenu;
