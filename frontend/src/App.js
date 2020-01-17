import React, { useState } from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  const [signed, setSigned] = useState(false);

  return (
    <Router history={history}>
      <Routes />

      <GlobalStyle />
    </Router>
  );
}

export default App;
