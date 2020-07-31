import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ResourcesCircular from './ResourcesCircular';

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

const CircularContent = styled.div`
  padding: 0 2rem 3rem 2rem;
  display: flex;
  flex-direction: row;
  max-height: 240px;
  justify-items: space-evenly;
`;

const BCycle = styled.div`
  font-family: var(--pannor-medium);
  color: var(--main);
  font-size: 1.6rem;
  padding: 2rem 0 1rem 0;
`;

const BCycleContent = styled.div`
  color: var(--main);
`;

function Resources(props) {
  const [appState, setAppState] = useState({
    loading: false,
    resources: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.octavian.nl/pannor/resources/${props.customerId}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((resources) => {
        setAppState({ loading: false, resources: resources });
      })
  }, [setAppState, props.customerId]);

  let minuteAllowances = [];
  let internetAllowances = [];

  if(appState.resources) {
    appState.resources.forEach((resource) => {
      if(resource.type === 'minutes') {
        minuteAllowances.push(<ResourcesCircular key={resource.id} resourceType={resource.type} amount_remaining={resource.amount_remaining} amount_available={resource.amount_available} description={resource.description} />);
      } else if (resource.type === 'internet') {
        internetAllowances.push(<ResourcesCircular key={resource.id} resourceType={resource.type} amount_remaining={resource.amount_remaining} amount_available={resource.amount_available} description={resource.description} />);
      }
    })
  }

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
          <CircularContent>
            {minuteAllowances}
          </CircularContent>
        </Minutes>
        <Internet>
          <BoxTitle>
            Internet
          </BoxTitle>
          <CircularContent>
            {internetAllowances}
          </CircularContent>
        </Internet>
      </ResourcesContent>
      <BCycle>
        Your billing cycle
      </BCycle>
      <BCycleContent>
        All allowances included in your plan and extra bundless will reset monthly on the 6th.
      </BCycleContent>
    </Wrapper>
  )
}

export default Resources;
