import Head from 'next/head'
import { AboutContent } from '@/modules/About'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Mason Mint</title>
      </Head>
      <AboutContent />
    </>
  )
}

export const getStaticProps = () => {
  return {
    props: {},
  }
}
