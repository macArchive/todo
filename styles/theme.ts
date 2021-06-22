import {extendTheme, ThemeConfig} from "@chakra-ui/core"
import {Button, Input} from "./components"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true
}

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#F2F2F2",
      100: "#DBDBDB",
      200: "#C4C4C4",
      300: "#ADADAD",
      400: "#969696",
      500: "#808080",
      600: "#666666",
      700: "#4D4D4D",
      800: "#333333",
      900: "#1A1A1A"
    },
    secondary: {
      50: "#F2F2F2",
      100: "#DBDBDB",
      200: "#C4C4C4",
      300: "#ADADAD",
      400: "#969696",
      500: "#808080",
      600: "#666666",
      700: "#4D4D4D",
      800: "#333333",
      900: "#1A1A1A"
    }
  },
  icons: {
   logo: {
     path: {},
     viewBox: {}
   }
  }
  styles: {
    global: {
      body: {
        bg: "white.200",
        color: "gray.800"
      },
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
          cursor: "pointer"
        }
      }
    }
  },
  components: {
    Button,
    Input
  },
  config
})
