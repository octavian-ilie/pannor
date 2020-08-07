import styled from 'styled-components';

import { device } from '../../rules/device';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SectionTitle = styled.div`
  font-family: var(--pannor-medium);
  color: var(--main);
  font-size: 1.6rem;

  @media ${device.tablet} {
    padding-left: 1rem;
  }
`;

const SectionDescription = styled.div`
  color: var(--main);
  padding: 1rem 0;

  @media ${device.tablet} {
    padding: 1rem;
  }
`;

export { Wrapper, SectionTitle, SectionDescription };
