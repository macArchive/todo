import { Heading, Stack, Text } from "@chakra-ui/react";
export default function Hero() {
  return (
    <Stack align="center" maxW="85vw" spacing={3}>
      <Heading mx="auto" maxW="70vw">
        Welcome to my blog
      </Heading>
      <Text mx="auto" maxW="70vw">
        Here you can find a variety of posts covering Technology, Programming &
        Development, Music, Health and more.
      </Text>
    </Stack>
  );
}
