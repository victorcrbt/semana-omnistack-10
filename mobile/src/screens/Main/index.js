import React, { useState, useEffect } from 'react';

import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import api from '../../services/api';

import MapMarker from './MapMarker';
import {
  Map,
  Avatar,
  DevInfo,
  DevName,
  DevBio,
  DevTechs,
  SearchForm,
  SearchInput,
  SearchButton,
  SearchButtonIcon,
} from './styles';

export default function Main({ navigation }) {
  const [location, setLocation] = useState(null);
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState('');

  useEffect(() => {
    (async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (!granted) return;

      const { coords } = await getCurrentPositionAsync({
        enableHighAccuracy: true,
      });

      const { latitude, longitude } = coords;

      setLocation({
        latitude,
        longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      });
    })();
  }, []);

  function handleRegionChanged(region) {
    setLocation(region);
  }

  async function loadDevs() {
    try {
      const { latitude, longitude } = location;

      const response = await api.get('/search', {
        params: {
          latitude,
          longitude,
          techs,
        },
      });

      setDevs([...response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  function showGitHubProfile(github_username) {
    navigation.navigate('Profile', {
      github_username,
    });
  }

  if (!location) {
    return null;
  }

  return (
    <>
      <Map
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={location}
      >
        {devs.map(dev => (
          <MapMarker
            dev={dev}
            key={dev._id}
            onPress={() => showGitHubProfile(dev.github_username)}
          />
        ))}
      </Map>

      <SearchForm>
        <SearchInput
          placeholder="Buscar devs por techs..."
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <SearchButton onPress={loadDevs}>
          <SearchButtonIcon />
        </SearchButton>
      </SearchForm>
    </>
  );
}
