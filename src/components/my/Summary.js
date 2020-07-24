import React from 'react';
import styled from 'styled-components';

import Payments from './overview-components/Payments';
import Resources from './overview-components/Resources';
import Loyalty from './overview-components/Loyalty';
import Plan from './overview-components/Plan';
import Phone from './overview-components/Phone';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Summary() {
  return (
    <Container>
      <Payments/>
      <Resources/>
      <Loyalty/>
      <Plan/>
      <Phone/>
    </Container>
  )
}

export default Summary;
