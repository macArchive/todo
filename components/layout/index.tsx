
import Head from "./head"
import Header from "./header"
import Content from "./content"
import Footer from "./footer"

interface LayoutProps {
  title: string
  description: string
}
export default function Layout({title, description}) {
  return (
    <>
      <Head />
      <Header />
      <Content />
      <Footer />
    </>
  )
}
