import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container, Form } from './styles';

export default function SignUp() {
  const [github_username, setGithubUsername] = useState('');
  const [password, setPassword] = useState('');
  const [techs, setTechs] = useState('');
  const [location, setLocation] = useState({
    latitude: '',
    longitude: '',
  });
  const [error, setError] = useState({
    status: false,
    message: '',
  });

  useEffect(() => {
    function setCurrentLocation(position) {
      const { latitude, longitude } = position.coords;

      setLocation({ ...location, latitude, longitude });
    }

    navigator.geolocation.getCurrentPosition(
      setCurrentLocation,
      err => console.log(err),
      { timeout: 30000 }
    );
  }, [location]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (error.status === true) {
      setError({ ...error, status: false, message: '' });
    }

    try {
      await api.post('/devs', {
        github_username,
        techs,
        password,
        latitude: location.latitude,
        longitude: location.longitude,
      });
    } catch (err) {
      if (err.response.status === 404) {
        setError({
          ...error,
          status: true,
          message: 'Usuário do GitHub não encontrado.',
        });
      } else {
        setError({
          ...error,
          status: true,
          message: 'Algo de errado aconteceu :/.',
        });
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} error={error.status}>
        <h2>Cadastro</h2>
        <div className="error">{error.status && error.message}</div>

        <div className="input-block">
          <label htmlFor="github_username">Usuário do github</label>
          <input
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
            name="github_username"
            id="github_username"
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

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input
            value={techs}
            onChange={e => setTechs(e.target.value)}
            name="techs"
            id="techs"
            required
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input
              type="number"
              value={location.latitude}
              onChange={e =>
                setLocation({ ...location, latitude: e.target.value })
              }
              name="latitude"
              id="latitude"
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input
              type="number"
              value={location.longitude}
              onChange={e =>
                setLocation({ ...location, longitude: e.target.value })
              }
              name="longitude"
              id="longitude"
              required
            />
          </div>
        </div>

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
