import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 19rem;
  height: 19.75rem;

  border-radius: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 13.125rem;

  border-radius: 20px 20px 0 0;
`;

export const CardInfo = styled.div`
  height: 6.6rem;
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1.25rem;

  background: var(--primaryShape);

  border: 1.18px solid var(--secondaryShape);
  border-radius: 0 0 20px 20px;

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
