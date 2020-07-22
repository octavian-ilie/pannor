import React from 'react';
import styled from 'styled-components';
import {
  Container,
  BoxTitle,
  BoxBottomLink,
} from './BoxStyling';

const Box = styled(Container)`
  width: 66%;
`;

function Resources() {
  return (
    <Box>
      <BoxTitle>
        Resources and consumption
      </BoxTitle>
      <BoxBottomLink to="/my/resources">
        Details
      </BoxBottomLink>
    </Box>
  )
}

export default Resources;
