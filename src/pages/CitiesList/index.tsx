import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import Card from '../../components/Card';
import Header from '../../components/Header';

import { Container, Title, Menu, ContainerList } from './styles';

import Florianopolis from '../../assets/img/florianopolis.jpg';
import AguasMornas from '../../assets/img/aguas-mornas.png';
import Bombinhas from '../../assets/img/bombinhas.png';
import Blumenal from '../../assets/img/blumenal.png';
import Imbituba from '../../assets/img/imbituba.jpg';

const CitiesList: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Title>
          <h1>Selecione uma cidade</h1>

          <Menu>
            <p className="active">Todas</p>
            <p>Mais acessadas</p>
            <p>
              A-Z
              <FiChevronDown size={20} />
            </p>
          </Menu>
        </Title>

        <ContainerList>
          <Card name="Águas Mornas" img={AguasMornas} numPlaces={13} />
          <Card name="Bombinhas" img={Bombinhas} numPlaces={43} />
          <Card name="Blumenal" img={Blumenal} numPlaces={29} />
          <Card name="Florianopolis" img={Florianopolis} numPlaces={98} />
          <Card name="Imbituba" img={Imbituba} numPlaces={61} />
        </ContainerList>

        <ContainerList>
          <Card name="Florianopolis" img={Florianopolis} numPlaces={98} />
          <Card name="Águas Mornas" img={AguasMornas} numPlaces={13} />
          <Card name="Imbituba" img={Imbituba} numPlaces={61} />
          <Card name="Blumenal" img={Blumenal} numPlaces={29} />
          <Card name="Bombinhas" img={Bombinhas} numPlaces={43} />
        </ContainerList>
      </Container>
    </div>
  );
};

export default CitiesList;
