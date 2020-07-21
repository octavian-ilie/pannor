import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
  background-color: #f5f5f5;
`;

const HeaderContainer = styled.div`
  width: 1170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AppContainer = styled.div`
  width: 1170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const Title = styled.div`
  font-family: 'Octavian Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  color: #222;
  padding: 4rem 0;
`;

const ChooseNumber = styled.div`
  background-color: #fff;
  align-self: center;
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 3px;
  color: #888;
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
    color: #222;
    padding-left: 88px;
  }

  &::before {
    opacity: 0;
    content: 'Switch ';
    color: #888;
    position: absolute;
    transition: all 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
    content: 'Switch ';
    position: absolute;
    transform translateX(-70px);
  }
`;

const Navigation = styled.div`
  width: 20%;
  height: 800px;
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
`;

const Content = styled.div`
  width: 75%;
  height: 800px;
`;

export { Background, HeaderContainer, AppContainer, Title, ChooseNumber, Navigation, Content };