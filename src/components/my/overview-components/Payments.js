import React from 'react';
import styled from 'styled-components';
import PaidInvoice from './PaidInvoice';
import {
  Container,
  BoxTitle,
  BoxBottomLink,
} from './BoxStyling';

const Box = styled(Container)`
  width: 32%;
`;

function Payments() {
  return (
    <Box>
      <BoxTitle>
        Payments
      </BoxTitle>
      <PaidInvoice/>
      <BoxBottomLink to="/my/invoices">View invoices</BoxBottomLink>
    </Box>
  )
}

export default Payments;
