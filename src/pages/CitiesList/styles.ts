import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem 0 2rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 540px) {
    padding: 1.5rem 0 0 0;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div``;
