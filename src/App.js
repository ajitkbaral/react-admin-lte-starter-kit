import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Panel from './pages/panel/Panel';

function App() {
  return (
    <Router>
      <Switch>
        {/* Redirect all routes ending multiple slash with single slash */}
        <Redirect strict from="//" to="/" />
        <Route path='/login' exact component={Login}></Route>
        <ProtectedRoute exact path="/panel" component={Panel} />

        <Route exact path="/index.html" render={() => <Redirect to="/" />} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
