import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

function ResourcesCircular(props) {
  let type = '';
  if(props.resourceType === 'internet') {
    type = 'GB';
  } else if(props.resourceType === 'minutes') {
    type = 'min';
  }

  return (
    <CircularProgressbar
      value={props.amount_remaining}
      maxValue={props.amount_available}
      text={`${props.amount_remaining} ${type}`}
      styles={circularStyle}
    />
  )
}

export default ResourcesCircular;
