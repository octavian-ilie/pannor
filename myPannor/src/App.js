import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from './pages/Login';
import Overview from './pages/Overview';

function App(props) {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/overview">Overview</Link>
          </li>
        </ul>
        <Route exact path="/" component={Login} />
        <Route path="/overview" component={Overview} />
      </div>
    </Router>
  );
}

export default App;
