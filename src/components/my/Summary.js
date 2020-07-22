import React from 'react';
import styled from 'styled-components';

import Payments from './overview-components/Payments';
import Resources from './overview-components/Resources';
import Loyalty from './overview-components/Loyalty';

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
    </Container>
  )
}

export default Summary;
