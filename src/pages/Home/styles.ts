import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem 0 2rem;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  height: 2rem;
`;

export const Button = styled.button`
  height: 3rem;
  padding: 0 1.5rem;

  border-radius: 10px;
  border: none;

  color: var(--blue);
  font-weight: 500;

  background: var(--light-blue);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex: 1;

  margin-top: 1rem;
  overflow: hidden;
`;

export const Present = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  flex: 2;

  max-width: 20.5rem;

  > h1 {
    line-height: 5rem;

    font-size: 5rem;
    font-weight: 600;
    font-family: Barlow;

    color: var(--title);
  }

  > p {
    color: var(--text);

    font-size: 1.25rem;
    margin-top: 2.5rem;
  }

  > button {
    margin-top: 3rem;

    height: 4rem;
    padding: 0 1.5rem;

    border-radius: 10px;
    border: none;

    font-weight: 500;
    font-size: 1.125rem;
    color: var(--primaryShape);

    background: var(--orange);
  }
`;

export const Cities = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex: 3;

  justify-content: flex-end;
`;

export const FirstList = styled.div`
  margin-right: 2rem;

  > div {
    margin-bottom: 2rem;
  }
`;

export const SecondList = styled.div`
  margin-top: 4.75rem;

  > div {
    margin-bottom: 2rem;
  }
`;
