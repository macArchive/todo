import {Img, Heading} from "@chakra-ui/react"

export default function Logo() {
  return (
    <>
      <Img src='/logo.svg' alt='Todo Logo Image' boxSize={60} />
      <Heading size='md'>Todo</Heading>
    </>
  )
}
