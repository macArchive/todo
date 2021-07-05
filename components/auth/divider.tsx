import {
  Box,
  Divider,
  Flex,
  FlexProps,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

export default function DividerWithText(props: FlexProps) {
  const { children, ...flexProps } = props
  return (
    <Flex align='center' color='gray.300' {...flexProps}>
      <Box flex='1'>
        <Divider borderColor='currentcolor' />
      </Box>
      <Text
        as='span'
        px='3'
        align='center'
        color={useColorModeValue('gray.600', 'gray.400')}
        fontWeight='medium'>
        {children}
      </Text>
      <Box flex='1'>
        <Divider borderColor='gray.900' />
      </Box>
    </Flex>
  )
}
