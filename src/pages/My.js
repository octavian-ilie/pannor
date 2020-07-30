import React, { useState, useEffect } from "react";
import defaultTitle from '../rules/defaultTitle';
import PrivateRoute from '../PrivateRoute';

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

import Summary from '../components/my/Summary';
import Resources from '../components/my/Resources';
import Invoices from '../components/my/Invoices';

function Overview(props) {
  // Hard-coded data, to be fetched later
  const customerId = 1823784;
  const userTotalDue = 0;

  const [appState, setAppState] = useState({
    loading: false,
    customer: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.octavian.nl/pannor/customers/${customerId}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((customer) => {
        setAppState({ loading: false, customer: customer });
      })
  }, [setAppState, props.customerId]);

  let currentNo;
  let firstName;
  let lastName;

  if(appState.customer) {
    firstName = appState.customer[0].first_name;
    lastName = appState.customer[0].last_name;
    currentNo = `0${appState.customer[0].mobile_number}`;
    document.title = defaultTitle + 'Welcome, ' + firstName;
  }

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
          {persGreeting}{`${firstName} ${lastName}`}
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
              <PrivateRoute
                exact
                path="/my"
                component={Summary}
                userTotalDue={userTotalDue}
                customerId={customerId}
              />
              <PrivateRoute
                path="/my/resources"
                component={Resources}
                customerId={customerId}
              />
              <PrivateRoute
                path="/my/invoices"
                component={Invoices}
              />
        </Content>
      </AppContainer>
    </Background>
  );
}

export default Overview;
