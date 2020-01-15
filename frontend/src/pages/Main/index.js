import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import DevForm from './DevForm';
import DevItem from './DevItem';
import { Container, Sidebar, MainContent } from './styles';

export default function Main() {
  const [devs, setDevs] = useState([]);
  const [error, setError] = useState({
    status: false,
    message: '',
  });

  useEffect(() => {
    async function fetchDevsFromApi() {
      const response = await api.get('/devs');

      setDevs([...devs, ...response.data]);
    }

    fetchDevsFromApi();
  }, []);

  async function handleSubmit(github_username, techs, location) {
    if (error.status === true) {
      setError({ ...error, status: false, message: '' });
    }

    try {
      const response = await api.post('/devs', {
        github_username,
        techs,
        latitude: location.latitude,
        longitude: location.longitude,
      });

      setDevs([...devs, response.data]);
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
      throw Error();
    }
  }

  return (
    <Container>
      <Sidebar error={error.status}>
        <strong>Cadastrar</strong>

        <DevForm onSubmit={handleSubmit} error={error} />
      </Sidebar>

      <MainContent>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </MainContent>
    </Container>
  );
}
