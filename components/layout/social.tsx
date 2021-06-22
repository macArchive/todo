import {ButtonGroup, IconButton} from "@chakra-ui/core"
import {Github} from "react-icons/fi"

export default function SocialIcons() {
  return (
    <ButtonGroup spacing={1}>
      <IconButton
        as='a'
        href='https://github.com/machooper'
        aria-label='Github'
        icon={<Github size='20px' />}
        variant='link'
      />
    </ButtonGroup>
  )
}
