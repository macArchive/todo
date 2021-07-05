import { Box, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'

interface FeatureProps {
  title: string
  children: any
  icon: any
}

export default function Feature(props: FeatureProps) {
  const { title, children, icon } = props
  return (
    <Stack spacing={{ base: '3', md: '6' }} direction='column'>
      <Box fontSize='6xl'>{icon}</Box>
      <Stack spacing='1'>
        <Text fontWeight='extrabold' fontsize='lg' textAlign='left'>
          {title}
        </Text>
        <Box color={mode('gray.600', 'gray.400')}>{children}</Box>
      </Stack>
    </Stack>
  )
}
