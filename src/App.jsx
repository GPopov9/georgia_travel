import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

import './App.css';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </Router>
  </>
);

export default App;
