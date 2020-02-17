import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import LoginPage from './pages/login/login.page';
import SignUpPage from './pages/signup/signup.page';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUpPage} />
      </Switch>
    </>
  );
}

export default App;
