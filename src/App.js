import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Login from './Components/Login';
import Planets from './Components/Planets';
import Spacecraft from './Components/Spacecraft';
import NoMatch from './Components/404';

import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/planets" component={Planets} />
        <PrivateRoute path="/spacecraft" component={Spacecraft} />
        <Redirect from="/" to="/login" />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
