import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import phone from '../../../img/smartphones/apple_iphone-11-pro-max_green.png';

import { device } from '../../../rules/device';

import {
  Container,
  BoxTitle,
  BoxBottomLink,
} from './BoxStyling';

const Box = styled(Container)`
  width: 32%;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 0 2rem 1rem 2rem;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  flex-grow: 1;
`;

const PhoneContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhoneName = styled.div`
  font-family: 'Octavian Medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #222;
  font-size: 1.4rem;
`;

const PhoneBrand = styled.div`
  color: #888;
  font-size: 0.8rem;
`;

const PhoneImage = styled.img`
  height: 60px;
  width: auto;
`;

const UsefulLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const UsefulLink = styled(Link)`
  text-decoration: none;
  color: #222;
  margin-top: 0.5rem;
  transition: all 0.2s;
  transition-property: all;
  transition-property: transform;

  &:hover {
    color: #fa7268;
    transition: all 0.2s ease;
  }

  &::after {
    font-family: 'navIcons' !important;
    font-weight: 600;
    position: absolute;
    content: ' \\e903';
    margin-left: 0.5rem;
    margin-top: 0.2rem;
    transition: all 0.2s;
  }

  &:hover::after {
    transform: translateX(5px);
  }
`;

// Mock data, to be fetched later
const userPhoneName = 'iPhone 11 Pro';
const userPhoneBrand = 'Apple';
const userCompletePhoneName = `${userPhoneBrand} ${userPhoneName}`;

function Phone() {
  return (
    <Box>
      <BoxTitle>
        Phone
      </BoxTitle>
      <Wrapper>
        <PhoneContainer>
          <InfoBox>
            <PhoneName>
              {userPhoneName}
            </PhoneName>
            <PhoneBrand>
              {userPhoneBrand}
            </PhoneBrand>
          </InfoBox>
          <PhoneImage src={phone} alt={userCompletePhoneName}/>
        </PhoneContainer>
        <UsefulLinksContainer>
          <UsefulLink to="/my/settings/device/internet">Internet settings</UsefulLink>
          <UsefulLink to="/my/settings/device/mms">MMS settings</UsefulLink>
          <UsefulLink to="/support/manuals/apple/iphone-11-pro">Read user manual</UsefulLink>
        </UsefulLinksContainer>
      </Wrapper>
      <BoxBottomLink to="/support">Support Center</BoxBottomLink>
    </Box>
  )
}

export default Phone;
