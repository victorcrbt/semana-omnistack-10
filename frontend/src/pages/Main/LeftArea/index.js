import React, { useContext } from 'react';

import AuthContext from '~/AuthContext';

import LoginForm from './LoginForm';
import { SidebarContainer, Sidebar } from './styles';
import UserInfo from './UserInfo';

export default function LeftArea() {
  const { signed, name } = useContext(AuthContext);

  return (
    <SidebarContainer signed={signed}>
      <Sidebar>
        <strong>{!signed ? 'Login' : `Bem vindo, ${name}!`}</strong>

        {!signed ? <LoginForm /> : <UserInfo />}
      </Sidebar>
    </SidebarContainer>
  );
}
