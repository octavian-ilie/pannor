import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TotalDue from './TotalDue';

import {
  Wrapper,
  SectionTitle,
  SectionDescription,
} from './Styling';

import {
  Container,
  BoxTitle,
} from './overview-components/BoxStyling';

const InvoicesContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const Box = styled(Container)`
  width: 100%;
  margin-top: 1rem;
`;

function Invoices(props) {
  const [data, setData] = useState({
    loading: false,
    invoices: null,
  });

  useEffect(() => {
    setData({ loading: true });
    const apiUrl = `https://api.octavian.nl/pannor/invoices/${props.customerId}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((invoices) => {
        setData({ loading: false, invoices: invoices });
      })
  }, [setData, props.customerId]);

  let totalToBePaid = 0;
  let invoices = [];
  
  if (data.invoices) {
    data.invoices.forEach((invoice) => {
      let isInvoicePaid = false;
 
      if(parseInt(invoice.paid) === 1) {
        isInvoicePaid = true;
      }

      if (!isInvoicePaid) {
        totalToBePaid += parseInt(invoice.total);
      }
      invoices.push({
        invoiceNo: invoice.number,
        dateIssued: invoice.date,
        dateDue: invoice.due,
        total: invoice.total,
        isPaid: parseInt(invoice.paid) ? true : false,
      })
    })
  }

  return (
    <Wrapper>
      <SectionTitle>
        Invoices
      </SectionTitle>
      <SectionDescription>
        You can view, pay, download and compare your invoice history.
      </SectionDescription>
      <TotalDue totalDue={totalToBePaid}/>
      <InvoicesContent>
        <Box>
          <BoxTitle>
            Previous 6 months
          </BoxTitle>
        </Box>
      </InvoicesContent>
    </Wrapper>
  );
}

export default Invoices;
