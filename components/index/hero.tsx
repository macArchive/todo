import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Hero() {
  return (
    <Stack
      as='section'
      w='100vw'
      direction={{ sm: 'column', md: 'row' }}
      justify='center'
      align='center'
      mb='7.2rem'>
      <Flex
        w={['100vw', '720px']}
        mx='auto'
        direction='column'
        align={['center', 'start']}>
        <Heading w={['80vw', '70vw']} size='3xl' fontWeight='extrabold'>
          Welcome to your new favourite
          <Heading
            as='h1'
            size='3xl'
            bgGradient='linear(to-l,#7928CA,#FF0080)'
            bgClip='text'>
            todo app.
          </Heading>
        </Heading>
        <Text my={8} w={{ base: 'auto', sm: '500px' }}>
          A modern and minimal approach to getting the things you need done,
          well done.
        </Text>
        <ButtonGroup spacing={4} mt={2}>
          <Link href='/about' passHref>
            <Button variant='solid'>Learn More</Button>
          </Link>
          <Link href='/signup' passHref>
            <Button
              variant='solid'
              colorScheme='primary'
              rightIcon={<ArrowForwardIcon />}>
              Get Started
            </Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </Stack>
  )
}
