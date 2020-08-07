import React from 'react';
import styled from 'styled-components';
import PaidInvoice from './PaidInvoice';

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

function Payments(props) {

  return (
    <Box>
      <BoxTitle>
        Payments
      </BoxTitle>
      {(() => {
        switch (props.userTotalDue) {
          case 0: return <PaidInvoice/>;
          default: return `Total due: ${props.userTotalDue}`;
        }
      })()}
      <BoxBottomLink to="/my/invoices">View invoices</BoxBottomLink>
    </Box>
  )
}

export default Payments;
