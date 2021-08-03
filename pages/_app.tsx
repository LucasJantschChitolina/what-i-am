// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ColorModeScript } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import Header from '../src/components/header';

const config : ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex align="center" justify="center" direction="column" width="100vw" height="100vh" paddingTop="40px"  overflowY="hidden">
        <Header />
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
