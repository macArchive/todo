import Link from 'next/link'
import {HStack, Icon, Heading} from "@chakra-ui/core"
import {siteTitle} from "pages/_app"

export default function Logo() {
  return (
    <Link href='/'>
      <HStack spacing={1}>
        <Icon Name='Logo' size='32px'/>
        <Heading as='h1' size='md'>
          {siteTitle}
        </Heading>
      </HStack>
    </Link>
  )
}
