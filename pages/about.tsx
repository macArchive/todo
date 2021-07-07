import Hero from '@/comps/about/hero'
import List from '@/comps/about/list'
import Cta from '@/comps/general/cta'
import Layout from '@/comps/layout'

export default function About() {
  return (
    <Layout
      title='About'
      description='Learn more about todo and the team behind it.'>
      <Hero />
      <List />
      <Cta />
    </Layout>
  )
}
