import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:root {
	--blue: ${props => props.theme.colors.blue};
	--orange: ${props => props.theme.colors.orange};
	--title: ${props => props.theme.colors.title};
	--text: ${props => props.theme.colors.text};
	--subText: ${props => props.theme.colors.subText};
	--primaryShape: ${props => props.theme.colors.primaryShape};
	--secundaryShape: ${props => props.theme.colors.secundaryShape};
	--red: ${props => props.theme.colors.red};
	--green: ${props => props.theme.colors.green};
	--lightBlue: ${props => props.theme.colors.lightBlue};
	--background: ${props => props.theme.colors.background};
}
`