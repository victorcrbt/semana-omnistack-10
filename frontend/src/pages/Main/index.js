import React, { useState, useEffect, useContext } from 'react';

import AuthContext from '~/AuthContext';
import api from '~/services/api';

import DevItem from './DevItem';
import LeftArea from './LeftArea';
import { MainContent } from './styles';

export default function Main() {
  const { signed } = useContext(AuthContext);

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function fetchDevsFromApi() {
      if (!signed || devs.length > 0) return;

      const response = await api.get('/devs');

      setDevs([...devs, ...response.data]);
    }

    fetchDevsFromApi();
  }, [signed]);

  return (
    <>
      <LeftArea />

      <MainContent signed={signed}>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev.id} dev={dev} signed={signed} />
          ))}
        </ul>
      </MainContent>
    </>
  );
}
