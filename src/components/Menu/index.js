import React from 'react';

import {
  Container,
  ProfileImage,
  LinkList,
  LinkMenu,
  ProfileButton,
  FixedMenu,
} from './styles';

import profileImage from '../../assets/profile.png';

export default function Menu() {
  return (
    <Container>
      <FixedMenu>
        <ProfileImage src={profileImage} alt="perfil" />
        <LinkList>
          <li>
            <LinkMenu to="/">Home</LinkMenu>
          </li>
          <li>
            <LinkMenu to="/">Desafios</LinkMenu>
          </li>
          <li>
            <LinkMenu to="/">Empresas</LinkMenu>
          </li>
        </LinkList>
        <ProfileButton to="/">Perfil</ProfileButton>
      </FixedMenu>
    </Container>
  );
}
