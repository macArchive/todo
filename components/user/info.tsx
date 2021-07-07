import { Flex, Heading, Stack, Text } from '@chakra-ui/react'

// TODO: Add locale, theme and more
type UserProps = {
  email: string
}

export default function UserInfo({ email }: UserProps) {
  return (
    <Stack w='80vw' direction='column' align='start' spacing={4} mt={16}>
      <Flex w='80vw' d='column' align='start'>
        <Heading size='md' mb='3'>
          Email Address
        </Heading>
        <Text>{email}</Text>
      </Flex>
    </Stack>
  )
}
