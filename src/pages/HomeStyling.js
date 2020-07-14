import styled from 'styled-components';
import { device } from '../rules/device';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Container = styled.div`
  width: 1170px;
  height: 500px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Slider = styled.div`
  max-width: 1400px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media ${device.laptopL} { 
    max-width: 100%;
  }
`;

const FastAccess = styled.div`
  width: 1170px;
  height: auto;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;

  @media ${device.bp1} { 
    width: 100%;
  }

  @media ${device.laptop} { 
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

const PromoCards = styled.div`
  width: 1170px;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
`;

export { Wrapper, Container, Slider, FastAccess, PromoCards };
