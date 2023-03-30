import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login/LoginPage.Js';
import Dashboard from './Dashboard/Dashboard';
//import NotFound from './NotFound';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Login} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        
    </Router>
  );
}

export default App;
