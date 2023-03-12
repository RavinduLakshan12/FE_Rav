import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;