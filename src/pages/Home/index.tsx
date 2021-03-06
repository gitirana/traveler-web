import React from 'react';
import {
  Container,
  Header,
  Image,
  Button,
  Main,
  Present,
  Cities,
} from './styles';

import logo from '../../assets/logo.svg';

export default function Home() {
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
        <Cities>asd</Cities>
      </Main>
    </Container>
  );
}
