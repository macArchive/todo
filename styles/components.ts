export const Button = {
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

export const Input = {
  baseStyle: {
    errorBorderColor: "red.500",
    focusBorderColor: "primary.500",
    bg: "grey.200",
    _placeholder: {
      color: "red.600"
    }
  }
}

export const Text = {
  baseStyle: {
    w: "80vw",
    textAlign: {base: "center", md: "left"}
  }
}
