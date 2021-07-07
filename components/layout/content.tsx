import { Flex } from '@chakra-ui/react'

export default function Content({ children }) {
  return (
    <Flex minH='100vh' direction='column' align='center'>
      <Flex
        maxW={{ sm: 'auto', md: 960, xl: '80vw' }}
        direction='column'
        align='center'
        grow={1}
        shrink={0}
        basis='auto'
        margin={{ sm: 'auto', md: '0 auto' }}>
        {children}
      </Flex>
    </Flex>
  )
}
