import {Img, Heading} from "@chakra-ui/react"
import {siteTitle} from "pages/_app"


export default function Logo() {
  return (
    <>
      <Img src='/logo.svg' alt='Todo Logo Image' boxSize={60} />
      <Heading size='md'>{siteTitle}</Heading>
    </>
  )
}
