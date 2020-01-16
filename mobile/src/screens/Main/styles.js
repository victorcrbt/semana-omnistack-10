import styled from 'styled-components/native';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MapView from 'react-native-maps';

export const Map = styled(MapView)`
  flex: 1;
`;

export const Avatar = styled(Image)`
  width: 54px;
  height: 54px;

  border-radius: 4px;
  border-width: 4px;
  border-color: #fff;
`;

export const DevInfo = styled.View`
  width: 260px;
`;

export const DevName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const DevBio = styled.Text`
  color: #666;
  margin-top: 5px;
`;

export const DevTechs = styled.Text`
  margin-top: 5px;
`;

export const SearchForm = styled(View)`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 5;

  flex-direction: row;
`;

export const SearchInput = styled(TextInput).attrs({
  placeholderTextColor: '#999',
})`
  height: 50px;
  padding: 0 20px;

  background: #fff;
  color: #333;
  font-size: 16px;
  border-radius: 25px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-offset: 4px 4px;
  elevation: 2;

  flex: 1;
`;

export const SearchButton = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  margin-left: 15px;

  background: #8e4dff;
  border-radius: 25px;

  justify-content: center;
  align-items: center;
`;

export const SearchButtonIcon = styled(MaterialIcons).attrs({
  name: 'my-location',
  size: 20,
  color: '#fff',
})``;
