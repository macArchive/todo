import { Heading, Text } from "@chakra-ui/layout";
import Link from "next/link";

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
        Why not read some of my blog posts <Link href="/blog">here.</Link>
      </Text>
    </>
  );
}
