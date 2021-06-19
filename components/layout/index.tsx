import Head from "./head"
import Header from "./header"
import Content from "./content"
import Footer from "./footer"

interface LayoutProps {
  title: string
  description: string
}
export default function Layout({title, description, children}) {
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
      <Header />
      <Content flexDirection='column' maxWidth={960}>
        {children}
      </Content>
      <Footer />
    </>
  )
}
