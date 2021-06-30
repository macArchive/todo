import { Heading, Stack } from "@chakra-ui/react";
import { FcTodoList } from "react-icons/fc";
import { GiSandSnake } from "react-icons/gi";
import { IoLogoGameControllerA } from "react-icons/io";
import Item from "./item";

export default function Work() {
  return (
    <>
      <Heading size="lg">Previous Work</Heading>
      <Stack>
        <Item
          url="https://todo-macasmac.vercel.app/"
          icon={<FcTodoList fontSize="2.5rem" />}
          heading="Todo"
          text="A full stack todo application built with Next.js and Google Firebase."
        />
        <Item
          url="https://machooper.github.io/jsplatform/"
          icon={<IoLogoGameControllerA fontSize="2.5rem" />}
          heading="JSPlatform"
          text="A simple yet fun platform game built in Javascript using Phaser."
        />
        <Item
          url="https://starserpentrecords.com"
          icon={<GiSandSnake fontSize="2.5rem" />}
          heading="Star Serpent Records"
          text="A business page for a record label, with a CMS for content editing."
        />
      </Stack>
    </>
  );
}
