import { firebaseClient } from '@/lib/firebaseClient'
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Form({ signin, onClose }) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const toast = useToast()
  const router = useRouter()
  async function signUp(e) {
    e.preventDefault()
    await firebaseClient.auth().createUserWithEmailAndPassword(email, pass)
    router.push('/')
  }
  async function signIn(e) {
    e.preventDefault()
    await firebaseClient.auth().signInWithEmailAndPassword(email, pass)
    router.push('/')
    onClose()
  }
  async function passwordReset(e) {
    e.preventDefault()
    if (!email) {
      toast({
        title: 'Please enter your email.',
        description: 'So we know where to send the reset email.',
        status: 'error',
        duration: 4000,
        isClosable: true
      })
    } else {
      await firebaseClient.auth().sendPasswordResetEmail(email)
      toast({
        title: 'Reset email sent.',
        description: 'Keep an eye on your inbox.',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
    }
  }
  return (
    <chakra.form onSubmit={signin ? signIn : signUp}>
      <Stack spacing='6'>
        <FormControl id='email'>
          <FormLabel>Email Address</FormLabel>
          <Input
            name='email'
            type='email'
            autComplete='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id='password'>
          <FormLabel>Password</FormLabel>

          <Input
            name='password'
            type='password'
            autoComplete='current-password'
            value={pass}
            onChange={e => setPass(e.target.value)}
            required
          />
        </FormControl>
        <Button type='submit' colorscheme='primary' size='lg' fontSize='md'>
          {signin ? 'Sign in' : 'Sign up'}
        </Button>
        <Button type='submit' variant='link' onClick={passwordReset}>
          {signin ? 'Forgot your password?' : ''}
        </Button>
      </Stack>
    </chakra.form>
  )
}
