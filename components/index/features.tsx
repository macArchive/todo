import { Box, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import {
  FcCommandLine,
  FcMultipleDevices,
  FcPrivacy,
  FcTimeline
} from 'react-icons/fc'
import Feature from './feature'

export default function Features() {
  return (
    <Stack as='section' direction='column' align='center'>
      <Heading>Features</Heading>
      <Text my={6} textAlign='center'>
        Take a look at some of the incredible features built into todo.
      </Text>
      <Box as='section' maxW='5xl' mx='auto' py='8'>
        <SimpleGrid
          maxW='80vw'
          columns={{ base: 1, md: 2 }}
          spacingX='10'
          spacingY={{ base: '8', md: '14' }}>
          <Feature title='Secured for peace of mind' icon={<FcPrivacy />}>
            Built with authentication and sign in from your favourite providers,
            including Github, Facebook, Google and more. You can rest assured
            that your precious todo list items aren&apos;t spied upon by
            anybody.
          </Feature>
          <Feature title='Always up to date' icon={<FcTimeline />}>
            Built on the latest technologies, your todo app will always be
            blazing fast and responsive, ensuring you get down your neat little
            ideas as soon as possible.
          </Feature>
          <Feature
            title='Support for multiple devices: coming soon'
            icon={<FcMultipleDevices />}>
            With an iOS, iPadOS and Android app in the works, this todo
            application can find it&apos;s way into all of the devices you use
            meaning your tasks will always be with you.
          </Feature>
          <Feature title='Open source' icon={<FcCommandLine />}>
            Not owned by a large corporation, meaning you can relax about your
            data, or if you fancy take a dive into the source code and maybe
            open a pull request with a feature idea or request.
          </Feature>
        </SimpleGrid>
      </Box>
    </Stack>
  )
}
