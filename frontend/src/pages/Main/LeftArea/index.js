import React, { useContext } from 'react';

import AuthContext from '~/AuthContext';

import LoginForm from './LoginForm';
import { SidebarContainer, Sidebar } from './styles';

export default function LeftArea() {
  const { signed, github_username } = useContext(AuthContext);

  return (
    <SidebarContainer signed={signed}>
      <Sidebar>
        <strong>{!signed ? 'Login' : `Bem vindo, ${github_username}!`}</strong>

        {!signed && <LoginForm />}
      </Sidebar>
    </SidebarContainer>
  );
}
