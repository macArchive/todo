import Cta from '@/comps/general/cta'
import Features from '@/comps/index/features'
import Hero from '@/comps/index/hero'
import Layout from '@/layout/index'
import { admin } from '@/lib/firebase'
import nookies from 'nookies'

export default function Home() {
  return (
    <Layout title='Home' description='Your new favourite todo application'>
      <Hero />
      <Features />
      <Cta />
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  try {
    const cookies = nookies.get(ctx)
    const token = await admin.auth().verifyIdToken(cookies.token)

    const { uid, email } = token
    const user = { uid, email }

    return {
      props: { token, user }
    }
  } catch (err) {
    return { props: {} as never }
  }
}
