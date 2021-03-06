import React from 'react';
import { Container, Image, CardInfo } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <Image />

      <CardInfo>
        <span>Florianópolis</span>
        <p>98 locais</p>
      </CardInfo>
    </Container>
  );
};

export default Card;
