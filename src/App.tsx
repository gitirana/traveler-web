import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import Home from './pages/Home/index';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import CitiesList from './pages/CitiesList';

const App: React.FC = () => {
  const [theme] = usePersistedState<DefaultTheme>('theme', light);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CitiesList />
    </ThemeProvider>
  );
};

export default App;
