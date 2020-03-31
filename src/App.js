import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from './pages/Login';
import Panel from './pages/panel/Panel';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={Login}></Route>
        <ProtectedRoute exact path="/panel" component={Panel} />
      </Switch>
    </Router>
  );
}

export default App;
