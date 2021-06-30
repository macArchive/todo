import Hero from "@/comps/blog/hero";
import List from "@/comps/blog/list";
import Tags from "@/comps/blog/tags";
import Cta from "@/comps/ui/cta";
import Layout from "@/layout/index";
import { getAllPosts } from "@/lib/api";
import { Stack } from "@chakra-ui/react";
import { AiFillYoutube } from "react-icons/ai";

export default function Blog({ allPosts }) {
  return (
    <Layout
      title="Blog"
      description="A collection of blog posts by freelance developer Mac Hooper, regarding topics such as Technology, Music, Gaming, Fitness and More."
    >
      <Stack spacing={6}>
        <Hero />
        <List posts={allPosts} />
        <Tags />
        <Cta
          heading="Interested in More Content?!"
          text="Check out my YouTube channel for more technology and programming content."
          button="Click Here"
          leftIcon={<AiFillYoutube fontSize={24} />}
          url="https://www.youtube.com/channel/UCnTtBprmR4yTz3ieMSuWzlA"
        />
      </Stack>
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
