import { useDisclosure } from '@chakra-ui/react'
import Content from './content'
import Footer from './footer'
import Head from './head'
import Header from './header'

interface LayoutProps {
  title: string
  description: string
  children: any
}

export default function Layout({ title, description, children }: LayoutProps) {
  const { onOpen } = useDisclosure()

  return (
    <>
      <Head
        pageTitle={title}
        pageDescription={description}
        socialImage='ph'
        socialImageText='ph'
        siteIcon='ph'
        touchIcon='ph'
        siteLocale='en_GB'
        siteType='website'
        siteUrl='https://.com'
        themeColor='#0099ff'
      />
      <Header onOpen={onOpen} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
