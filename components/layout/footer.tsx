import { Box, Stack, Text } from '@chakra-ui/layout'
import Logo from './logo'
import SocialIcons from './social'

export default function Footer() {
  return (
    <Box as='footer' role='contentinfo' mx='auto'>
      <Stack direction='column'>
        <Stack
          direction='row'
          justify='space-between'
          align='center'
          py={8}
          px={4}>
          <Logo />
          <SocialIcons />
        </Stack>
        <Text fontSize='sm' pb={2} align='center'>
          &copy; {new Date().getFullYear()}{' '}
          <a href='https://machooper.tech'>Mac</a>, All Rights Reserved
        </Text>
      </Stack>
    </Box>
  )
}
