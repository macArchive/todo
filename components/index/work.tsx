import { Heading, Stack } from "@chakra-ui/react";
import { FcTodoList } from "react-icons/fc";
import { IoLogoGameControllerA } from "react-icons/io";
import Item from "./item";

export default function Work() {
  return (
    <>
      <Heading size="lg">Previous Work</Heading>
      <Stack>
        <Item
          url="https://todo.net"
          icon={<FcTodoList fontSize="2.5rem" />}
          heading="Todo"
          text="A full stack todo application built with Next.js and Google Firebase."
        />
        <Item
          url="https://jsplatform.machooper.github.io"
          icon={<IoLogoGameControllerA fontSize="2.5rem" />}
          heading="JSPlatform"
          text="A simple yet fun platform game built in Javascript using Phaser."
        />
      </Stack>
    </>
  );
}
