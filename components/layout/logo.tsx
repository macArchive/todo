import Link from 'next/link'
import {HStack, Img, Heading} from "@chakra-ui/react"
import {siteTitle} from "pages/_app"

export default function Logo() {
  return (
    <Link href='/'>
      <HStack spacing={1}>
        <Img src='/logo.svg' alt='Todo Logo Image' boxSize='30px' />
        <Heading as='h1' size='md'>
          {siteTitle}
        </Heading>
      </HStack>
    </Link>
  )
}
