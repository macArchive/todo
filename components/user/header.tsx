import {
  Avatar,
  Heading,
  Skeleton,
  SkeletonCircle,
  Stack
} from '@chakra-ui/react'

type User = {
  id: number
  username: string
  img: string
}

export default function UserHeader({ username, img }: User) {
  if (!username) {
    return (
      <Stack direction='column' align='center' spacing={4}>
        <SkeletonCircle boxSize='150px'>
          <Avatar src={img} boxSize='150px' />
        </SkeletonCircle>
        <Skeleton minW='200px'>
          <Heading>username</Heading>
        </Skeleton>
      </Stack>
    )
  } else {
    return (
      <Stack direction='column' align='center' spacing={4}>
        <Avatar src={img} size='4xl' />
        <Heading>{username}</Heading>
      </Stack>
    )
  }
}
