import nookies from 'nookies'
import { firebaseAdmin } from '@/lib/firebaseAdmin'

import Layout from '@/layout/index'
import Hero from '@/comps/index/hero'
import Features from '@/comps/index/features'
import Cta from '@/comps/contact/cta'

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
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)

    const { uid, email } = token
    const user = { uid, email }

    return {
      props: { token, user }
    }
  } catch (err) {
    return { props: {} as never }
  }
}
