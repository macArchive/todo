import Cta from '@/comps/general/cta'
import Features from '@/comps/index/features'
import Hero from '@/comps/index/hero'
import Layout from '@/layout/index'

export default function Home() {
  return (
    <Layout title='Home' description='Your new favourite todo application'>
      <Hero />
      <Features />
      <Cta />
    </Layout>
  )
}
