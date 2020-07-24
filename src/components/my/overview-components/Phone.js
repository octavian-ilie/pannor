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

function Phone() {
  return (
    <Box>
      <BoxTitle>
        Phone
      </BoxTitle>
      <Wrapper>
        Phone info here.
      </Wrapper>
      <BoxBottomLink to="/support">Get help</BoxBottomLink>
    </Box>
  )
}

export default Phone;
