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

const Minutes = styled(Container)`
  width: 66%;
  margin-top: 1rem;
`;

const Internet = styled(Container)`
  width: 32%;
  margin-top: 1rem;
`;

function Resources(props) {
  return (
    <Wrapper>
      <SectionTitle>
        Resources and consumption
      </SectionTitle>
      <SectionDescription>
        Find out what your monthly allowance is and how much you can still use till the end of your current billing cycle.
      </SectionDescription>
      <ResourcesContent>
        <Minutes>
          <BoxTitle>
            Minutes
          </BoxTitle>
        </Minutes>
        <Internet>
          <BoxTitle>
            Internet
          </BoxTitle>
        </Internet>
      </ResourcesContent>
    </Wrapper>
  )
}

export default Resources;
