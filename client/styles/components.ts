// * IMPORTANT: When starting a new project defined default button and other reusable component styles here
export const Button = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'base'
  },
  variants: {
    solid: {
      bg: 'primary.900',
      color: 'gray.50',
      _hover: {
        bg: 'primary.700'
      }
    }
  }
}

export const Heading = {
  baseStyle: {
    textAlign: { base: 'center', md: 'left' }
  }
}
export const Text = {
  baseStyle: {
    w: '80vw',
    textAlign: { base: 'center', md: 'left' }
  }
}
export const Input = {
  baseStyle: {
    errorBorderColor: 'red.500',
    focusBorderColor: 'primary.500',
    bg: 'grey.200',
    _placeholder: {
      color: 'red.600'
    }
  }
}
