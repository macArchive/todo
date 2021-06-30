import { Tag, Wrap, WrapItem } from "@chakra-ui/react";

export default function Tags() {
  return (
    <Wrap spacing={4} justify="center" pt={9}>
      <WrapItem>
        <Tag
          size="md"
          variant="solid"
          bg="primary.300"
          color="white"
          align="center"
          _hover={{
            bg: "primary.600",
          }}
        >
          Technology
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag
          size="md"
          variant="solid"
          bg="primary.300"
          color="white"
          align="center"
          _hover={{
            bg: "primary.600",
          }}
        >
          Programming
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag
          size="md"
          variant="solid"
          bg="primary.300"
          color="white"
          align="center"
          _hover={{
            bg: "primary.600",
          }}
        >
          Web Development
        </Tag>
      </WrapItem>
    </Wrap>
  );
}
