import React from "react";
import defaultTitle from '../rules/defaultTitle';
import PrivateRoute from '../PrivateRoute';
import Summary from '../components/my/Summary';
import Resources from '../components/my/Resources';
import { 
  Background, 
  HeaderContainer, 
  AppContainer, 
  Title, 
  ChooseNumber, 
  Navigation, 
  Content 
} from './MyStyling';
import OverviewLink from '../components/my/nav/OverviewLink';
import ResourcesLink from '../components/my/nav/ResourcesLink';
import InvoicesLink from '../components/my/nav/InvoicesLink';
import PlansLink from '../components/my/nav/PlansLink';
import ServicesLink from '../components/my/nav/ServicesLink';
import ThankYouLink from '../components/my/nav/ThankYouLink';
import EmergenciesLink from '../components/my/nav/EmergenciesLink';
import SettingsLink from '../components/my/nav/SettingsLink';

function Overview(props) {
  const userName = 'Octavian';
  const currentNo = '0788123456'
  document.title = defaultTitle + 'Welcome, ' + userName;

  const date = new Date();
  const time = date.getHours();
  let persGreeting = '';

  if (time >= 6 && time < 12) {
    persGreeting = 'Good morning, ';
  } else if (time >= 12 && time < 18) {
    persGreeting = 'Good afternoon, ';
  } else persGreeting = 'Good evening, ';

  return (
    <Background>
      <HeaderContainer>
        <Title>
          {persGreeting}{userName}
        </Title>
        <ChooseNumber>
          {currentNo}
        </ChooseNumber>
      </HeaderContainer>
      <AppContainer>
        <Navigation>
          <OverviewLink/>
          <ResourcesLink/>
          <InvoicesLink/>
          <PlansLink/>
          <ServicesLink/>
          <ThankYouLink/>
          <EmergenciesLink/>
          <SettingsLink/>
        </Navigation>
        <Content>
              <PrivateRoute exact path="/my" component={Summary}/>
              <PrivateRoute path="/my/resources" component={Resources}/>
        </Content>
      </AppContainer>
    </Background>
  );
}

export default Overview;