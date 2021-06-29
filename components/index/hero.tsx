import { Heading, Link, Text } from "@chakra-ui/layout";
import NextLink from "next/link";

export default function Hero() {
  return (
    <>
      <Heading>Hi, I'm Mac Hooper</Heading>
      <Text>
        A Freelance Web Developer building fast, responsive and beautiful
        websites making use of cutting edge technology and perfect SEO
        techniques.
      </Text>
      <Text>
        Why not read some of my blog posts by
        <Link display={{ base: "none", sm: "inline" }} ml="4px">
          <NextLink href="/blog">clicking here</NextLink>
        </Link>
        <Link display={{ base: "inline", sm: "none" }} ml="4px">
          <NextLink href="/blog">tapping here</NextLink>
        </Link>
        .
      </Text>
    </>
  );
}
