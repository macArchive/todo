import { Divider, Heading, List, ListItem, Stack, Text } from '@chakra-ui/react'

export default function Hero() {
  return (
    <Stack as='section' direction='column' align='center'>
      <Text color='primary.500'>WHAT DOES THIS MEAN?</Text>
      <List spacing={4}>
        <ListItem>
          <Heading>Easy</Heading>
          <Divider mt={1} mb={2} />
          <Text>Maintaining your todo list should be freeing.</Text>
        </ListItem>
        <ListItem>
          <Heading>Accessible</Heading>
          <Divider mt={1} mb={2} />
          <Text>Able to be used by anyone with minimal effort.</Text>
        </ListItem>
        <ListItem>
          <Heading>Attractive</Heading>
          <Divider mt={1} mb={2} />
          <Text>easy on the eyes and customisable for the individual.</Text>
        </ListItem>
      </List>
    </Stack>
  )
}
