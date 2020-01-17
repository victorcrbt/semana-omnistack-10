import React from 'react';
import { Switch } from 'react-router-dom';

import Main from '~/pages/Main';
import SignUp from '~/pages/SignUp';

import Route from './Route';

export default function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/cadastro" component={SignUp} />
    </Switch>
  );
}
