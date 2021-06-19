import {FC} from "react"
import {Stack} from "@chakra-ui/react"

interface ContentProps {
  children: any
}

const Content: FC<ContentProps> = ({children}) => {
  return (
    <Stack minH='100vh' direction='column' align='center'>
      <Stack
        maxW={{sm: "auto", md: 960, xl: "80vw"}}
        direction='column'
        align='center'
        grow={1}
        shrink={0}
        basis='auto'
      />
    </Stack>
  )
}
