import React, { useState, useEffect, useContext } from 'react';

import AuthContext from '~/AuthContext';
import api from '~/services/api';

import { Container, Input } from './styles';

export default function UserInfo() {
  const context = useContext(AuthContext);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [location, setLocation] = useState(null);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({
    status: false,
    type: '',
    message: '',
  });

  useEffect(() => {
    const { name, github_username, techs, location } = context;

    setName(name);
    setGithubUsername(github_username);
    setTechs(techs.join(', '));
    setLocation({
      latitude: location?.coordinates[1],
      longitude: location?.coordinates[0],
    });
  }, [context]);

  async function handleUpdateDev(e) {
    e.preventDefault();

    try {
      const response = await api.put('/devs', {
        name,
        techs,
        latitude: location?.latitude,
        longitude: location?.longitude,
        password,
      });

      const devInfo = {
        ...JSON.parse(localStorage.getItem('dev-radar:auth')),
        ...response.data,
      };

      context.setAuth({
        ...context,
        ...devInfo,
      });

      localStorage.setItem('dev-radar:auth', JSON.stringify(devInfo));

      if (password) {
        setPassword('');
      }
      setEditing(false);
      setMessage({
        ...message,
        status: true,
        type: 'success',
        message: 'Perfil atualizado com sucesso!',
      });

      setTimeout(() => {
        setMessage({
          ...message,
          status: false,
          type: '',
          message: '',
        });
      }, 3000);
    } catch (error) {
      setMessage({
        ...message,
        status: true,
        type: 'error',
        message: 'Falha ao atualizar pefil :/',
      });

      setTimeout(() => {
        setMessage({
          ...message,
          status: false,
          type: '',
          message: '',
        });
      }, 3000);
    }
  }

  function handleLogout(e) {
    e.preventDefault();

    localStorage.removeItem('dev-radar:auth');
    context.setAuth({
      ...context,
      signed: false,
      name: '',
      bio: '',
      github_username: '',
      avatar_url: '',
      techs: [],
    });

    api.defaults.headers.Authorization = null;
  }

  return (
    <Container onSubmit={handleUpdateDev} message={message}>
      <div className="message">{message.status && message.message}</div>

      <div className="input-block">
        <label htmlFor="name">Nome</label>
        <Input
          editing={editing}
          value={name}
          onChange={e => setName(e.target.value)}
          name="name"
          id="name"
          required
        />
      </div>

      <div className="input-block">
        <label htmlFor="github_username">Usuário do github</label>
        <Input
          disabled={true}
          value={github_username}
          name="github_username"
          id="github_username"
          required
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <Input
          editing={editing}
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
          <Input
            editing={editing}
            type="number"
            value={location?.latitude}
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
          <Input
            editing={editing}
            type="number"
            value={location?.longitude}
            onChange={e =>
              setLocation({ ...location, longitude: e.target.value })
            }
            name="longitude"
            id="longitude"
            required
          />
        </div>
      </div>

      {editing && (
        <div className="input-block">
          <label htmlFor="password">Nova senha</label>
          <Input
            editing={editing}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
            id="password"
          />
        </div>
      )}

      {editing ? (
        <>
          <button type="submit">Salvar</button>
          <button
            type="button"
            className="cancel-button"
            onClick={e => {
              e.preventDefault();
              setEditing(false);
            }}
          >
            Cancelar
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            className="edit-button"
            onClick={e => {
              e.preventDefault();
              setEditing(true);
            }}
          >
            Editar perfil
          </button>
          <button className="delete-button" onClick={handleLogout}>
            Sair
          </button>
        </>
      )}
    </Container>
  );
}
