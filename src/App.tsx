import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import Card from './components/Card/Card';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <h1>Hello, Travellers!</h1>
        <p>Hello, Travellers!</p>
      </div>

      <Card />
    </ThemeProvider>
  );
}

export default App;
