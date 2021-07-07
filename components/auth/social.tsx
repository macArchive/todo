import DividerWithText from './divider'
import { SimpleGrid, Button, VisuallyHidden } from '@chakra-ui/react'
import { FaFacebook, FaSlack, FaGoogle, FaApple } from 'react-icons/fa'
export default function SocialSignin() {
  return (
    <>
      <DividerWithText mt={6}>or continue with</DividerWithText>
      <SimpleGrid mt='6' column={4} spacing={3}>
        <Button color='currentcolor' variant='outline'>
          <VisuallyHidden>Login with Apple</VisuallyHidden>
          <FaApple />
        </Button>
        <Button color='currentcolor' variant='outline'>
          <VisuallyHidden>Login with Google</VisuallyHidden>
          <FaGoogle />
        </Button>
        <Button color='currentcolor' variant='outline'>
          <VisuallyHidden>Login with Slack</VisuallyHidden>
          <FaSlack />
        </Button>
        <Button color='currentcolor' variant='outline'>
          <VisuallyHidden>Login with Facebook</VisuallyHidden>
          <FaFacebook />
        </Button>
      </SimpleGrid>
    </>
  )
}
