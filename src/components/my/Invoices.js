import React from 'react';
import styled from 'styled-components';
import {
  Wrapper,
  SectionTitle,
  SectionDescription,
} from './Styling';
import {
  Container,
  BoxTitle,
} from './overview-components/BoxStyling';

const ResourcesContent = styled.div`
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
  return (
    <Wrapper>
      <SectionTitle>
        Invoices
      </SectionTitle>
      <SectionDescription>
        You can view, download and compare your invoice history.
      </SectionDescription>
      <ResourcesContent>
        <Box>
          <BoxTitle>
            Previous 6 months
          </BoxTitle>
        </Box>
      </ResourcesContent>
    </Wrapper>
  )
}

export default Invoices;
