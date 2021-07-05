import Logo from '@/layout/logo'
import {
  Box,
  Heading,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useColorModeValue
} from '@chakra-ui/react'
import Form from './form'
import SocialSignin from './social'

export default function Auth({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Logo />
          <Heading textAlign='center' size='xl' fontWeight='extrabold' mt={8}>
            Sign in to your account
          </Heading>
        </ModalHeader>
        <Box
          bg={useColorModeValue('gray.50', 'gray.700')}
          py='8'
          px={4}
          shadow='base'
          rounded='lg'>
          <Form signin onClose={onClose} />
          <SocialSignin />
        </Box>
      </ModalContent>
    </Modal>
  )
}
