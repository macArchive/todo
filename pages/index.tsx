import {Button, useColorMode, useColorModeValue} from "@chakra-ui/react"
export default function Home() {
  const {colorMode, toggleColorMode} = useColorMode()
  return <h1>Welcome to next</h1>
}
