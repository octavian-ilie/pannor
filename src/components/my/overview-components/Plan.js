import React from 'react';
import styled from 'styled-components';
import ContractInfo from './ContractInfo';
import {
  Container,
  BoxTitle,
  BoxBottomLink,
} from './BoxStyling';

const Box = styled(Container)`
  width: 32%;
`;

const Wrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
`;

const PlanTitle = styled.div`
  font-family: 'Octavian Medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #222;
  font-size: 1.4rem;
`;

const PlanCost = styled.div`
  font-size: 0.8rem;
  color: #888;
`;

// Mock data, to be fetched later
const planName = 'Pannor Smart 8';
const costEuro = 8;
const startDate = 'July 1, 2020';
const endDate = 'June 30, 2022';

function Plan() {
  return (
    <Box>
      <BoxTitle>
        Plan
      </BoxTitle>
      <Wrapper>
        <PlanTitle>
          {planName}
        </PlanTitle>
        <PlanCost>
          {costEuro} EUR/month
        </PlanCost>
        <ContractInfo startDate={startDate} endDate={endDate}/>
      </Wrapper>
      <BoxBottomLink to="/my/plan">Manage</BoxBottomLink>
    </Box>
  )
}

export default Plan;
