import styled, { css } from 'styled-components';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3rem 10rem;

  width: 100%;
  height: 6rem;

  border-bottom: 1.18px solid var(--secondaryShape);
  background: var(--primaryShape);
`;

export const Image = styled.img`
  width: 7.8rem;
  height: 1.625rem;
`;

export const Input = styled.div<InputProps>`
  display: flex;
  align-items: center;
  position: relative;

  input {
    width: 26rem;
    height: 3rem;
    padding: 1rem 3.25rem;

    background: var(--background);
    border-radius: 10px;
    border: 1px solid var(--secondaryShape);

    font-size: 1rem;
    outline: none;
    color: var(--text);
  }

  svg:first-child {
    position: absolute;
    bottom: 0.875rem;
    left: 1rem;

    color: var(--text);

    ${props =>
      props.isFilled &&
      css`
        color: var(--orange);
      `}
  }

  svg:last-child {
    position: absolute;
    right: 0.75rem;
    color: var(--text);
  }
`;

export const AccessButton = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    width: 10.875rem;
    border-radius: 10px;
    border: none;
    background: var(--light-blue);

    color: var(--blue);
    font-weight: 600;
    font-size: 1rem;

    cursor: none;
  }
`;
