import React from 'react';
import Card from '../../components/Card/Card';

import {
  Container,
  Header,
  Image,
  Button,
  Main,
  Present,
  Cities,
  FirstList,
  SecondList,
} from './styles';

import logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Image src={logo} />
        <Button type="button">Acesso restrito</Button>
      </Header>

      <Main>
        <Present>
          <h1>Viva uma grande aventura</h1>
          <p>
            Descubra locais incríveis para se visitar em cidades maravilhosas de
            Santa Catarina.
          </p>
          <button type="button">Descobrir todos os lugares</button>
        </Present>
        <Cities>
          <FirstList>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </FirstList>
          <SecondList>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </SecondList>
        </Cities>
      </Main>
    </Container>
  );
};

export default Home;
