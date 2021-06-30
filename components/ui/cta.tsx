import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Cta({ heading, text, button, url }) {
  return (
    <Stack py={12} position="relative">
      <Stack
        textAlign="center"
        align="center"
        _after={{
          content: '""',
          width: "100%",
          height: "90%",
          position: "absolute",
          background: "secondary.200",
          zIndex: -1,
          top: 0,
          transformOrigin: "left top",
          transform: "skewY(3deg)",
          overflowX: "hidden",
        }}
        _before={{
          content: '""',
          width: "100%",
          height: "90%",
          position: "absolute",
          background: "secondary.200",
          zIndex: -1,
          top: 0,
          transformOrigin: "left bottom",
          transform: "skewY(3deg)",
          overflowX: "hidden",
        }}
        spacing={4}
      >
        <Heading>{heading}</Heading>
        <Text textAlign="center">{text}</Text>
        <Link href={url} passHref>
          <Button variant="solid" maxW="25%">
            {button}
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
