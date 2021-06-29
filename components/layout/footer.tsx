import { Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Text fontSize="sm" py={2} w="100vw" align="center">
      &copy; {new Date().getFullYear()}{" "}
      <Link href="https://machooper.tech">Mac</Link>, All Rights Reserved
    </Text>
  );
}
