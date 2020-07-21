import React from 'react';
import styled from 'styled-components';
import { 
  BoxTitle,
  BoxBottomLink,
} from './BoxStyling';

const Container = styled.div`
  width: 68%;
  height: auto;
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 2px rgba(0,0,0,0.015),
              0 2px 4px rgba(0,0,0,0.015),
              0 4px 8px rgba(0,0,0,0.015),
              0 8px 16px rgba(0,0,0,0.015),
              0 16px 32px rgba(0,0,0,0.015),
              0 32px 64px rgba(0,0,0,0.015);
`;

function Resources() {
  return (
    <Container>
      <BoxTitle>
        Resources and consumption
      </BoxTitle>
      <BoxBottomLink to="/my/resources">
        Details
      </BoxBottomLink>
    </Container>
  )
}

export default Resources;
