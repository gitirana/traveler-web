import React from 'react';
import { useHistory } from 'react-router-dom';

import Card from '../../components/Card';

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

import Florianopolis from '../../assets/img/florianopolis.jpg';
import Bombinhas from '../../assets/img/bombinhas.png';
import Blumenal from '../../assets/img/blumenal.png';
import AguasMornas from '../../assets/img/aguas-mornas.png';

const Home: React.FC = props => {
  const history = useHistory();
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
          <button type="button" onClick={() => history.push('/cities')}>
            Descobrir todos os lugares
          </button>
        </Present>
        <Cities>
          <FirstList>
            <Card name="Florianopolis" img={Florianopolis} numPlaces={98} />
            <Card name="Bombinhas" img={Bombinhas} numPlaces={43} />
            <Card name="Blumenal" img={Blumenal} numPlaces={29} />
            <Card name="Águas Mornas" img={AguasMornas} numPlaces={13} />
            <Card name="Bombinhas" img={Bombinhas} numPlaces={43} />
          </FirstList>
          <SecondList>
            <Card name="Blumenal" img={Blumenal} numPlaces={29} />
            <Card name="Águas Mornas" img={AguasMornas} numPlaces={13} />
            <Card name="Bombinhas" img={Bombinhas} numPlaces={43} />
            <Card name="Florianopolis" img={Florianopolis} numPlaces={98} />
            <Card name="Águas Mornas" img={AguasMornas} numPlaces={13} />
          </SecondList>
        </Cities>
      </Main>
    </Container>
  );
};

export default Home;
