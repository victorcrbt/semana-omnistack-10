import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { registerRootComponent } from 'expo';

import Routes from './routes';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
}

export default registerRootComponent(App);
