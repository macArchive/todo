import Hero from "@/comps/index/hero";
import Work from "@/comps/index/work";
import Layout from "@/layout/index";
import { Stack } from "@chakra-ui/react";
export default function Home() {
  return (
    <Layout
      title="Home"
      description="A Freelance Web Developer building fast, responsive and beautiful websites making use of cutting edge technology and perfect SEO techniques."
    >
      <Stack spacing={4}>
        <Hero />
        <Work />
      </Stack>
    </Layout>
  );
}
