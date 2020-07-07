import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Header from './components/Header';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Home from './pages/Home';
import Overview from './pages/Overview';
import NotFound from './pages/NotFound';
import { AuthContext } from "./context/auth";
import './App.css';

function App(props) {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <Header/>
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/my" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/overview" component={Overview} />
            <PrivateRoute path="/my/plan" component={Overview} />
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
