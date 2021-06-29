import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Stack as="section" id="contact">
      <Heading size="lg">Contact</Heading>
      <form>
        <Stack spacing={4} flexDirection="column" align="center" mb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" required />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" required />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea required resize="none" />
          </FormControl>
          <Button w="100%" type="submit">
            Send
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
