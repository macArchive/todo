import { Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function List({ posts }) {
  return (
    <Stack align="center" pt={4} spacing={4}>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <Stack
            direction="row"
            justify="space-around"
            align="center"
            w="85vw"
            border="1px"
            borderColor="gray.200"
            shadow="md"
            p=".5rem"
          >
            <Stack w="80%">
              <Heading fontSize="20px">{post.title}</Heading>
              <Text maxW="100%" noOfLines={2}>
                {post.excerpt}
              </Text>
            </Stack>
          </Stack>
        </Link>
      ))}
    </Stack>
  );
}
