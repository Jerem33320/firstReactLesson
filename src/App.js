import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Auth from './components/Auth';
import Login from './components/Login';
import Homepage from './components/Homepage';

const App = (props) => (
  <Router>
    <div>
      <Route exact path="/" component={Auth} />
      <Route exact path="/login" component={Login} />
      <Route path="/homepage" component={Homepage} />
    </div>
  </Router>
)

export default App;