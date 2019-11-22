import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as sessionSelectors from '../redux/session/sessionsSelectors';

const ProtectedRoute = ({ authenticated, redirectTo = '/', component: Component, ...rest }) =>
  (<Route {...rest} render={props =>
      authenticated ?
      (<Component {...props} />) :
      (<Redirect to={{ pathname: redirectTo, state: { from: props.location } }}/>
      )
    }
  />
);

const mapStateToProps = state => ({
  authenticated: sessionSelectors.authenticated(state)
});

export default connect(mapStateToProps)(ProtectedRoute);
