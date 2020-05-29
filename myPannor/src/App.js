import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Overview from './pages/Overview';
import { AuthContext } from "./context/auth";

function App(props) {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/overview">Overview</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/overview" component={Overview} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
