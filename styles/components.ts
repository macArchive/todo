// * IMPORTANT: When starting a new project defined default button and other reusable component styles here
export const Button = {
  fonts: {
    heading: "'system-ui', sans-serif",
    body: "'system-ui', sans-serif"
  },
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base"
  },
  variants: {
    solid: {
      bg: "primary.900",
      color: "gray.50",
      _hover: {
        bg: "primary.700"
      }
    }
  }
}
