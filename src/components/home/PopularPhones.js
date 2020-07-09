import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import samsung_galaxy_s20 from '../../img/samsung_galaxy_s20.png';
import iphone_11_pro from '../../img/iphone_11pro_gold_airpods.png';
import huawei_p30_pro from '../../img/huawei-p30_aurora--watch.png';

const Container = styled.div`
  width: 1170px;
  height: auto;
  margin-top: 4rem;
`;

const GrayCard = styled.div`
  background-color: #f5f5f5;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.div`
  color: #222;
  font-family: 'Octavian Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2.4rem;
  padding: 2rem;
`;

const PhonesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  padding: 1rem 0;
`;

const PhoneBox = styled.div`
  width: 188px;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Image = styled.img`
  width: inherit;
  height: 246px;
  margin-bottom: 1rem;
`;

const PhoneName = styled.div`
  color: #222;
  font-size: 1.4rem;
  text-align: center;
  padding-bottom: 1rem;
`;

const Go = styled(Link)`
  text-decoration: none;
  color: #222;
`;

const Button = styled(Link)`
  width: 100%;
  text-align: center;
  color: #fff;
  text-decoration: none;
  background-color: #fa7268;
  border-radius: 3px;
  font-family: 'Octavian Medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 12px 16px 8px 16px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #222;
  }
`;

const SeeAll = styled(Link)`
  margin: 2rem;
  color: #222;
  text-decoration: underline;

  &:hover {
    color: #fa7268;
  }
`;

function PopularPhones() {
  return (
    <Container>
      <GrayCard>
        <CardTitle>
          Popular phones
        </CardTitle>
        <PhonesContainer>
          <PhoneBox>
            <Go to="/shop/smartphones/samsung/s20-5g">
              <PhoneName>
                Galaxy S20 5G
              </PhoneName>
              <Image src={samsung_galaxy_s20} alt="Samsung Galaxy S20"/>
            </Go>
            <Button to="/shop/smartphones/samsung/s20-5g">Buy with Unlimited X</Button>
          </PhoneBox>
          <PhoneBox>
            <Go to="/shop/smartphones/samsung/s20-5g">
              <PhoneName>
                iPhone 11 Pro
              </PhoneName>
              <Image src={iphone_11_pro} alt="iPhone 11 Pro"/>
            </Go>
            <Button to="/shop/smartphones/apple/iphone-11">Buy with Unlimited X</Button>
          </PhoneBox>
          <PhoneBox>
            <Go to="/shop/smartphones/apple/iphone-11">
              <PhoneName>
                P30 Pro
              </PhoneName>
              <Image src={huawei_p30_pro} alt="P30 Pro"/>
            </Go>
            <Button to="/shop/smartphones/huawei/p30-pro">Buy with Unlimited X</Button>
          </PhoneBox>
        </PhonesContainer>
        <SeeAll to="/shop/smartphones">
          See al smartphones
        </SeeAll>
      </GrayCard>
    </Container>
  )
}

export default PopularPhones;
