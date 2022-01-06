import { ChakraProvider, ColorModeProvider, Heading } from '@chakra-ui/react';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import NavBar from '../components/NavBar';

import theme from '../theme';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<ColorModeProvider
				options={{
					initialColorMode: 'dark',
					useSystemColorMode: false
				}}
			>
				<NavBar/>
				<Component {...pageProps} />
			</ColorModeProvider>
		</ChakraProvider>
	);
}

export default MyApp;
