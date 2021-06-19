import {extendTheme} from "@chakra-ui/react"

const typography = {
  fonts: {
    head: '"Roboto", sans-serif',
    body: '"Roboto", sans-serif'
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  sizes: ["16px", "18px", "20px"],
  lineheight: 1.6
}

const colors = {
  white: {100: "#fefefe"},
  black: {100: "#1c1c1c", 200: "#1a1a1a", 300: "#0d0d0d"},
  grey: {100: "#eee", 200: "#767676"},
  primary: {100: "#1c1c1c", 200: "#1a1a1a", 300: "#0d0d0d"},
  secondary: {100: "#ccc", 200: "#a8a8a8", 300: "#8a8a8a"}
}

const theme = extendTheme({typography, colors})

export default theme
