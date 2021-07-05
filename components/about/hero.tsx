import { Heading, Stack, Text } from '@chakra-ui/react'

export default function Hero() {
  return (
    <Stack as='section' direction='column' align='center'>
      <Text color='primary.500'>WHY TODO?</Text>
      <Heading w='80vw'>
        I know what you are thinking, another todo application...
      </Heading>
      <Text>
        This todo app is designed to increase your productivity, with a minimal
        interface that is easy to use and understand. A perfect no frills todo
        application.
      </Text>
    </Stack>
  )
}
