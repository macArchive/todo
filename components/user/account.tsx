import {
  Avatar,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Account({ img, email }) {
  const router = useRouter()
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar src={img} size='md' />
      </PopoverTrigger>
      <PopoverContent maxW='250px' mr={2}>
        <PopoverArrow />
        <PopoverHeader>{email}</PopoverHeader>
        <PopoverBody cursor='pointer'>
          <List>
            <ListItem>
              <a>Sign out</a>
            </ListItem>
          </List>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
