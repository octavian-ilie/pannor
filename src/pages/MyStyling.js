import styled from 'styled-components';
import { device } from '../rules/device';

const Background = styled.div`
  width: 100%;
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #f5f5f5;
`;

const HeaderContainer = styled.div`
  width: 1170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 100%;
    flex-direction: column;
  }
`;

const AppContainer = styled.div`
  width: 1170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  flex-grow: 1;

  @media ${device.tablet} {
    width: 100%;
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-family: var(--pannor-regular);
  font-size: 2rem;
  color: var(--main);
  padding: 4rem 0;

  @media ${device.tablet} {
    font-size: 1.4rem;
    padding: 1rem 1rem 0.6rem 1rem;
  }
`;

const ChooseNumber = styled.div`
  background-color: #fff;
  align-self: center;
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 3px;
  color: var(--secondary);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  box-shadow: 0 1px 2px rgba(0,0,0,0.015),
              0 2px 4px rgba(0,0,0,0.015),
              0 4px 8px rgba(0,0,0,0.015),
              0 8px 16px rgba(0,0,0,0.015),
              0 16px 32px rgba(0,0,0,0.015),
              0 32px 64px rgba(0,0,0,0.015);

  &:hover {
    color: var(--main);
    padding-left: 88px;
  }

  &::before {
    opacity: 0;
    content: 'Switch ';
    color: var(--secondary);
    position: absolute;
    transition: all 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
    content: 'Switch ';
    position: absolute;
    transform translateX(-70px);
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;

const Navigation = styled.div`
  width: 20%;
  height: auto;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 2px rgba(0,0,0,0.015),
              0 2px 4px rgba(0,0,0,0.015),
              0 4px 8px rgba(0,0,0,0.015),
              0 8px 16px rgba(0,0,0,0.015),
              0 16px 32px rgba(0,0,0,0.015),
              0 32px 64px rgba(0,0,0,0.015);

  @media ${device.tablet} {
    width: 100%;
    flex-direction: row;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin-bottom: 2rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Content = styled.div`
  width: 75%;
  height: auto;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export { Background, HeaderContainer, AppContainer, Title, ChooseNumber, Navigation, Content };