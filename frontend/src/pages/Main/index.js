import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container, Sidebar, MainContent } from './styles';

export default function Main() {
  const [devs, setDevs] = useState([]);
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

  useEffect(() => {
    async function fetchDevsFromApi() {
      const response = await api.get('/devs');

      setDevs([...devs, ...response.data]);
    }

    fetchDevsFromApi();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('/devs', {
        github_username,
        techs,
        latitude: location.latitude,
        longitude: location.longitude,
      });

      setGithubUsername('');
      setTechs('');

      setDevs([...devs, response.data]);
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <Container>
      <Sidebar>
        <strong>Cadastrar</strong>

        <form onSubmit={handleSubmit}>
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
        </form>
      </Sidebar>

      <MainContent>
        <ul>
          {devs.map(dev => (
            <li className="dev-item" key={dev._id}>
              <header>
                <img src={dev.avatar_url} alt={dev.name} />

                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a
                href={`https://github.com/${dev.github_username}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Acessar perfil no GitHub
              </a>
            </li>
          ))}
        </ul>
      </MainContent>
    </Container>
  );
}
