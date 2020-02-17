import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsAuthenticated } from '../redux/auth/auth.selector';

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
