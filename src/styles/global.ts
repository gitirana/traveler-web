import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	color: var(--text);
	background: var(--background);
	font-family: 'Heebo', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
	font-family: 'Barlow', sans-serif;
}

body, input, textarea, button {
  font-family: 400 1rem 'Heebo', sans-serif;
}

button {
  cursor: pointer;
}

:root {
	--blue: ${props => props.theme.colors.blue};
	--orange: ${props => props.theme.colors.orange};
	--title: ${props => props.theme.colors.title};
	--text: ${props => props.theme.colors.text};
	--subText: ${props => props.theme.colors.subText};
	--primaryShape: ${props => props.theme.colors.primaryShape};
	--secondaryShape: ${props => props.theme.colors.secundaryShape};
	--red: ${props => props.theme.colors.red};
	--green: ${props => props.theme.colors.green};
	--light-blue: ${props => props.theme.colors.lightBlue};
	--background: ${props => props.theme.colors.background};
}
`;
