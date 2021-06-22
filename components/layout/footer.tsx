import Logo from "./logo";
import SocialIcons from "./social";
import { Stack } from "@chakra-ui/layout";

export default function Footer() {
  return (
    <Stack as="footer" direction="column">
      <Stack
        w="100vw"
        direction="row"
        justify="space-between"
        align="center"
        py={2}
        px={4}
      >
        <Logo />
        <SocialIcons />
      </Stack>
    </Stack>
  );
}
