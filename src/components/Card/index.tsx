import React from 'react';
import { Container, Image, CardInfo } from './styles';

interface CardProps {
  name: string;
  img: string;
  numPlaces: number;
}

const Card: React.FC<CardProps> = ({ name, img, numPlaces }: CardProps) => {
  return (
    <Container>
      <Image src={img} />

      <CardInfo>
        <span>{name}</span>
        <p>{`${numPlaces} ${numPlaces === 1 ? 'local' : 'locais'}`}</p>
      </CardInfo>
    </Container>
  );
};

export default Card;
