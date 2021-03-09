import React from 'react';
import Header from '../../components/Header';
import { Container, Title, Menu } from './styles';

const CitiesList: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Title>
          <h1>Selecione uma cidade</h1>

          <Menu>
            <p>Todas</p>
            <p>Mais acessadas</p>
            <p>A-Z</p>
          </Menu>
        </Title>
      </Container>
    </div>
  );
};

export default CitiesList;
