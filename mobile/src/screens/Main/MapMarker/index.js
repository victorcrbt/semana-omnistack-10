import React from 'react';
import { Marker, Callout } from 'react-native-maps';

import { Avatar, DevInfo, DevName, DevBio, DevTechs } from './styles';

export default function MapMarker({ dev, onPress }) {
  return (
    <Marker
      coordinate={{
        latitude: dev.location.coordinates[1],
        longitude: dev.location.coordinates[0],
      }}
    >
      <Avatar
        source={{
          uri: dev.avatar_url,
        }}
      />

      <Callout onPress={onPress}>
        <DevInfo>
          <DevName>{dev.name}</DevName>
          <DevBio>{dev.bio}</DevBio>
          <DevTechs>{dev.techs.join(', ')}</DevTechs>
        </DevInfo>
      </Callout>
    </Marker>
  );
}
