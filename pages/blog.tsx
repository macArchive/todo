import Layout from "@/layout/index";
import { getAllPosts } from "@/lib/api";
import { Heading, Text } from "@chakra-ui/react";

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
