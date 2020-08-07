import React from 'react';
import styled from 'styled-components';
import Icon from '../../../components/Icon';

import { device } from '../../../rules/device';

const ContractInfoContainer = styled.div`
  color: var(--main);
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 1rem;

  @media ${device.tablet} {
    padding-bottom: 1rem;
  }
`;

const Svg = styled(Icon)`
  width: 40px; 
  height: 40px;
`;

const ContractStartIcon = ({ className }) => (
  <Svg viewBox="0 0 100 100" className={className}>
    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M41.4,5H4C1.8,5,0,6.8,0,9v82c0,2.2,1.8,4,4,4h60c2.2,0,4-1.8,4-4V31.6V31
			c0-1.1-0.6-2.6-1.4-3.4L45.4,6.4C44.6,5.6,43.1,5,42,5H41.4L41.4,5L41.4,5z M46.2,29C45,29,44,28,44,26.8V8.9
			c0-0.5,0.3-0.7,0.7-0.3l19.7,19.7c0.4,0.4,0.3,0.7-0.3,0.7H46.2L46.2,29z M4.2,7C3,7,2,8,2,9.2v81.6C2,92,3,93,4.2,93h59.6
			c1.2,0,2.2-1,2.2-2.2V32c0-0.6-0.5-1-1-1H46c-2.2,0-4-1.8-4-4V8c0-0.5-0.5-1-1-1H4.2L4.2,7z M34,70.3l-7.3,4.4
			c-2.1,1.3-3.4,0.4-2.8-2.1l1.9-8.2l-6.4-5.5c-1.9-1.6-1.4-3.1,1.1-3.3l8.5-0.7l3.3-7.7c1-2.3,2.6-2.3,3.5,0l3.3,7.7l8.5,0.7
			c2.5,0.2,3,1.7,1.1,3.3l-6.4,5.5l1.9,8.2c0.6,2.4-0.7,3.3-2.8,2.1L34,70.3z M42.1,72.8L40,63.7l7.2-6.1l-9.4-0.8L34,48.1l-3.7,8.7
			l-9.4,0.8l7.1,6.1l-2.1,9.2L34,68L42.1,72.8z"/>
  </Svg>
);

const ContractEndIcon = ({ className }) => (
  <Svg viewBox="0 0 100 100" className={className}>
    <g>
      <g>
        <g>
          <g>
            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M66.6,27.6L45.4,6.4C44.6,5.6,43.1,5,42,5H4C1.8,5,0,6.8,0,9v82
              c0,2.2,1.8,4,4,4h60c2.2,0,4-1.8,4-4V31C68,29.9,67.4,28.4,66.6,27.6z M44,8.9c0-0.5,0.3-0.7,0.7-0.3l19.7,19.7
              c0.4,0.4,0.3,0.7-0.3,0.7H46.2C45,29,44,28,44,26.8V8.9z M66,90.8c0,1.2-1,2.2-2.2,2.2H4.2C3,93,2,92,2,90.8V9.2C2,8,3,7,4.2,7
              H41c0.5,0,1,0.4,1,1v19c0,2.2,1.8,4,4,4h19c0.5,0,1,0.5,1,1V90.8z"/>
          </g>
        </g>
      </g>
      <g>
        <path fill="currentColor" d="M34,49c-8.5,0-15.4,6.9-15.4,15.4c0,8.5,6.9,15.4,15.4,15.4s15.4-6.9,15.4-15.4C49.4,55.9,42.5,49,34,49z M34,77.8
          c-7.4,0-13.4-6-13.4-13.4C20.6,57,26.6,51,34,51s13.4,6,13.4,13.4C47.4,71.8,41.4,77.8,34,77.8z"/>
      </g>
      <g>
        <path fill="currentColor" d="M40.8,69.8c0.4,0.4,0.4,1,0,1.4c-0.2,0.2-0.5,0.3-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.3L34,65.8l-5.4,5.4
          c-0.2,0.2-0.5,0.3-0.7,0.3c-0.2,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.4-5.4L27.2,59c-0.4-0.4-0.4-1,0-1.4
          c0.4-0.4,1-0.4,1.4,0L34,63l5.4-5.4c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-5.4,5.4L40.8,69.8z"/>
      </g>
    </g>
  </Svg>
);

const ContractInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContractStartDate = styled.div`
  color: #222;
`;

const ContractStartDescription = styled.div`
  color: #888;
  font-size: 0.8rem;
`;

function ContractInfo(props) {
  return (
    <div>
      <ContractInfoContainer>
          <ContractStartIcon/>
          <ContractInfoBox>
            <ContractStartDate>
              {props.startDate}
            </ContractStartDate>
            <ContractStartDescription>
              your contract started on
            </ContractStartDescription>
          </ContractInfoBox>
        </ContractInfoContainer>
        <ContractInfoContainer>
          <ContractEndIcon/>
          <ContractInfoBox>
            <ContractStartDate>
              {props.endDate}
            </ContractStartDate>
            <ContractStartDescription>
              you can upgrade / cancel on
            </ContractStartDescription>
          </ContractInfoBox>
        </ContractInfoContainer>
    </div>
  )
}

export default ContractInfo;
