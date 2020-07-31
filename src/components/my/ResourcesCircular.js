import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

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
};

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Details = styled.div`
  color: var(--secondary);
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: center;
  padding: 0 2rem;
`;

function ResourcesCircular(props) {
  let type = '';
  if(props.resourceType === 'internet') {
    type = 'MB';
  } else if(props.resourceType === 'minutes') {
    type = 'min';
  }

  return (
    <Container>
      <CircularProgressbar
        value={props.amount_remaining}
        maxValue={props.amount_available}
        text={`${props.amount_remaining} ${type}`}
        styles={circularStyle}
      />
      <Details>
        remaining / {props.amount_available} {type === 'MB' ? type : null} {props.description}
      </Details>
    </Container>
  )
}

export default ResourcesCircular;
