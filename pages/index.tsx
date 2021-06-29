import Layout from "@/layout/index";
import { Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <Layout
      title="Home"
      description="A Freelance Web Developer building fast, responsive and beautiful websites making use of cutting edge technology and perfect SEO techniques."
    >
      <Heading alignSelf="flex-start">Hi, I'm Mac Hooper</Heading>
      <Text>
        A Freelance Web Developer building fast, responsive and beautiful
        websites making use of cutting edge technology and perfect SEO
        techniques.
      </Text>
      <Text>
        Why not read some of my blog posts by
        <Link display={{ base: "none", md: "inline" }} ml="4px">
          <NextLink href="/blog">clicking here</NextLink>
        </Link>
        <Link display={{ base: "inline", md: "none" }} ml="4px">
          <NextLink href="/blog">tapping here</NextLink>
        </Link>
        .
      </Text>
    </Layout>
  );
}
