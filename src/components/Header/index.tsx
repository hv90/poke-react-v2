import React from 'react';

import logo from '../../assets/images/logo.png';
import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <img src={logo} alt="header logo" />
  </Container>
);

export default Header;
