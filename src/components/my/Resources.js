import React from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
  height: 180px;
  justify-items: space-evenly;
`;

const circularStyle = {
  root: {},
  path: {
    stroke: '#fa7268',
  },
  trail: {
    stroke: '#f5f5f5',
    strokeLinecap: 'butt',
  },
  text: {
    fill: '#222',
    fontSize: '1rem',
    fontFamily: 'Octavian Regular',
  },
}

// Mock data, to be fetched later
const availableNatMins = 2000;
const remainingNatMins = 1092;

const availableIntlMins = 150;
const remainingIntMins = 27;

const availableInternet = 5;
const remainingInternet = 3.9;

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
          <CircularContent>
            <CircularProgressbar
              value={remainingNatMins}
              maxValue={availableNatMins}
              text={`${remainingNatMins} min`}
              styles={circularStyle}
            />
            <CircularProgressbar
              value={remainingIntMins}
              maxValue={availableIntlMins}
              text={`${remainingIntMins} min`}
              styles={circularStyle}
            />
          </CircularContent>
        </Minutes>
        <Internet>
          <BoxTitle>
            Internet
          </BoxTitle>
          <CircularContent>
            <CircularProgressbar
              value={remainingInternet}
              maxValue={availableInternet}
              text={`${remainingInternet} GB`}
              styles={circularStyle}
            />
          </CircularContent>
        </Internet>
      </ResourcesContent>
    </Wrapper>
  )
}

export default Resources;
