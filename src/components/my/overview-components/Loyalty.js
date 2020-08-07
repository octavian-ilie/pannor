import React from 'react';
import styled from 'styled-components';

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

const PointsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1rem 0 2rem 0;
`;

const ValueBox = styled.div`
  diplay: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const TotalBox = styled.div`
  flex-grow: 1;
  diplay: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  text-align: center;
`;

const SecondaryValue = styled.div`
  font-family: var(--pannor-medium);
  color: var(--main);
  font-size: 1.4rem;
`;

const TotalValue = styled.div`
  font-family: var(--pannor-regular);
  color: var(--pannor);
  font-size: 2rem;
`;

const Description = styled.div`
  color: var(--secondary);
  font-size: 0.8rem;
`;

// Mock data for now, to be fetched later
const availablePoints = 482;
const pointValue = 0.10;
const totalPointsValue = availablePoints * pointValue;

function Loyalty() {
  return (
    <Box>
      <BoxTitle>
        Loyalty
      </BoxTitle>
      <PointsContainer>
        <ValueBox>
          <SecondaryValue>
            {availablePoints}
          </SecondaryValue>
          <Description>
            available points
          </Description>
        </ValueBox>
        <ValueBox>
          <SecondaryValue>
            {pointValue} €
          </SecondaryValue>
          <Description>
            point value
          </Description>
        </ValueBox>
        <TotalBox>
          <TotalValue>
            {totalPointsValue} €
          </TotalValue>
          <Description>
            total amount you can spend
          </Description>
        </TotalBox>
      </PointsContainer>
      <BoxBottomLink to="/my/loyalty">
        Points history
      </BoxBottomLink>
    </Box>
  )
}

export default Loyalty;
