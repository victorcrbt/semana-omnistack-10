import styled from 'styled-components/native';
import { Image } from 'react-native';

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
