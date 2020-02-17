import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import LoginPage from './pages/login/login.page';
import SignUpPage from './pages/signup/signup.page';
import setAuthToken from './util/setAuthToken';
import authTypes from './redux/auth/auth.types';
import isEmpty from './util/isEmpty';

function App({ dispatch }) {
  let userAuth = !isEmpty(localStorage.auth);

  useEffect(() => {
    if (userAuth) {
      const auth = JSON.parse(localStorage.getItem('auth'));

      setAuthToken(auth.token);

      dispatch({
        type: authTypes.SIGN_IN_SUCCESS,
        payload: auth
      });
    }
  }, [userAuth, dispatch]);

  return (
    <>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUpPage} />
      </Switch>
    </>
  );
}

export default connect(null)(App);
