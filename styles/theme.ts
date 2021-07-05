import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { Button, Heading, Input, Text } from './components'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

export const theme = extendTheme({
  fonts: {
    heading: 'system-ui',
    body: 'Raleway'
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
      900: '#1A1A1A'
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
      900: '#1A1A1A'
    }
  },
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        width: '100vw',
        mH: '100vh',
        bg: 'white.200',
        color: 'gray.900',
        overflowX: 'hidden'
      },
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
          cursor: 'pointer'
        }
      }
    }
  },
  components: {
    Button,
    Heading,
    Text,
    Input
  },
  config
})
