import {AppProps} from "next/app"
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from "@chakra-ui/core"
import {theme} from "@/styles/theme"

export const siteTitle = "Todo"

export default function MyApp({Component, pageProps, cookies}) {
  const colorModeManager =
    typeof cookies === "string"
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
      cookies: req.headers.cookie ?? ""
    }
  }
}
