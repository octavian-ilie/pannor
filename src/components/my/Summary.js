import React from 'react';
import styled from 'styled-components';

import Payments from './overview-components/Payments';
import Resources from './overview-components/Resources';
import Loyalty from './overview-components/Loyalty';
import Plan from './overview-components/Plan';
import Phone from './overview-components/Phone';

import { device } from '../../rules/device';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

// Mock data, to be fetched later
const availableNatMins = 2000;
const remainingNatMins = 1092;

const availableIntlMins = 150;
const remainingIntMins = 27;

const availableInternet = 5;
const remainingInternet = 3.9;

function Summary(props) {
  return (
    <Container>
      <Payments userTotalDue={props.userTotalDue}/>
      <Resources
        availableNatMins={availableNatMins}
        remainingNatMins={remainingNatMins}
        availableIntlMins={availableIntlMins}
        remainingIntMins={remainingIntMins}
        availableInternet={availableInternet}
        remainingInternet={remainingInternet}
      />
      <Loyalty/>
      <Plan/>
      <Phone/>
    </Container>
  )
}

export default Summary;
