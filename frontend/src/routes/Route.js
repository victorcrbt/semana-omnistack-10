import React from 'react';
import { Route } from 'react-router-dom';

import DefaultLayout from '~/pages/DefaultLayout';

export default function RouteWrapper({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
}
