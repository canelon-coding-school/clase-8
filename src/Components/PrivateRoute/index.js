import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Auth from '../../services/authentication';

function PrivateRoute({ component: Component, ...rest }) {
  const auth = new Auth();

  return (
    <Route
      {...rest}
      render={props =>
        auth.isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
