import { Box, Text } from '@chakra-ui/react'

export type ItemProps = {
  id: number
  text: string
  complete: boolean
}

export default function Item({ text }: ItemProps) {
  return (
    <Box
      w='75vw'
      color='gray.100'
      d='flex'
      bg='primary.900'
      borderRadius='md'
      p={6}
      transition='.3s ease'
      _hover={{
        background: 'primary.800',
        p: 7,
        cursor: 'pointer',
        transition: '.3s ease'
      }}>
      <Text textAlign='left'>{text}</Text>
    </Box>
  )
}
