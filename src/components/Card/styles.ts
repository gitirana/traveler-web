import styled from 'styled-components';
import cardPic from '../../assets/img/floriapa.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 19rem;
  height: 20rem;

  border-radius: 20px;
  border: 1.18px solid var(--secondaryShape);
`;

export const Image = styled.div`
  width: 100%;
  height: 13.125rem;

  background-image: url(${cardPic});
  background-size: cover;
  background-position: center;

  border-radius: 20px 20px 0 0;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.25rem;

  > span {
    font-size: 1.425rem;
    font-weight: 500;
    color: var(--title);
  }

  > p {
    font-size: 0.95125rem;
    color: var(--text);
  }
`;
