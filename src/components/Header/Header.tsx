import React, { useCallback, useState } from 'react';

import { FiSearch, FiX } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { AccessButton, Container, Input, Image } from './styles';

const Header: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!document.getElementById('city'));
  }, []);

  return (
    <Container>
      <Image src={logo} />

      <Input isFilled={isFilled} isFocused={isFocused}>
        <FiSearch size={20} />

        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          type="text"
          id="city"
          placeholder="Qual cidade você quer encontrar"
        />

        {isFilled && <FiX size={20} />}
      </Input>

      <AccessButton>
        <button type="button" disabled>
          Acesso restrito
        </button>
      </AccessButton>
    </Container>
  );
};

export default Header;
function useField(
  name: void,
): { fieldName: any; defaultValue: any; registerField: any } {
  throw new Error('Function not implemented.');
}
