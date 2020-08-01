import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';

import './Accordion.css';

const Content = styled.div`
  padding: 1rem 0;
`;

function Accordion(props) {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion--icon');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === 'active' ? 'accordion--icon' : 'accordion--icon rotate'
    );
  }

  return (
    <div className="accordion--section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion--title">{props.title}</p>
        <Arrow className={`${setRotate}`} width={10} fill={'inherit'} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion--content"
      >
        <Content>
          {props.children}
        </Content>
      </div>
    </div>
  )
}

export default Accordion;
