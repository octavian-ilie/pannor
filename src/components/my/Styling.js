import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SectionTitle = styled.div`
  font-family: var(--pannor-medium);
  color: var(--main);
  font-size: 1.6rem;
`;

const SectionDescription = styled.div`
  color: var(--main);
  padding: 1rem 0;
`;

export { Wrapper, SectionTitle, SectionDescription };
