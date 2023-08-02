import Head from 'next/head'
import { AboutContent } from '@/modules/About'
import RouterTransitionLayout from '@/app/layouts/RouterTransitionLayout'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Mason Mint</title>
      </Head>
      <RouterTransitionLayout>
        <AboutContent />
      </RouterTransitionLayout>
    </>
  )
}

export const getStaticProps = () => {
  return {
    props: {},
  }
}
