import React from 'react';
import styled from 'styled-components';

import {
  Container,
  BoxTitle,
  BoxBottomLink,
} from './overview-components/BoxStyling';

const Wrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  `;
  
  const TotalAmount = styled.div`
  font-family: var(--pannor-medium);
  color: var(--main);
  font-size: 2.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #eaeaea;
  border-radius: 3px;
  background-color: #fff;
  padding: 2rem 4rem;
`;

const PaymentInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.div`
  font-family: var(--pannor-regular);
  font-size: 2rem;
  color: var(--main);
`;

function TotalDue(props) {
  if(props.totalDue === 0) {
    return (
      <>
      </>
    );
  }

  return (
    <Wrapper>
      <PaymentInfoContent>
        <Title>
          You have unpaid invoices
        </Title>
      </PaymentInfoContent>
      <Container style={{ marginBottom: 0 }}>
        <BoxTitle>
          Total remaining
        </BoxTitle>
        <TotalAmount>
          {props.totalDue} €
        </TotalAmount>
        <BoxBottomLink to="/pay">
          Download invoice
        </BoxBottomLink>
      </Container>
    </Wrapper>
  );
}

export default TotalDue;
