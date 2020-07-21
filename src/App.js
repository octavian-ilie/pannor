import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import PrivateRoute from './PrivateRoute';
import Header from './components/Header';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Home from './pages/Home';
import Overview from './pages/My';
import NotFound from './pages/NotFound';
import Business from './pages/Business';
import { AuthContext } from "./context/auth";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function App(props) {
  return (
    // Change value to true/false to simulate authentication
    <AuthContext.Provider value={true}>
      <AuthContext.Consumer>
        {signedin => (
          <Router>
            <Header/>
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin"
                  render={(props) => (
                    <Login {...props} signedin={signedin} />
                  )}
                />
                <Route path="/signup" component={Signup} />
                <Route path="/business" component={Business} />
                <PrivateRoute path="/my" component={Overview} />
                <PrivateRoute path="/my/plan" component={Overview} />
                <Route path="*">
                  <NotFound/>
                </Route>
              </Switch>
            </Container>
          </Router>
        )}
      </AuthContext.Consumer>
    </AuthContext.Provider>
  );
}

export default App;
