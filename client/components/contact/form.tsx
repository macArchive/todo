import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea
} from '@chakra-ui/react'

export default function ContactForm() {
  return (
    <Stack w='80vw' spacing='10'>
      <FormControl id='name'>
        <FormLabel>Name</FormLabel>
        <Input
          variant='filled'
          name='name'
          placeholder='Your Name'
          isRequired
          bg='gray.200'
          _placeholder={{
            color: 'gray.500'
          }}
        />
      </FormControl>
      <FormControl id='email'>
        <FormLabel>Email Address</FormLabel>
        <Input
          variant='filled'
          name='email'
          placeholder='email@provider.com'
          isRequired
          bg='gray.200'
          _placeholder={{
            color: 'gray.500'
          }}
        />
      </FormControl>
      <FormControl id='subject'>
        <FormLabel>Subject</FormLabel>
        <Input
          variant='filled'
          name='subject'
          placeholder='What would you like to discuss?'
          isRequired
          bg='gray.200'
          _placeholder={{
            color: 'gray.500'
          }}
        />
      </FormControl>
      <FormControl id='subject'>
        <FormLabel>Message</FormLabel>
        <Textarea
          variant='filled'
          name='message'
          placeholder='Type away...'
          resize='none'
          isRequired
          bg='gray.200'
          _placeholder={{
            color: 'gray.500'
          }}
        />
      </FormControl>
      <FormControl id='submit' textAlign='center'>
        <Button type='submit'>Send</Button>
      </FormControl>
    </Stack>
  )
}
