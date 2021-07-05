import { Heading, HStack, Img } from '@chakra-ui/react'
import Link from 'next/link'
import { siteTitle } from 'pages/_app'

export default function Logo() {
  return (
    <Link href='/' passHref>
      <HStack spacing={1} cursor='pointer'>
        <Img src='/logo.svg' alt='Todo Logo Image' boxSize='30px' />
        <Heading as='h1' size='md'>
          {siteTitle}
        </Heading>
      </HStack>
    </Link>
  )
}
