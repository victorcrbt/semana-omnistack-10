import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';

import AuthContext from './AuthContext';
import Routes from './routes';
import api from './services/api';
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

  useEffect(() => {
    const devInfo = JSON.parse(localStorage.getItem('dev-radar:auth'));

    if (!devInfo) {
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${devInfo.token}`;

    setAuth({
      ...auth,
      signed: true,
      name: devInfo.name,
      github_username: devInfo.username,
      avatar_url: devInfo.avatar_url,
      techs: devInfo.techs,
    });
  }, []);

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
