import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Header from './components/Header';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Overview from './pages/Overview';
import { AuthContext } from "./context/auth";
import './App.css';

function App(props) {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <Header/>
        <div class="app-container">
          <div class="navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
              <li>
                <Link to="/overview">Overview</Link>
              </li>
            </ul>
          </div>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/overview" component={Overview} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
