import {AppProps} from 'next/app'
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from '@chakra-ui/react'
import {theme} from '@/styles/theme'

interface MyAppProps extends AppProps {
  cookies?: any
}

export const siteTitle = 'Todo'

export default function MyApp({Component, pageProps, cookies}: MyAppProps) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export async function getServerSideProps({req}) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
