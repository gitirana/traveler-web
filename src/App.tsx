import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import Home from './pages/Home/index';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
