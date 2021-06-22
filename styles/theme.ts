import {extendTheme, ThemeConfig} from '@chakra-ui/react'
import {Button, Input, Text} from './components'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

export const theme = extendTheme({
  fonts: {
    heading: 'system-ui',
    body: 'system-ui',
  },
  colors: {
    primary: {
      50: '#F2F2F2',
      100: '#DBDBDB',
      200: '#C4C4C4',
      300: '#ADADAD',
      400: '#969696',
      500: '#808080',
      600: '#666666',
      700: '#4D4D4D',
      800: '#333333',
      900: '#1A1A1A',
    },
    secondary: {
      50: '#F2F2F2',
      100: '#DBDBDB',
      200: '#C4C4C4',
      300: '#ADADAD',
      400: '#969696',
      500: '#808080',
      600: '#666666',
      700: '#4D4D4D',
      800: '#333333',
      900: '#1A1A1A',
    },
  },
  icons: {
    logo: {
      path: {},
      viewBox: {},
    },
  },
  styles: {
    global: {
      body: {
        maxW: '100vw',
        overflowX: 'hidden',
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "gray.800")(props)
      },
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
          cursor: 'pointer',
        },
      },
    },
  },
  components: {
    Button,
    Input,
    Text
  },
  config,
})
