import React from 'react';
import { Link } from 'react-router-dom';
import { device } from '../rules/device';
import styled from 'styled-components';
import Icon from './Icon';
import Facebook from './icons/social/Facebook';
import Instagram from './icons/social/Instagram';
import Twitter from './icons/social/Twitter';
import YouTube from './icons/social/YouTube';

const Background = styled.div`
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1170px;
  height: auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;

  @media ${device.bp1} {
    width: 100%;
    padding: 2rem 1rem;
  }

  @media ${device.tablet} {
    padding: 2rem 0;
  }
`;

const LogoRow = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  @media ${device.tablet} {
    text-align: center;
  }
`;

const NavRow = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const Svg = styled(Icon)` 
  width: 70px; 
  height: 70px;
`;

const PannorSymbol = ({ className }) => ( 
  <Svg viewBox="0 0 100 100" className={className}>   
    <g>
      <path d="M90.6,54.785a17.551,17.551,0,0,1-6.244,6.472A30.229,30.229,0,0,0,85.8,56.094a30.731,30.731,0,0,0-1.338-17.967c-2.525-6.856-8.271-11.606-14.919-14.254-9.57-3.813-20-3.377-30-1.734-1.625.267-3.277.583-4.929.964C33.774,16.7,39.47,13.3,39.47,13.3c7.4-4.285,19.379-.39,19.379-.39,8.944,2.536,18.155,7.5,24.384,14.523C89.565,34.568,95.87,45.337,90.6,54.785Z" fill="#fa7268" opacity="0.35"/>
      <path d="M85.8,56.094a30.229,30.229,0,0,1-1.446,5.163c-.147.091-.3.182-.446.267A27.906,27.906,0,0,0,85.8,56.094Z" fill="#fa7268"/>
      <path d="M84.355,61.257A41.844,41.844,0,0,1,75.7,74.75,48.372,48.372,0,0,1,67.339,81.9a38.133,38.133,0,0,1-15.794,6.482c-5.7.822-12.491.339-16.8-3.937a11.371,11.371,0,0,1-3.3-6.782,17.183,17.183,0,0,1,.984-7.8,20.9,20.9,0,0,0,.758-2.736c1.7.519,3.371,1.1,5.023,1.781,0,0,14.318,5.939,26,5.55a22.059,22.059,0,0,0,17.189-8.766,20.6,20.6,0,0,0,2.513-4.167h0C84.059,61.439,84.208,61.348,84.355,61.257Z" fill="#fa7268" opacity="0.35"/>
      <path d="M85.8,56.094a30.229,30.229,0,0,1-1.446,5.163c-.147.091-.3.182-.446.267A27.906,27.906,0,0,0,85.8,56.094Z" fill="#fa7268"/>
      <path d="M85.8,56.094a28.441,28.441,0,0,0,.481-5.2s-.261-11.006-9.026-16.266c-10.11-6.065-22.908-5.837-33.589-1.473a29.576,29.576,0,0,0-6.045,3.26C35.95,29.288,34.893,24.5,34.893,24.5a11.233,11.233,0,0,1-.279-1.394c1.652-.381,3.3-.7,4.929-.964,10.005-1.643,20.431-2.079,30,1.734,6.648,2.648,12.394,7.4,14.919,14.254A30.731,30.731,0,0,1,85.8,56.094Z" fill="#fa7268" opacity="0.75"/>
      <path d="M86.282,50.89a28.441,28.441,0,0,1-.481,5.2,27.906,27.906,0,0,1-1.892,5.43h0c-9.832,5.693-23.793,2.609-23.793,2.609-5.936-.747-12.368-5.939-12.368-5.939A27,27,0,0,1,39.47,44.169c-.674-2.783-1.294-5.4-1.848-7.758a29.576,29.576,0,0,1,6.045-3.26c10.681-4.364,23.479-4.592,33.589,1.473C86.021,39.884,86.282,50.89,86.282,50.89Z" fill="#fa7268"/>
      <path d="M83.907,61.524a20.6,20.6,0,0,1-2.513,4.167,22.059,22.059,0,0,1-17.189,8.766c-11.685.389-26-5.55-26-5.55-1.652-.685-3.324-1.262-5.023-1.781a16.718,16.718,0,0,0,.349-3.116c.035-2.433-1.087-4.375-1.79-6.639a27.019,27.019,0,0,1-1.069-5.061,16.639,16.639,0,0,1,3.055-12.233,18.908,18.908,0,0,1,3.9-3.666c.554,2.36,1.174,4.975,1.848,7.758a27,27,0,0,0,8.276,14.025s6.432,5.192,12.368,5.939C60.114,64.133,74.075,67.217,83.907,61.524Z" fill="#fa7268" opacity="0.75"/>
      <path d="M37.622,36.411a18.908,18.908,0,0,0-3.9,3.666A16.639,16.639,0,0,0,30.669,52.31a27.019,27.019,0,0,0,1.069,5.061c.7,2.264,1.825,4.206,1.79,6.639a16.718,16.718,0,0,1-.349,3.116c-2.445-.749-4.932-1.376-7.444-2.029-3.781-.987-7.814-2.229-11-4.566,0,0-14.8-9.641-2.241-25.321,5.383-6.721,13.785-10.2,22.123-12.107a11.233,11.233,0,0,0,.279,1.394S35.95,29.288,37.622,36.411Z" fill="#fa7268" opacity="0.35"/>
    </g>
  </Svg>
);

const NavColumn = styled.div`
  width: 22%;

  @media ${device.tablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const NavTitle = styled.div`
  color: #222;
  font-family: 'Octavian Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.4rem;
  padding-bottom: 1rem;
`;

const NavLink = styled(Link)`
  color: #555;
  width: 100%;
  display: inline-flex;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: var(--main);
  }

  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }
`;

const MediaRow = styled.div`
  width: 100%;
  margin-top: 2rem;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 0;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    border: none;
  }
`;

const LogoText = styled.div`
  font-family: var(--pannor-regular);
  font-size: 2rem;
  color: var(--main);
  letter-spacing: -1px;

  @media ${device.tablet} {
    margin-bottom: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: auto;
`;

const CopyRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 0;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const Copyright = styled.div`
  color: #555;
  font-size: 0.9rem;

  @media ${device.tablet} {
    align-self: center;
  }
`;

const Cookies = styled(Link)`
  color: #555;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    color: var(--main);
  }

  @media ${device.tablet} {
    order: -1;
    align-self: center;
    margin-bottom: 2rem;
  }
`;

const SocialLink = styled.a`
  color: #555;
  text-decoration: none;
  padding-left: 10px;
  margin-left: 10px;

  &:hover {
    color: var(--main);
  }

  @media ${device.tablet} {
    margin: 0 5px;
    padding: 0 5px;
  }
`;

const CopyLink = styled.a`
  color: #555;
  text-decoration: none;

  &:hover {
    color: var(--main);
  }
`;

function Footer() {
  return (
    <Background>
      <Container>
        <LogoRow>
          <PannorSymbol/>
        </LogoRow>
        <NavRow>
          <NavColumn>
            <NavTitle>
              About Pannor
            </NavTitle>
            <NavLink to="/about/our-company">Our company</NavLink>
            <NavLink to={{ pathname: "https://www.pannorgroup.com" }} target="_blank">Pannor Group</NavLink>
            <NavLink to="/press">Press</NavLink>
            <NavLink to="/about/jobs">Work with us</NavLink>
            <NavLink to="/about/sustainability">Sustainability</NavLink>
            <NavLink to="/wholesale">Wholesale</NavLink>
          </NavColumn>
          <NavColumn>
            <NavTitle>
              Online Shop
            </NavTitle>
            <NavLink to="/shop/smartphones/apple">Apple</NavLink>
            <NavLink to="/shop/smartphones/samsung">Samsung</NavLink>
            <NavLink to="/shop/smartphones/huawei">Huawei</NavLink>
            <NavLink to="/shop/smartphones/lg">LG</NavLink>
            <NavLink to="/shop/smartphones/alcatel">Alcatel</NavLink>
            <NavLink to="/shop/smartphones/htc">HTC</NavLink>
          </NavColumn>
          <NavColumn>
            <NavTitle>
              Support
            </NavTitle>
            <NavLink to="/support/community">Pannor Community</NavLink>
            <NavLink to="/support/settings">Smartphone settings</NavLink>
            <NavLink to="/support/plans-and-services">Plans and services</NavLink>
            <NavLink to="/support/pay-as-you-go">Pay as you go</NavLink>
            <NavLink to="/support/roaming">Roaming</NavLink>
            <NavLink to="/support/disabled">Plans for disabled</NavLink>
          </NavColumn>
          <NavColumn>
            <NavTitle>
              Legal Information
            </NavTitle>
            <NavLink to="/legal/contract">Your contract</NavLink>
            <NavLink to="/legal/canceling">Canceling before term</NavLink>
            <NavLink to="/legal/calling-112">112 Emergency call</NavLink>
            <NavLink to="/legal/internet-quality">Internet quality</NavLink>
            <NavLink to="/legal/phising">Phising</NavLink>
            <NavLink to="/legal/interconnectivity">Interconnectivity</NavLink>
          </NavColumn>
        </NavRow>
        <MediaRow>
          <LogoText>
            pannor
          </LogoText>
          <SocialLinks>
            <SocialLink href="https://www.facebook.com/pannor.nl" target="_blank">
              <Facebook height="24px" width="24px"/>
            </SocialLink>
            <SocialLink href="https://www.instagram.com/pannor.nl" target="_blank">
              <Instagram height="24px" width="24px"/>
            </SocialLink>
            <SocialLink href="https://www.twitter.com/pannor.nl" target="_blank">
              <Twitter height="24px" width="24px"/>
            </SocialLink>
            <SocialLink href="https://www.youtube.com/pannor.nl" target="_blank">
              <YouTube height="24px" width="24px"/>
            </SocialLink>
          </SocialLinks>
        </MediaRow>
        <CopyRow>
          <Copyright>
            2020 © Project property of <CopyLink href="https://www.octavian.nl" target="_blank">Octavian</CopyLink>.
          </Copyright>
          <Cookies to="/legal/cookies">Cookie settings</Cookies>
        </CopyRow>
      </Container>
    </Background>
  )
}

export default Footer;
