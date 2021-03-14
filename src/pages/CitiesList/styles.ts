import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 10rem;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;

  h1 {
    font-size: 2.875rem;
    font-weight: 600;
    color: var(--title);
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.625rem;

  border-bottom: 1px solid var(--secondaryShape);

  p {
    color: var(--text);
    font-size: 1.625rem;
    font-family: Barlow;
    margin-bottom: 1.125rem;

    & + p {
      margin-left: 2rem;
    }

    svg {
      color: var(--orange);
      margin-left: 0.5rem;
      cursor: pointer;
    }
  }

  .active {
    font-weight: 600;
    color: var(--title);
  }
`;

export const ContainerList = styled.div`
  display: flex;
  margin-top: 2.5rem;

  max-width: 1920px;

  div {
    cursor: pointer;
  }

  div + div {
    margin-left: 2.2rem;
  }
`;
