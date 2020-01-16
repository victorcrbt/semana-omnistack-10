import React, { useState, useEffect } from 'react';
import { Marker, Callout } from 'react-native-maps';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

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

  useEffect(() => {
    (async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (!granted) return;

      const { coords } = await getCurrentPositionAsync({
        enableHighAccuracy: true,
      });

      const { latitude, longitude } = coords;

      setLocation({
        latitude: -29.9001409,
        longitude: -50.262451,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      });
    })();
  }, []);

  if (!location) {
    return null;
  }

  return (
    <>
      <Map initialRegion={location}>
        <Marker coordinate={{ latitude: -29.9001409, longitude: -50.262451 }}>
          <Avatar
            source={{
              uri:
                'https://avatars1.githubusercontent.com/u/26396515?s=460&v=4',
            }}
          />

          <Callout
            onPress={() => {
              navigation.navigate('Profile', { github_username: 'victorcrbt' });
            }}
          >
            <DevInfo>
              <DevName>Victor Batalha</DevName>
              <DevBio>
                Desenvolvedor Fullstack Javascript. NodeJS, ReactJS e React
                Native. Sempre buscando aprimorar os conhecimentos!
              </DevBio>
              <DevTechs>Node.js, ReactJS, React Native</DevTechs>
            </DevInfo>
          </Callout>
        </Marker>
      </Map>

      <SearchForm>
        <SearchInput
          placeholder="Buscar devs por techs..."
          autoCapitalize="words"
          autoCorrect={false}
        />

        <SearchButton>
          <SearchButtonIcon />
        </SearchButton>
      </SearchForm>
    </>
  );
}
