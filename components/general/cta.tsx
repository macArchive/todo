import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Cta() {
  return (
    <Box as='section'>
      <Flex
        direction='column'
        align='center'
        textAlign='center'
        mx='auto'
        px={{ base: '6', lg: '8' }}
        py={{ base: '4', sm: '20' }}>
        <Heading as='h2' size='3xl' fontWeight='extrabold'>
          Need to Contact Us?
        </Heading>
        <Text maxW='600px' fontSize='lg' mt='4' align='center'>
          You can contact us regarding working on this project, new feature
          requests and more. Click the button below to get in touch.
        </Text>
        <Link href='/contact' passHref>
          <Button size='lg' fontWeight='bold' colorScheme='primary' mt='8'>
            Say Hello
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}
