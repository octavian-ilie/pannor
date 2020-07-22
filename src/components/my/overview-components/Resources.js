import React from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  Container,
  BoxTitle,
  BoxBottomLink,
} from './BoxStyling';

const Box = styled(Container)`
  width: 66%;
`;

const CircularContent = styled.div`
  padding: 0rem 2rem;
  display: flex;
  flex-direction: row;
  height: 100px;
  margin-top: -0.5rem;
  justify-content: space-evenly;
`;

const CircularDescriptions = styled.div`
  padding: 0rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const DescriptionBox = styled.div`
  color: #888;
  font-size: 0.8rem;
  width: 171px;
  text-align: center;
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

function Resources() {
  return (
    <Box>
      <BoxTitle>
        Resources and consumption
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
        <CircularProgressbar
          value={remainingInternet}
          maxValue={availableInternet}
          text={`${remainingInternet} GB`}
          styles={circularStyle}
        />
      </CircularContent>
      <CircularDescriptions>
        <DescriptionBox>
          NL and from EU
        </DescriptionBox>
        <DescriptionBox>
          from NL to EU
        </DescriptionBox>
        <DescriptionBox>
          Internet NL and EU
        </DescriptionBox>
      </CircularDescriptions>
      <BoxBottomLink to="/my/resources">
        Details
      </BoxBottomLink>
    </Box>
  )
}

export default Resources;
