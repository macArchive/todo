import Account from '@/comps/user/account'
import { useAuth } from '@/lib/auth'
import { Button, ButtonGroup, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import Logo from './logo'

export default function Header({ onOpen }) {
  const token = useAuth()
  const user = token.user
  return (
    <HStack
      as='header'
      w='100vw'
      justify='space-between'
      align='center'
      py={8}
      px={6}
      mb={16}>
      <Logo />
      <ButtonGroup spacing={4} size='sm'>
        <>
          {!user && (
            <>
              <Button variant='link' textColor='gray.800' onClick={onOpen}>
                Sign in
              </Button>
              <Link href='/signup' passHref>
                <Button variant='solid'>Sign up</Button>
              </Link>
            </>
          )}
          {user && (
            <>
              <Link href={`/todos/${user.uid}`} passHref>
                <Button variant='link' textColor='gray.800'>
                  My List
                </Button>
              </Link>
              <Account img={user.photoURL} email={user.email} />
            </>
          )}
        </>
      </ButtonGroup>
    </HStack>
  )
}
