import React from 'react';
import styled from 'styled-components';
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
  margin-top: -1rem;
`;

function Plan() {
  return (
    <Box>
      <BoxTitle>
        Plan
      </BoxTitle>
      <Wrapper>
        Plan info here.
      </Wrapper>
      <BoxBottomLink to="/my/plan">Manage</BoxBottomLink>
    </Box>
  )
}

export default Plan;
