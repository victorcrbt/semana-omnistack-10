import React, { useState } from 'react';
import { Router } from 'react-router-dom';

import AuthContext from './AuthContext';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  const [auth, setAuth] = useState({
    signed: false,
    name: '',
    github_username: '',
    avatar_url: '',
    techs: [],
  });

  return (
    <AuthContext.Provider value={{ ...auth, setAuth }}>
      <Router history={history}>
        <Routes />

        <GlobalStyle />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
