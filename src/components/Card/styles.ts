import styled from 'styled-components';
import cardPic from '../../assets/img/floriapa.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 304px;
  height: 316px;

  border-radius: 20px;
  border: 1.18px solid var(--secondaryShape);
`;

export const Image = styled.div`
  width: 100%;
  height: 210px;

  background-image: url(${cardPic});
  background-size: cover;
  background-position: center;

  border-radius: 20px 20px 0 0;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  > span {
    font-size: 22.8px;
    font-weight: 500;
    color: var(--title);
  }

  > p {
    font-size: 15.22px;
    color: var(--text);
  }
`;
