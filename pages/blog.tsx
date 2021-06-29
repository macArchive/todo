import Layout from "@/layout/index";
import { getAllPosts } from "@/lib/api";
import { Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Blog({ allPosts }) {
  console.log(allPosts);
  return (
    <Layout
      title="Blog"
      description="A collection of blog posts by freelance developer Mac Hooper, regarding topics such as Technology, Music, Gaming, Fitness and More."
    >
      <Heading size="lg">Welcome to my blog</Heading>
      <Text>
        Here you can find a variety of posts covering Technology, Programming &
        Development, Music, Health and more.
      </Text>
      {allPosts.map((post) => (
        <Link href={`/blog/${post.slug}`} passHref>
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
              <Text maxW="100%" isTruncated>
                {post.excerpt}
              </Text>
            </Stack>
          </Stack>
        </Link>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
