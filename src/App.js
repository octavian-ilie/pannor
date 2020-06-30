import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Header from './components/Header';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Home from './pages/Home';
import Overview from './pages/Overview';
import { AuthContext } from "./context/auth";
import './App.css';

function App(props) {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <Header/>
        <div className="app-container">
          <Route exact path="/" component={Home} />
          <Route exact path="/my" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/overview" component={Overview} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
