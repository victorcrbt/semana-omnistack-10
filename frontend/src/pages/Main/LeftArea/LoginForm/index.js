import React, { useState, useContext } from 'react';

import AuthContext from '~/AuthContext';
import api from '~/services/api';

import { Container } from './styles';

export default function LoginForm() {
  const context = useContext(AuthContext);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    status: false,
    message: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();

    setError({
      status: false,
      message: '',
    });

    try {
      const response = await api.post('/sessions', { username, password });

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      context.setAuth({
        ...context,
        ...response.data,
        github_username: response.data.username,
        signed: true,
      });

      localStorage.setItem('dev-radar:auth', JSON.stringify(response.data));

      setUserName('');
      setPassword('');
    } catch (err) {
      if (err.response.status === 401) {
        setError({
          status: true,
          message: 'Usuário ou senha inválidos.',
        });
      } else {
        setError({
          status: true,
          message: 'Algo de errado aconteceu :/',
        });
      }
    }
  }

  return (
    <Container onSubmit={handleSubmit} error={error.status}>
      <div className="error">{error.status && error.message}</div>

      <div className="input-block">
        <label htmlFor="username">Usuário</label>
        <input
          value={username}
          onChange={e => setUserName(e.target.value)}
          name="username"
          id="username"
          required
        />
      </div>

      <div className="input-block">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          name="password"
          id="password"
          required
        />
      </div>
      <button type="submit">Salvar</button>
    </Container>
  );
}
