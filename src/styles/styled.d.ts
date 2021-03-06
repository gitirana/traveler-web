import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      blue: string;
      orange: string;
      title: string;
      text: string;
      subText: string;
      primaryShape: string;
      secundaryShape: string;
      red: string;
      green: string;
      lightBlue: string;
      background: string;
    };
  }
}
