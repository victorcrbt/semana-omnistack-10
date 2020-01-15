import React, { useState, useEffect } from 'react';

import { Container } from './styles';

export default function DevForm({ onSubmit, error }) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [location, setLocation] = useState({
    latitude: '',
    longitude: '',
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

    try {
      await onSubmit(github_username, techs, location);

      setGithubUsername('');
      setTechs('');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container onSubmit={handleSubmit} error={error.status}>
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
    </Container>
  );
}
