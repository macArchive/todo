import Logo from "./logo";
import { HStack, ButtonGroup, Button } from "@chakra-ui/react";

export default function Header() {
  return (
    <HStack
      as="header"
      w="100vw"
      justify="space-between"
      align="center"
      py={2}
      px={4}
    >
      <Logo />
      <ButtonGroup spacing={2}>
        <Button variant="link">Sign In</Button>
        <Button variant="solid">Sign Up</Button>
      </ButtonGroup>
    </HStack>
  );
}
